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
    id: "languages",
    name: "Languages",
    subtitle: "Core Foundations",
    description: "Strong algorithmic problem solving, asynchronous runtime mastery, and database querying.",
    iconName: "Code",
    skills: [
      "Python 3.11",
      "TypeScript",
      "JavaScript (ES6+)",
      "C++ (STL & Algorithmic)",
      "SQL (PostgreSQL Dialect)",
      "HTML5 & Modern CSS",
    ],
  },
  {
    id: "frontend",
    name: "Frontend Engineering",
    subtitle: "Reactive Interfaces",
    description: "Modern, reactive, high-performance web interfaces with fluid motion and design systems.",
    iconName: "Layout",
    skills: [
      "Next.js 14 App Router",
      "React 19",
      "Tailwind CSS",
      "React Query / TanStack",
      "Zustand State",
      "Framer Motion",
      "Three.js / WebGL",
      "Clerk Auth",
    ],
  },
  {
    id: "backend",
    name: "Backend & Realtime",
    subtitle: "High-Throughput APIs",
    description: "High-throughput REST APIs, bidirectional WebSockets, caching, and secure token authentication.",
    iconName: "Server",
    skills: [
      "FastAPI & AsyncIO",
      "Node.js & Express 5",
      "WebSocket & Socket.IO",
      "Supabase Auth & RLS",
      "RESTful Architecture",
      "JWT & Role-Based Access",
      "Token-Bucket Rate Limiting",
    ],
  },
  {
    id: "databases",
    name: "Databases & Caching",
    subtitle: "Data Architectures",
    description: "Relational modeling, document stores, vector indexing, and memory cache tiers.",
    iconName: "Database",
    skills: [
      "PostgreSQL 16",
      "Redis Pub/Sub",
      "pgvector (Vector Embeddings)",
      "Drizzle ORM & Prisma",
      "MongoDB",
      "SQLite",
      "FHIR / HL7 Data Schemas",
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    subtitle: "Deep Learning & LLMs",
    description: "Generative AI, dense vector retrieval, graph representation learning, and agentic workflows.",
    iconName: "Cpu",
    skills: [
      "LangChain & LangGraph",
      "PyTorch Geometric (GNN)",
      "GraphSAGE",
      "Groq LLM Acceleration",
      "RAG Architecture",
      "Quantized LLMs (4-bit/8-bit)",
      "Chroma & Pinecone Vector DBs",
      "Prompt Engineering",
    ],
  },
  {
    id: "cloud-devops",
    name: "DevOps & Tooling",
    subtitle: "Infrastructure & CI/CD",
    description: "Containerization, automated deployments, testing suites, and collaborative version control.",
    iconName: "Cloud",
    skills: [
      "Docker & Compose",
      "AWS (EC2, S3)",
      "Vercel & Cloudflare",
      "Git & GitHub Actions",
      "Postman API Testing",
      "Linux / Bash CLI",
      "Vitest Test Suites",
    ],
  },
];
