export interface ServiceItem {
  id: string;
  title: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
  index: string;
}

export const services: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Applications",
    categoryLabel: "Web Engineering",
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
    index: "01",
  },
  {
    id: "ai-rag",
    title: "AI Chatbots & RAG Systems",
    categoryLabel: "Generative AI",
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
    index: "02",
  },
  {
    id: "backend-api",
    title: "REST API & Backend Architecture",
    categoryLabel: "Distributed Systems",
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
    index: "03",
  },
  {
    id: "ml-dashboards",
    title: "ML Prototypes & Dashboards",
    categoryLabel: "Analytics & AI",
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
    index: "04",
  },
];
