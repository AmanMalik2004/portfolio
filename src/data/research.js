export const researchFocus = [
    "LLM agent reliability",
    "Agent orchestration",
    "Multi-agent systems",
    "Deterministic guardrails",
    "Tool-using agents",
    "State management",
    "Transactional AI systems",
    "LLM evaluation",
];

export const publications = [{
        featured: true,
        title: "Do Multi-Agent LLM Systems Actually Help? A Controlled Evaluation of Single-Agent, LLM-Orchestrated, and Deterministically Orchestrated Architectures",
        authors: "Aman Malik, Muhammad Ayesh Qureshi",
        type: "Research preprint · Controlled evaluation",
        year: "2026",
        doi: "10.5281/zenodo.22957165",
        summary: "30 benchmark tasks × 3 architectures × 3 repetitions (270 measured runs), investigating when multi-agent decomposition improves reliability and when deterministic orchestration adds value.",
        results: [
            { label: "Single agent", value: "94.44%" },
            { label: "LLM-orchestrated multi-agent", value: "74.44%" },
            { label: "Deterministic multi-agent", value: "93.33%" },
        ],
    },
    {
        title: "Beyond Prompt Engineering: A Controlled Evaluation of Deterministic Guardrails in a Transactional LLM Agent",
        authors: "Aman Malik",
        type: "Research preprint · Exploratory controlled evaluation",
        year: "2026",
        doi: "10.5281/zenodo.22743668",
        summary: "Prompt/context-only versus deterministic tool/workflow guardrails in a transactional LLM agent, across 20 scenarios.",
        results: [
            { label: "Prompt/context-only", value: "70%" },
            { label: "Deterministic tool/workflow", value: "90%" },
        ],
        note: "20 scenarios · exact two-sided McNemar p = 0.125 · exploratory, not statistically conclusive.",
    },
];

export const articles = [{
        title: "Beyond Prompt Engineering: What Actually Makes an LLM Agent Reliable?",
        subtitle: "A write-up of a 20-scenario controlled evaluation: a prompt-only agent reached 70% task success (14/20) versus 90% (18/20) with deterministic tools, routing, and validation.",
        url: "https://medium.com/@amanhmalik/beyond-prompt-engineering-what-actually-makes-an-llm-agent-reliable-0eb8c8e3a029",
        doi: "10.5281/zenodo.22743668",
    },
    {
        title: "Do Multi-Agent LLM Systems Actually Help? We Tested It Across 270 Runs",
        subtitle: "More agents sound more capable, but our experiment suggests the coordination between them may matter more than the number of agents.",
        url: "https://medium.com/@amanhmalik/do-multi-agent-llm-systems-actually-help-we-tested-it-across-270-runs-ec96645961a6",
        doi: "10.5281/zenodo.22957165",
    },
];