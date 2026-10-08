"use client";

import { GraduationCap, Briefcase, Cpu, Award } from "lucide-react";
import GlassCard from "./GlassCard";

const TRUST_ITEMS = [
  {
    icon: GraduationCap,
    category: "ACADEMICS",
    title: "B.Tech CSE (AI & ML) · JECRC",
    badge: "CGPA 8.3",
    color: "text-primary-container",
  },
  {
    icon: Briefcase,
    category: "EXPERIENCE",
    title: "Full-Stack Intern @ Xebia",
    badge: "Group Leader",
    color: "text-tertiary",
  },
  {
    icon: Cpu,
    category: "RESEARCH",
    title: "AI Research @ QuasysAI",
    badge: "Core Lab",
    color: "text-primary",
  },
  {
    icon: Award,
    category: "CREDENTIALS",
    title: "Google Career Certificate",
    badge: "Accredited",
    color: "text-gold",
  },
];

export default function TrustStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 my-8 md:my-12">
      {TRUST_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <GlassCard
            key={idx}
            tier={1}
            className="p-3.5 md:p-4 border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex items-center gap-3.5 group"
          >
            <div
              className={`w-10 h-10 rounded-lg bg-surface-container-high/80 border border-outline-variant/40 flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 group-hover:diya-glow transition-all`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div className="overflow-hidden min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-code-tech-xs text-[10px] text-outline uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20 font-code-tech-xs">
                  {item.badge}
                </span>
              </div>
              <div className="font-code-tech-sm text-xs md:text-sm text-on-surface font-semibold truncate group-hover:text-primary transition-colors">
                {item.title}
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}
