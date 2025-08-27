export default [
  {
    title: "NyayaSahaya",
    image:
      "/nyayasahaya.jpg",
    techStack: ["Python", "React", "Nodejs"],
    repo: "https://github.com/GowdaVarun/NyayaSahaya",
    description:
      "A legal-tech platform with a React frontend, FastAPI-powered RAG chatbot, and Streamlit document generator for legal guidance and document automation.",
    moreInfo: [
      "React-based frontend with multi-page routing, navigation bar, and interactive Particles.js background.",
      "FastAPI-powered legal RAG chatbot leveraging LangChain, FAISS, and Mixtral-8x22B-Instruct.",
      "Streamlit-driven document generator supporting multiple legal templates and PDF output.",
      "Integrated legal document summarization and RESTful APIs for efficient legal information access.",
    ],
  },
  {
    title: "Network Traffic Anomaly Detection",
    image:
      "/network_anomaly.jpg",
    techStack: ["Python", "Flask", "PyShark", "Scikit-learn", "React"],
    repo: "https://github.com/GowdaVarun/Network-Traffic-Anomaly-Detection",
    description:
      "A real-time network traffic analyser for anomaly detection using live packet captures and machine learning models.",
    moreInfo: [
      "Used unsupervised models (Isolation Forest, LOF, One-Class SVM, KMeans Clustering) and supervised Gradient XG-Boost.",
      "Real-time alerting system for suspicious activity via email.",
      "Interactive analytics dashboards to visualize network patterns and anomaly trends.",
    ],
  },
  {
    title: "Medi-Track (Design Thinking Project)",
    image:
      "/meditrack.jpg",
    techStack: ["React", "CSS", "MongoDB"],
    description:
      "A digital health history tracking system for organized medical record management.",
    repo: "https://github.com/GowdaVarun/Medi-Track",
    moreInfo: [
      "Patient registration and secure health record storage for easy access.",
      "MongoDB and Firebase for hybrid storage of patient details and medical documents.",
    ],
  },
  {
    title: "Checkpoint Driven Task Handler",
    image:
      "checkpoint.png",
    techStack: ["Node.js", "Express", "C"],
    description:
      "A real-time task management system with checkpoint-based execution for progress tracking and recovery.",
    repo: "https://github.com/GowdaVarun/Checkpoint_Driven_Task_Handler",
    moreInfo: [
      "Random crash simulation (memory, I/O, network) to test system resilience.",
      "Automatic and manual recovery mechanisms via an interactive UI.",
      "REST APIs for task creation, progress monitoring, and failure handling.",
    ],
  },
];
