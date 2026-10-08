export interface ServiceItem {
  id: string;
  title: string;
  titleDevanagari: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
  devanagariIndex: string;
}

export const services: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Applications",
    titleDevanagari: "वेब ऍप्लिकेशन्स",
    tagline: "End-to-end modern web applications built for speed, scale, and polish.",
    description:
      "Crafting production-ready web apps from responsive frontend architectures in Next.js and React to robust server-side backends and databases with seamless user experiences.",
    deliverables: [
      "Custom Next.js & React architectures",
      "Interactive responsive UI with Tailwind & Framer Motion",
      "Database schema modeling (PostgreSQL / MongoDB)",
      "Secure authentication & session handling",
    ],
    iconName: "Globe",
    devanagariIndex: "०१",
  },
  {
    id: "ai-rag",
    title: "AI Chatbots & RAG Systems",
    titleDevanagari: "कृत्रिम बुद्धिमत्ता बॉट्स",
    tagline: "Intelligent domain-specific copilots grounded in your private documents.",
    description:
      "Developing conversational AI assistants with Retrieval-Augmented Generation (RAG), Groq LLM streaming, vector search, tool calling, and guardrails to prevent hallucinations.",
    deliverables: [
      "Groq & OpenAI streaming pipelines",
      "Vector embeddings & document chunking",
      "LangChain custom agents & function calling",
      "Strict query validation & injection defenses",
    ],
    iconName: "Bot",
    devanagariIndex: "०२",
  },
  {
    id: "backend-api",
    title: "REST API & Backend Architecture",
    titleDevanagari: "बैकएंड एवं एपीआई",
    tagline: "High-throughput, secured, and modular microservices for client apps.",
    description:
      "Designing clean, documented RESTful and WebSocket endpoints with rate limiting, Redis caching, structured logging, and transactional database safety.",
    deliverables: [
      "Express 5, Node.js & Python FastAPI backends",
      "Real-time WebSocket / Socket.IO infrastructure",
      "JWT authentication & Role-Based Access Control",
      "Comprehensive Postman & automated Vitest suites",
    ],
    iconName: "Server",
    devanagariIndex: "०३",
  },
  {
    id: "ml-dashboards",
    title: "ML Prototypes & Dashboards",
    titleDevanagari: "डैशबोर्ड एवं प्रोटोटाइप",
    tagline: "Interactive demonstration platforms and graph analytics workflows.",
    description:
      "Turning experimental machine learning models and data science algorithms into intuitive, interactive web dashboards for stakeholders and clients.",
    deliverables: [
      "Streamlit & Next.js analytical dashboards",
      "Graph Neural Network (GNN) visualization",
      "Model inference benchmarking & latency tracking",
      "Explainable AI integration (SHAP & GNNExplainer)",
    ],
    iconName: "LineChart",
    devanagariIndex: "०४",
  },
];
