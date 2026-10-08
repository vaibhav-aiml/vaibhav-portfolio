"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechTag from "@/components/ui/TechTag";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <SectionHeading
        badge="❖ 03 / EXPERIENCE"
        title="Engineering Internships & Technical Leadership"
        subtitle="Spearheading real-time modules, scalable database schemas, and AI research experimentation."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-gold to-primary/20 pointer-events-none" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12`}
              >
                {/* Central Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center shadow-lg diya-glow">
                    <span className="text-[11px] font-code-tech-xs text-primary font-bold">
                      {exp.index}
                    </span>
                  </div>
                </div>

                {/* Card Container (takes half width on md+) */}
                <motion.div
                  initial={{ opacity: 0, y: 24, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="w-full pl-12 md:pl-0 md:w-1/2"
                >
                  <GlassCard
                    tier={2}
                    className="border-gold/25 hover:border-primary/60 transition-all duration-300 group hover:shadow-xl"
                  >
                    {/* Header: Company & Current Badge */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-title-lg text-base md:text-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="text-primary font-semibold text-sm mt-0.5 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                          <span className="text-outline/40">•</span>
                          <span className="text-on-surface-variant text-xs">{exp.type}</span>
                        </div>
                      </div>

                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 border border-primary/40 text-[10px] font-code-tech-xs text-primary font-bold shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                          CURRENT
                        </span>
                      )}
                    </div>

                    {/* Metadata line: Period & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-on-surface-variant font-code-tech-xs mb-4 pt-2 border-t border-gold/15">
                      <span className="inline-flex items-center gap-1 text-gold">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Highlights bullet points */}
                    <ul className="space-y-2 mb-4 text-xs md:text-sm text-on-surface-variant">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tertiary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gold/15">
                      {exp.skills.map((skill, sIdx) => (
                        <TechTag key={sIdx} name={skill} variant="muted" />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
