"use client";

const TECH_ITEMS = [
  { name: "React 19", color: "text-primary font-bold" },
  { name: "Next.js 14 App Router", color: "text-on-surface font-semibold" },
  { name: "Python 3.11", color: "text-tertiary font-bold" },
  { name: "FastAPI & Uvicorn", color: "text-primary-container font-bold" },
  { name: "PostgreSQL & pgvector", color: "text-on-surface font-semibold" },
  { name: "Docker Containers", color: "text-primary font-bold" },
  { name: "LangChain & RAG", color: "text-tertiary font-bold" },
  { name: "PyTorch Geometric (GNN)", color: "text-secondary font-bold" },
  { name: "Redis Pub/Sub", color: "text-primary-container font-bold" },
  { name: "Supabase Auth & RLS", color: "text-primary font-bold" },
  { name: "TypeScript 5", color: "text-tertiary font-bold" },
  { name: "Groq LLM Acceleration", color: "text-gold font-bold" },
];

export default function MarqueeTicker() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden py-3.5 border-y border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-md relative select-none"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-code-tech-sm text-xs md:text-sm">
        {/* Render twice for seamless infinite loop */}
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className={item.color}>{item.name}</span>
            <span className="text-primary/40 text-xs">❖</span>
          </div>
        ))}
      </div>
    </div>
  );
}
