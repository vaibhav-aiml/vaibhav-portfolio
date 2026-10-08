"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, Database, Cloud } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechTag from "@/components/ui/TechTag";
import { skillCategories } from "@/data/skills";

const ICON_MAP = {
  Cpu: Cpu,
  Server: Server,
  Layout: Layout,
  Database: Database,
  Cloud: Cloud,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <SectionHeading
        badge="❖ 05 / SKILLS"
        title="Technical Arsenal & Architectural Tooling"
        subtitle="Curated mastery across full-stack distributed systems, LLM infrastructure, and modern frontend paradigms."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((cat, idx) => {
          const Icon = ICON_MAP[cat.iconName as keyof typeof ICON_MAP] || Cpu;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <GlassCard
                tier={2}
                className="h-full border-gold/25 hover:border-primary/60 transition-all duration-300 group hover:shadow-xl p-5 md:p-6"
              >
                {/* Category Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-gold/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-gold group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-base md:text-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <span className="text-xs text-gold font-medium">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category description */}
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Tech Tags - Clean category tags with NO progress bars */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gold/15">
                  {cat.skills.map((skill, sIdx) => (
                    <TechTag
                      key={sIdx}
                      name={skill}
                      variant={
                        idx === 0
                          ? "saffron"
                          : idx === 1
                          ? "teal"
                          : idx === 2
                          ? "gold"
                          : "muted"
                      }
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
