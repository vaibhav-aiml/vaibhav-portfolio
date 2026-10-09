export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  categories: ("AI-ML" | "Full-Stack" | "Backend")[];
  featured: boolean;
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
  metrics: string[];
  liveUrl: string;
  githubUrl: string;
  index: string;
  telemetryHighlight: string;
  videoUrl?: string;
}

export const projectCategories = ["All", "AI-ML", "Full-Stack", "Backend"] as const;

export const projects: ProjectItem[] = [
  {
    id: "medivoice-ai",
    slug: "medivoice-ai",
    title: "MediVoice AI",
    tagline: "Sub-2s latency AI healthcare consultation platform with HL7/FHIR EMR integration",
    description:
      "Enterprise healthcare consultation platform streaming Groq LLM responses over WebSockets for 50+ concurrent users with sub-2s latency. Engineered with a FHIR/HL7 electronic medical record data layer, Clerk JWT authentication, fine-grained role-based access control (RBAC), and rate limiting on 15+ API endpoints. Backed by a 23-file Vitest test suite.",
    categories: ["AI-ML", "Full-Stack"],
    featured: true,
    image: "/images/project-medivoice.png",
    stats: [
      { label: "Latency", value: "<2.0s" },
      { label: "Concurrency", value: "50+ Users" },
      { label: "Endpoints", value: "15+ Protected" },
      { label: "Tests", value: "23 Vitest Suites" },
    ],
    tags: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express 5",
      "Socket.IO",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Clerk",
      "Groq LLM",
    ],
    metrics: [
      "Sub-2s streaming response latency via Groq Llama 3",
      "FHIR/HL7 compliant healthcare telemetry and records",
      "Full Redis-based token bucket rate limiting on 15+ routes",
      "23 comprehensive Vitest integration and unit test suites",
    ],
    liveUrl: "https://majestic-speculoos-f73a91.netlify.app/",
    githubUrl: "https://github.com/vaibhav-aiml/ai-medical-voice-agent",
    index: "01",
    telemetryHighlight: "Sub-2s streaming for 50+ concurrent users · HIPAA / HL7 Compliant",
    videoUrl: "/videos/medivoice-demo.mp4",
  },
  {
    id: "fitsphere",
    slug: "fitsphere",
    title: "FitSphere",
    tagline: "AI-coached fitness platform with real-time biometric and workout feedback",
    description:
      "Comprehensive fitness ecosystem featuring real-time workout form guidance, intelligent 1RM (one-rep max) tracking algorithms, interactive social fitness feed, and macro-nutrition tracking. Integrated with dual Email and Google OAuth authentication flows.",
    categories: ["Full-Stack"],
    featured: false,
    image: "/images/project-fitsphere.png",
    stats: [
      { label: "Auth", value: "OAuth + JWT" },
      { label: "Architecture", value: "Next.js App" },
      { label: "Tracking", value: "1RM & Macros" },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google OAuth",
    ],
    metrics: [
      "Real-time workout performance tracking and 1RM calculation",
      "Dynamic social fitness feed with community milestone sharing",
      "Robust MongoDB aggregation pipeline for nutritional telemetry",
    ],
    liveUrl: "https://fitsphere-phi.vercel.app",
    githubUrl: "https://github.com/vaibhav-aiml/fitsphere",
    index: "02",
    telemetryHighlight: "AI workout coach + 1RM tracking & form evaluation",
  },
  {
    id: "truffle",
    slug: "truffle",
    title: "Truffle",
    tagline: "Production-grade LLM customer support agent with Text-to-SQL and RAG",
    description:
      "High-reliability customer support intelligence engine executing natural language Text-to-SQL queries combined with dense vector retrieval (RAG). Hardened with a custom read-only SQLite query authorizer preventing SQL injection, Redis circuit breakers, and rate limiters within Docker containerized health checks.",
    categories: ["AI-ML", "Backend"],
    featured: false,
    image: "/images/project-truffle.png",
    stats: [
      { label: "Security", value: "Read-only Authorizer" },
      { label: "Resilience", value: "Redis Circuit Breaker" },
      { label: "Container", value: "Dockerized" },
    ],
    tags: [
      "Python",
      "LangChain",
      "Groq",
      "OpenAI",
      "SQLite",
      "Redis",
      "Streamlit",
      "Docker",
    ],
    metrics: [
      "Zero SQL injection vulnerability via AST-level query parsing",
      "Fault-tolerant Redis circuit breaker for LLM fallback handling",
      "Docker containerized microservice with automated health checks",
    ],
    liveUrl: "https://truffle-agent-qq5mv4nx7wocr2jrrzbvkw.streamlit.app/",
    githubUrl: "https://github.com/vaibhav-aiml/truffle-agent",
    index: "03",
    telemetryHighlight: "Redis circuit breaker + AST-level query validation",
  },
  {
    id: "aml-gnn-upi",
    slug: "aml-gnn-upi",
    title: "AML-GNN-UPI",
    tagline: "Graph Neural Network anti-money laundering fraud detection on 50,000 UPI transactions",
    description:
      "Advanced fraud surveillance engine executing topological graph analysis on synthetic UPI financial networks (50,000 transactions across 1,000 banking accounts). Benchmarked multiple graph architectures, with GraphSAGE achieving 61.92% AUC-ROC and 60.87% F1 score. Exposed via FastAPI with explainable AI (GNNExplainer and SHAP).",
    categories: ["AI-ML"],
    featured: false,
    image: "/images/project-aml-gnn.png",
    stats: [
      { label: "Transactions", value: "50,000 Nodes" },
      { label: "AUC-ROC", value: "61.92%" },
      { label: "F1 Score", value: "60.87%" },
      { label: "Explainability", value: "GNNExplainer" },
    ],
    tags: [
      "Python",
      "PyTorch Geometric",
      "GraphSAGE",
      "FastAPI",
      "Streamlit",
      "NetworkX",
      "SHAP",
    ],
    metrics: [
      "Trained on 50k heterogeneous financial transaction edges",
      "Topological fraud pattern classification with 61.92% AUC-ROC",
      "Interactive GNNExplainer visual feature attribution subgraphs",
    ],
    liveUrl: "https://github.com/vaibhav-aiml/aml-gnn-upi",
    githubUrl: "https://github.com/vaibhav-aiml/aml-gnn-upi",
    index: "04",
    telemetryHighlight: "GraphSAGE 61.92% AUC-ROC on cold nodes & explainable subgraphs",
  },
  {
    id: "linkedin-post-generator",
    slug: "linkedin-post-generator",
    title: "LinkedIn Post Generator",
    tagline: "AI content generation engine with engagement metrics and analytics dashboard",
    description:
      "Automated professional content suite leveraging custom prompt pipelines to craft high-conversion LinkedIn posts based on topic, tone, and audience demographics. Includes an interactive analytics dashboard for post metrics and history tracking.",
    categories: ["Full-Stack", "AI-ML"],
    featured: false,
    image: "/images/project-linkedin-gen.png",
    stats: [
      { label: "Framework", value: "Flask + OpenAI" },
      { label: "Analytics", value: "Chart.js" },
      { label: "Templates", value: "Multi-Persona" },
    ],
    tags: ["Python", "Flask", "OpenAI", "Chart.js", "Tailwind CSS", "REST API"],
    metrics: [
      "Algorithmic hook generation tuned for professional audiences",
      "Integrated performance analytics dashboard tracking post velocity",
    ],
    liveUrl: "https://tubular-bonbon-644eda.netlify.app/",
    githubUrl: "https://github.com/vaibhav-aiml/linkedin-post-generator",
    index: "05",
    telemetryHighlight: "One-click tone shifting & virality scoring",
  },
  {
    id: "codeviz-ai",
    slug: "codeviz-ai",
    title: "CodeViz AI",
    tagline: "Automated architecture diagram and dependency graph generator from GitHub repositories",
    description:
      "Developer productivity tool that parses GitHub repository source trees, analyzes AST dependency graphs, and generates interactive architecture diagrams and flowcharts in real time.",
    categories: ["Full-Stack", "Backend"],
    featured: false,
    image: "/images/project-codeviz.png",
    stats: [
      { label: "Parser", value: "AST Analysis" },
      { label: "Rendering", value: "Mermaid.js" },
      { label: "Integration", value: "GitHub API" },
    ],
    tags: ["TypeScript", "React", "Node.js", "AST Parser", "Mermaid.js", "Tailwind CSS"],
    metrics: [
      "Automated microservice and component relationship mapping",
      "Instant export to SVG, Mermaid syntax, and documentation formats",
    ],
    liveUrl: "https://codeviz-ai-seven.vercel.app/",
    githubUrl: "https://github.com/vaibhav-aiml/codeviz-ai",
    index: "06",
    telemetryHighlight: "Zero-latency canvas render via React Flow & AST parsing",
  },
];
