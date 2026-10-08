export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
  skills: string[];
  index: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "xebia",
    role: "Full-Stack Development Intern (Group Leader)",
    company: "Xebia",
    type: "Internship",
    location: "Jaipur, India",
    period: "Jun 2026 – Present",
    isCurrent: true,
    highlights: [
      "Led a 4-member engineering team developing the Program Management System module.",
      "Architected the Supabase database schema and end-to-end real-time data layer.",
      "Directed quality assurance across 8 rigorous testing categories utilizing Postman and Thunder Client.",
    ],
    skills: ["Supabase", "React", "Node.js", "PostgreSQL", "Postman", "Team Leadership"],
    index: "01",
  },
  {
    id: "quasys-ai",
    role: "AI Research Intern",
    company: "QuasysAI Pvt. Ltd.",
    type: "Remote Internship",
    location: "Remote",
    period: "Aug 2026 – Oct 2026",
    isCurrent: false,
    highlights: [
      "Conducted in-depth AI research and literature reviews on emerging deep learning architectures under the CTO.",
      "Collaborated on model development, fine-tuning, and empirical experimentation for production-facing AI features.",
      "Assessed latency, token efficiency, and retrieval strategies across various open-weight LLMs.",
    ],
    skills: ["AI Research", "LLMs", "PyTorch", "Model Evaluation", "Python"],
    index: "02",
  },
];
