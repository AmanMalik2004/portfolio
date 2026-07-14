import { projects } from "./data/projects";

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

        <div className="flex items-center gap-6 font-mono text-sm">
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
            href="/resume.pdf"
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
          CS undergrad at FAST-NUCES, building computer vision, RAG, and
          fine-tuned language models—then shipping them as working demos, not
          just notebooks.
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

      {/* PROJECTS */}
      <section id="work" className="max-w-5xl mx-auto px-8 py-24">
        <p className="font-mono text-sm text-teal mb-2">
          02 / projects
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
      <section id="skills" className="max-w-5xl mx-auto px-8 py-24">
        <p className="font-mono text-sm text-teal mb-2">03 / skills</p>

        <h2 className="font-display font-bold text-3xl mb-12">
          Toolkit
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Languages */}
          <div>
            <h3 className="font-mono text-sm text-ink/60 uppercase tracking-wide mb-4">
              Languages
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "C / C++",
                "SQL",
                "PHP",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-sm border border-gridline px-3 py-1.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ML / AI */}
          <div>
            <h3 className="font-mono text-sm text-ink/60 uppercase tracking-wide mb-4">
              ML / AI
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "PyTorch",
                "TensorFlow / Keras",
                "YOLOv8",
                "OpenCV",
                "Scikit-learn",
                "LangChain",
                "LoRA / QLoRA",
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-sm border border-gridline px-3 py-1.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Tools */}
          <div>
            <h3 className="font-mono text-sm text-ink/60 uppercase tracking-wide mb-4">
              Systems &amp; Tools
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Linux / Bash",
                "Git",
                "POSIX Threads",
                "IPC",
                "Streamlit",
                "NumPy",
                "Matplotlib",
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-sm border border-gridline px-3 py-1.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-24">
        <p className="font-mono text-sm text-teal mb-2">
          04 / about
        </p>

        <h2 className="font-display font-bold text-3xl mb-8">
          About Me
        </h2>

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            I'm Aman Malik, a Computer Science undergraduate at
            FAST-NUCES Karachi with a strong interest in Artificial
            Intelligence, Machine Learning, and Software Engineering.
          </p>

          <p>
            I enjoy building practical AI systems—from multilingual
            translators and Retrieval-Augmented Generation (RAG)
            applications to computer vision models, fine-tuned LLMs,
            and intelligent automation tools.
          </p>

          <p>
            I'm passionate about turning research into real products,
            continuously learning modern AI technologies, and creating
            software that delivers meaningful impact.
          </p>
        </div>
      </section>
            {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-8 py-24">
        <p className="font-mono text-sm text-teal mb-2">
          05 / contact
        </p>

        <h2 className="font-display font-bold text-3xl mb-8">
          Let's Build Something Together
        </h2>

        <p className="max-w-2xl text-lg text-ink/80 mb-10">
          I'm currently looking for AI/ML internships, software engineering
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