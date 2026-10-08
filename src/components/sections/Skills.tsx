"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, Database, Cloud, Code } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechTag from "@/components/ui/TechTag";
import { skillCategories } from "@/data/skills";

const ICON_MAP = {
  Code: Code,
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
      <div className="mb-10">
        <div className="font-code-tech-xs text-xs text-primary-container uppercase tracking-widest flex items-center gap-2 font-bold mb-2">
          <span>04 // SYSTEM SPECIFICATIONS</span>
        </div>
        <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface">
          Architectural{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-tertiary">
            Capabilities
          </span>
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-2xl mt-2">
          Curated technical stack engineered for fault tolerance, sub-second latency, and enterprise-grade maintainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skillCategories.map((cat, idx) => {
          const Icon = ICON_MAP[cat.iconName as keyof typeof ICON_MAP] || Code;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard
                tier={2}
                className="h-full border-primary/20 hover:border-primary-container transition-all duration-300 group hover:shadow-xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:diya-glow transition-all">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-title-lg text-base sm:text-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <span className="text-xs text-outline font-medium">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Category description */}
                  <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Tech Tags - Categorized chips with cyan/tertiary & gold accents */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-outline-variant/20">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-tertiary/10 border border-tertiary/25 text-tertiary font-code-tech-xs text-[11px] font-semibold hover:border-tertiary hover:bg-tertiary/15 transition-all"
                    >
                      {skill}
                    </span>
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
