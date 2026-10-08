"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Code2, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { achievements } from "@/data/achievements";

const ICONS = [Trophy, Award, Code2];

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Honors and Achievements"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <SectionHeading
        badge="❖ 06 / ACHIEVEMENTS"
        title="Competitive Honors & Credentials"
        subtitle="Recognition in nationwide engineering hackathons and industry certification programs."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.map((item, idx) => {
          const Icon = ICONS[idx % ICONS.length];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <GlassCard
                tier={2}
                className="h-full border-gold/25 hover:border-primary/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl p-5 md:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-gold/30 flex items-center justify-center text-gold group-hover:text-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-code-tech-xs text-gold font-bold">
                      {item.index}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-title-lg text-base md:text-lg text-on-surface font-bold group-hover:text-primary transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-primary font-semibold mb-3">
                    {item.issuer}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer badge & Year */}
                <div className="flex items-center justify-between pt-3 border-t border-gold/15 text-[11px] font-code-tech-xs">
                  <span className="px-2 py-0.5 rounded bg-gold/15 text-gold border border-gold/30 font-bold">
                    {item.badge}
                  </span>
                  <span className="text-on-surface-variant flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{item.year}</span>
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
