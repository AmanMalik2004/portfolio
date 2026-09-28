import { projects } from "./data/projects";
import { experience } from "./data/experience";
import { publications, articles, researchFocus } from "./data/research";
import { skillGroups } from "./data/skills";

function ResultBars({ results }) {
  return (
    <div className="space-y-3">
      {results.map((r) => (
        <div key={r.label}>
          <div className="flex justify-between font-mono text-xs mb-1">
            <span>{r.label}</span>
            <span className="text-teal">{r.value}</span>
          </div>

          <div className="h-2 bg-gridline rounded">
            <div
              className="h-2 bg-teal rounded"
              style={{ width: r.value }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div
      className="min-h-screen bg-paper text-ink font-body"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-gridline) 1px, transparent 1px), linear-gradient(90deg, var(--color-gridline) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        backgroundPosition: "-1px -1px",
      }}
    >
      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-5xl mx-auto">
        <span className="font-display font-semibold text-lg">
          Aman Malik
        </span>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 font-mono text-sm">
          <a
            href="#experience"
            className="hover:text-amber transition-colors"
          >
            experience
          </a>

          <a href="#research" className="hover:text-amber transition-colors">
            research
          </a>

          <a href="#work" className="hover:text-amber transition-colors">
            work
          </a>

          <a href="#skills" className="hover:text-amber transition-colors">
            skills
          </a>

          <a href="#about" className="hover:text-amber transition-colors">
            about
          </a>

          <a href="#contact" className="hover:text-amber transition-colors">
            contact
          </a>

          <a
            href="/resume.pdf?v=20260928"
            target="_blank"
            rel="noreferrer"
            className="bg-ink text-paper px-4 py-2 rounded hover:bg-amber transition-colors"
          >
            resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-8 pt-24 pb-32">
        <p className="font-mono text-sm text-teal mb-4">
          aman-malik / portfolio.log
        </p>

        <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight max-w-3xl">
          Building ML systems that{" "}
          <span className="bg-amber px-2">actually ship</span>.
        </h1>

        <p className="font-body text-lg max-w-2xl mt-6 text-ink/80">
          CS undergrad at FAST-NUCES and Agentic AI Engineer at BizBuddy,
          building tool-calling LLM agents, RAG systems, and computer vision
          models, and publishing research on what makes agents reliable.
        </p>

        <div className="flex gap-4 mt-10 font-mono text-sm">
          <a
            href="#work"
            className="bg-ink text-paper px-6 py-3 rounded hover:bg-amber hover:text-ink transition-colors"
          >
            View Work →
          </a>

          <a
            href="#contact"
            className="border border-ink px-6 py-3 rounded hover:border-amber hover:text-amber transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-5xl mx-auto px-8 py-24"
      >
        <p className="font-mono text-sm text-teal mb-2">
          02 / experience
        </p>

        <h2 className="font-display font-bold text-3xl mb-12">
          Experience
        </h2>

        {experience.map((job) => (
          <div
            key={job.company}
            className="border border-gridline bg-paper/60 rounded-lg p-6 flex flex-col gap-4 hover:border-amber transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-semibold text-xl">
                  {job.role}
                </h3>

                <p className="font-mono text-sm text-ink/60">
                  {job.company} · {job.location}
                </p>
              </div>

              <span className="font-mono text-sm text-teal whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-ink/80 text-sm leading-relaxed">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {job.stack.map((t) => (
                <span
                  key={t}
                  className="border border-gridline px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* RESEARCH & WRITING */}
      <section
        id="research"
        className="max-w-5xl mx-auto px-8 py-24"
      >
        <p className="font-mono text-sm text-teal mb-2">
          03 / research
        </p>

        <h2 className="font-display font-bold text-3xl mb-4">
          Research & Writing
        </h2>

        <p className="max-w-2xl text-ink/80 mb-6">
          Controlled evaluations of how reliable LLM agents are, and what makes
          them more so.
        </p>

        <div className="flex flex-wrap gap-2 font-mono text-xs mb-10">
          {researchFocus.map((t) => (
            <span
              key={t}
              className="border border-gridline px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          {publications.map((p) => (
            <div
              key={p.doi}
              className={`border bg-paper/60 rounded-lg p-6 flex flex-col gap-4 hover:border-amber transition-colors ${
                p.featured ? "border-amber" : "border-gridline"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                {p.featured && (
                  <span className="bg-amber text-ink px-2 py-1 rounded">
                    Featured
                  </span>
                )}

                <span className="text-teal">{p.type}</span>

                <span className="text-ink/60">{p.year}</span>
              </div>

              <h3 className="font-display font-semibold text-xl">
                {p.title}
              </h3>

              <p className="font-mono text-sm text-ink/60">
                {p.authors}
              </p>

              <p className="text-ink/80 text-sm leading-relaxed">
                {p.summary}
              </p>

              <ResultBars results={p.results} />

              {p.note && (
                <p className="font-mono text-xs text-ink/60">
                  {p.note}
                </p>
              )}

              <a
                href={`https://doi.org/${p.doi}`}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm mt-auto hover:text-amber transition-colors"
              >
                DOI: {p.doi} →
              </a>
            </div>
          ))}
        </div>

        <h3 className="font-mono text-sm text-ink/60 uppercase tracking-wide mt-14 mb-4">
          Articles
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <div
              key={a.title}
              className="border border-gridline bg-paper/60 rounded-lg p-6 flex flex-col gap-3 hover:border-amber transition-colors"
            >
              <h4 className="font-display font-semibold text-lg">
                {a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber transition-colors underline decoration-gridline underline-offset-4"
                  >
                    {a.title}
                  </a>
                ) : (
                  a.title
                )}
              </h4>

              <p className="text-ink/80 text-sm leading-relaxed">
                {a.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 font-mono text-sm mt-auto pt-2">
                {a.url && (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber transition-colors"
                  >
                    Read on Medium →
                  </a>
                )}

                {a.doi && (
                  <a
                    href={`https://doi.org/${a.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber transition-colors"
                  >
                    Research DOI →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="work"
        className="max-w-5xl mx-auto px-8 py-24"
      >
        <p className="font-mono text-sm text-teal mb-2">
          04 / projects
        </p>

        <h2 className="font-display font-bold text-3xl mb-12">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gridline bg-paper/60 rounded-lg p-6 flex flex-col gap-4 hover:border-amber transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-semibold text-xl">
                  {project.title}
                </h3>

                <span className="font-mono text-sm text-teal whitespace-nowrap">
                  {project.metric}
                </span>
              </div>

              <p className="text-ink/80 text-sm leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-gridline px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 font-mono text-sm mt-auto pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber transition-colors"
                >
                  GitHub →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-8 py-24"
      >
        <p className="font-mono text-sm text-teal mb-2">
          05 / skills
        </p>

        <h2 className="font-display font-bold text-3xl mb-12">
          Toolkit
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm text-ink/60 uppercase tracking-wide mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm border border-gridline px-3 py-1.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-8 py-24"
      >
        <p className="font-mono text-sm text-teal mb-2">
          06 / about
        </p>

        <h2 className="font-display font-bold text-3xl mb-8">
          About Me
        </h2>

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            I'm Aman Malik, a Computer Science undergraduate at FAST-NUCES
            Karachi and an Agentic AI Engineer at BizBuddy, where I
            build production LLM agents for real business workflows: tool
            calling, workflow logic, and the reliability safeguards that keep
            them working.
          </p>

          <p>
            My research asks when LLM agents can be trusted. I have published
            two controlled evaluations on Zenodo, one on deterministic
            guardrails in a transactional agent and one on whether multi-agent
            architectures actually help, and I write about the results on
            Medium.
          </p>

          <p>
            Outside work I build RAG applications, NLP and computer vision
            models, and tools like ResumeLens, and I like shipping them as
            working demos rather than notebooks.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-8 py-24"
      >
        <p className="font-mono text-sm text-teal mb-2">
          07 / contact
        </p>

        <h2 className="font-display font-bold text-3xl mb-8">
          Let's Build Something Together
        </h2>

        <p className="max-w-2xl text-lg text-ink/80 mb-10">
          I'm currently looking for AI/ML, software engineering
          opportunities, and exciting projects. Feel free to reach out if
          you'd like to collaborate or just have a chat about AI.
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amanhmalik@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
            rel="noreferrer"
            className="bg-ink text-paper px-6 py-3 rounded hover:bg-amber hover:text-ink transition-colors"
          >
            Email Me
          </a>

          <a
            href="https://github.com/AmanMalik2004"
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-6 py-3 rounded hover:border-amber hover:text-amber transition-colors"
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/aman-malik-15892a290/"
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-6 py-3 rounded hover:border-amber hover:text-amber transition-colors"
          >
            LinkedIn →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gridline">
        <div className="max-w-5xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-ink/60">
            © {new Date().getFullYear()} Aman Malik. All rights reserved.
          </p>

          <p className="font-mono text-sm text-ink/60">
            Built with React + Vite + Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;