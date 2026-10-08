"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Server, LineChart, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/services";

const ICON_MAP = {
  Globe: Globe,
  Bot: Bot,
  Server: Server,
  LineChart: LineChart,
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Freelance Services"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <SectionHeading
        badge="❖ 07 / SERVICES"
        title="Engineering Solutions Available for Freelance & Contract"
        subtitle="End-to-end technical execution tailored for startups, enterprise proofs-of-concept, and modern web products."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => {
          const Icon = ICON_MAP[service.iconName as keyof typeof ICON_MAP] || Globe;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                tier={2}
                className="h-full border-gold/25 hover:border-primary/60 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl p-5 md:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-gold/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform group-hover:border-primary">
                      <Icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-xs font-code-tech-xs text-gold font-bold">
                      {service.index}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="font-title-lg text-base md:text-lg text-on-surface font-bold group-hover:text-primary transition-colors mb-0.5">
                    {service.title}
                  </h3>
                  <div className="text-xs text-gold mb-2 font-medium">
                    {service.categoryLabel}
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-tertiary font-code-tech-sm mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-3 border-t border-gold/15 space-y-2">
                  <div className="text-[10px] font-code-tech-xs text-gold uppercase tracking-wider font-bold">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-on-surface-variant">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{d}</span>
                    </div>
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
