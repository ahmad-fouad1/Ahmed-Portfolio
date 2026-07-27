// Grouped competencies. Edit freely — the Skills section renders whatever is here.

export const skillGroups = [
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    note: "Model building, training and evaluation",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "RNN / LSTM / GRU",
      "Attention Mechanisms",
      "ResNet",
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    note: "Detection, tracking and image pipelines",
    items: [
      "OpenCV",
      "YOLOv8",
      "Object Tracking (SiamFC, OSTrack)",
      "Image Segmentation",
      "Panorama Stitching",
      "HDR Imaging",
      "Depth Estimation",
    ],
  },
  {
    id: "nlp",
    title: "NLP & Generative AI",
    note: "LLM applications and retrieval systems",
    items: [
      "Natural Language Processing",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Hugging Face",
      "Tokenization & Word Embeddings",
    ],
  },
  {
    id: "data",
    title: "Data Science & Analysis",
    note: "From raw data to decisions",
    items: [
      "Data Analysis",
      "EDA & Data Cleaning",
      "Feature Selection",
      "Clustering (K-Means, K-Medoids, Fuzzy)",
      "PCA / LDA",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    id: "eng",
    title: "Software & Backend Engineering",
    note: "Shipping maintainable systems",
    items: [
      "Python",
      "JavaScript",
      "Node.js",
      "Django",
      "Design Patterns",
      "Software Engineering Principles",
      "Agile Methodology",
      "SQL & Databases",
      "Git & GitHub",
    ],
  },
  {
    id: "infra",
    title: "Cloud, IoT & Systems",
    note: "Where the models actually run",
    items: ["AWS", "Cloud Computing", "Networks", "IoT & Embedded Systems"],
  },
]

// A dedicated subsection — the tools used day to day to build and ship AI work.
export const aiTools = [
  {
    name: "LangChain",
    use: "Chains, prompt templates and LLM workflow pipelines",
  },
  {
    name: "OpenRouter",
    use: "Dynamic model switching across providers in production apps",
  },
  {
    name: "Hugging Face",
    use: "Pretrained models, tokenizers and fine-tuning experiments",
  },
  {
    name: "n8n",
    use: "AI workflow automation and connecting models to real services",
  },
  {
    name: "YOLOv8 / Ultralytics",
    use: "Real-time detection and multi-object tracking",
  },
  {
    name: "PyTorch",
    use: "Primary framework for research-style model implementation",
  },
  {
    name: "TensorFlow / Keras",
    use: "Comparative training runs and sequence models",
  },
  {
    name: "RAG pipelines",
    use: "Grounding LLM answers in retrieved, domain-specific context",
  },
]
