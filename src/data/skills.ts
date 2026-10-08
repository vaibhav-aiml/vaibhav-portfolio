export interface SkillCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    subtitle: "Deep Learning & LLMs",
    description: "Generative AI, dense vector retrieval, graph representation learning, and agentic workflows.",
    iconName: "Cpu",
    skills: [
      "Large Language Models (LLMs)",
      "LangChain",
      "Groq API",
      "Retrieval-Augmented Generation (RAG)",
      "PyTorch Geometric",
      "Graph Neural Networks (GNNs)",
      "GraphSAGE",
      "Natural Language Processing (NLP)",
      "Prompt Engineering",
    ],
  },
  {
    id: "backend",
    name: "Backend & Systems",
    subtitle: "High-Throughput APIs",
    description: "High-throughput REST APIs, bidirectional WebSockets, caching, and secure token authentication.",
    iconName: "Server",
    skills: [
      "Node.js",
      "Express 5",
      "Python",
      "Flask",
      "RESTful APIs",
      "Socket.IO",
      "WebSockets",
      "JWT & RBAC",
      "OAuth 2.0",
      "Rate Limiting",
    ],
  },
  {
    id: "frontend",
    name: "Frontend Engineering",
    subtitle: "Reactive Interfaces",
    description: "Modern, reactive, high-performance web interfaces with fluid motion and design systems.",
    iconName: "Layout",
    skills: [
      "React 18 / 19",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js / R3F",
      "HTML5 & CSS3",
      "Vite",
      "Clerk Auth",
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    subtitle: "Data Architectures",
    description: "Relational modeling, document stores, vector indexing, and memory cache tiers.",
    iconName: "Database",
    skills: [
      "PostgreSQL (Neon)",
      "Supabase",
      "MongoDB",
      "SQLite",
      "Redis",
      "Drizzle ORM",
      "Mongoose",
      "SQL Schema Design",
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud, DevOps & Tools",
    subtitle: "Infrastructure & CI/CD",
    description: "Containerization, automated deployments, testing suites, and collaborative version control.",
    iconName: "Cloud",
    skills: [
      "Docker",
      "Vercel",
      "Netlify",
      "Render",
      "CI/CD Pipelines",
      "Git & GitHub",
      "Postman",
      "Thunder Client",
      "Vitest",
    ],
  },
];
