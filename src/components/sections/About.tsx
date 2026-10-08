"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Compass, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { personalData } from "@/data/personal";

const JANTAR_MANTAR_METRICS = [
  { index: "01", label: "Production Systems", value: "6+", detail: "Shipped & Live" },
  { index: "02", label: "Concurrent Streams", value: "50+", detail: "Sub-2s WebSockets" },
  { index: "03", label: "Tech Internships", value: "2", detail: "Xebia & QuasysAI" },
  { index: "04", label: "JECRC University CGPA", value: "8.3", detail: "B.Tech CSE (AI & ML)" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative overflow-hidden"
    >
      <SectionHeading
        badge="❖ 01 / THE ARCHITECT'S ROOTS"
        title="Heritage & Discipline"
        subtitle="Born in the pink sandstone grid of Jaipur. Observing software engineering as modern stone masonry: structured, symmetrical, and enduring under immense strain."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Palace Pavilion Bio Card (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8 flex flex-col justify-between"
        >
          <GlassCard
            tier={2}
            className="h-full p-6 sm:p-8 rounded-2xl border-primary/25 relative flex flex-col justify-between"
          >
            <div className="space-y-4 text-on-surface-variant font-body-lg text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Born and shaped in the pink sandstone grid of Jaipur, I observe software
                engineering as modern stone masonry: structured, symmetrical, yet enduring under
                immense strain. Currently concluding my final year in{" "}
                <span className="text-on-surface font-semibold">
                  Computer Science (AI &amp; ML) at JECRC University
                </span>{" "}
                with an academic CGPA of{" "}
                <span className="text-primary-container font-mono font-bold">8.3</span>.
              </p>
              <p>
                My focus lies squarely where high-velocity web interfaces meet non-deterministic AI
                models. From engineering real-time medical voice pipelines handling HIPAA-sensitive
                streams with sub-2s latency, to benchmarking 4-bit quantized transformers under CTO
                mentorship at QuasysAI, I build digital engines with royal precision.
              </p>
            </div>

            {/* Jantar Mantar Telemetry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-outline-variant/30">
              {JANTAR_MANTAR_METRICS.map((metric, idx) => (
                <div key={idx} className="p-2 sm:p-3 rounded-lg bg-surface-container-high/40 border border-outline-variant/30">
                  <div className="font-code-tech-xs text-[10px] text-primary font-bold">
                    {metric.index} · METRIC
                  </div>
                  <div className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface mt-0.5">
                    {metric.value}
                  </div>
                  <div className="font-body-sm text-xs text-outline line-clamp-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs row */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-outline-variant/20">
              <a
                href={personalData.resumePath}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-surface-container-lowest font-label-caps text-xs uppercase font-bold hover:scale-[1.02] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg glass-tier-1 text-on-surface hover:text-primary border-primary/30 transition-all font-label-caps text-xs uppercase font-semibold"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Side Jaipur City Grid Telemetry Card (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col justify-between"
        >
          <GlassCard
            tier={2}
            className="h-full p-6 sm:p-7 rounded-2xl border-primary/25 relative flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-primary" />
                  <span className="font-code-tech-xs text-xs text-outline uppercase tracking-wider font-semibold">
                    Spatial Coordinates
                  </span>
                </div>
                <span className="font-code-tech-xs text-xs text-primary font-bold">
                  JAIPUR · RJ · IN
                </span>
              </div>

              <div className="space-y-3.5 font-code-tech-sm text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant">Latitude:</span>
                  <span className="text-tertiary font-mono font-bold">26.9124° N</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant">Longitude:</span>
                  <span className="text-tertiary font-mono font-bold">75.7873° E</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant">Grid System:</span>
                  <span className="text-on-surface font-medium">Navagraha 9-Square</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant">Primary Shell:</span>
                  <span className="text-primary-container font-medium">Zsh / Neovim / Docker</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-on-surface-variant">Academic Base:</span>
                  <span className="text-gold font-medium">JECRC University</span>
                </div>
              </div>
            </div>

            {/* Core Ethos Callout Box */}
            <div className="p-4 rounded-xl bg-surface-container-high/70 border border-outline-variant/40 relative">
              <div className="flex items-center gap-1.5 font-code-tech-xs text-[10px] text-primary uppercase mb-1 font-bold">
                <ShieldCheck className="w-3 h-3 text-primary" />
                <span>Core Ethos</span>
              </div>
              <div className="font-title-md text-sm sm:text-base font-semibold text-on-surface italic">
                &ldquo;Form follows structure, telemetry verifies truth.&rdquo;
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
