export const projects = [{
        title: "ResumeLens: AI Resume Analyzer",
        summary: "Compares a resume against a job description and returns a match score, matched and missing skills, experience gaps, and specific fixes. Gemini returns Pydantic-validated JSON, so the UI renders it with no text parsing.",
        metric: "Structured output",
        stack: ["React", "FastAPI", "Gemini API", "Pydantic", "Python"],
        github: "https://github.com/AmanMalik2004/Resume-Analyzer",
        // demo: "",  // add a live link once deployed
    },
    {
        title: "Document Q&A RAG Assistant",
        summary: "A retrieval-augmented Q&A system that lets you ask questions over your own documents. Deployed and live, not just a notebook.",
        metric: "Deployed",
        stack: ["LangChain", "ChromaDB", "Sentence-Transformers", "Groq", "Streamlit"],
        github: "https://github.com/AmanMalik2004/document-qa-assistant",
    },
    {
        title: "AI-Powered Multilingual Translator",
        summary: "Translation across 200+ languages using Meta NLLB-200 through Hugging Face Transformers, with model caching for fast inference behind a Streamlit interface.",
        metric: "200+ languages",
        stack: ["Hugging Face", "NLLB-200", "Streamlit", "Python"],
        github: "https://github.com/AmanMalik2004/ai-multilingual-translator", // TODO: real repo URL
    },
    {
        title: "Face Emotion Detection",
        summary: "Custom CNN trained from scratch on FER2013 (35K+ images, 7 emotions) using augmentation, batch norm, and dropout, running live through an OpenCV webcam pipeline.",
        metric: "67.6% test acc",
        stack: ["TensorFlow", "Keras", "OpenCV", "CNN"],
        github: "https://github.com/AmanMalik2004/Face-Emotion-Detection",
    },
    {
        title: "RL Navigation Agent",
        summary: "Q-Learning agent built from scratch in NumPy (epsilon-greedy exploration, Bellman updates, reward shaping) with a Tkinter GUI that visualizes training, learned policies, and Q-value heatmaps.",
        metric: "Q-Learning",
        stack: ["Python", "NumPy", "Q-Learning", "Tkinter"],
        github: "https://github.com/AmanMalik2004/RL-Navigation-Agent",
    },
    {
        title: "AI Smart Load Balancer",
        summary: "A load balancer that uses ML to route traffic intelligently rather than relying on static rules.",
        metric: "Systems + ML",
        stack: ["Python", "ML"],
        github: "https://github.com/AmanMalik2004/AI-Smart-Load-Balancer",
    },
];