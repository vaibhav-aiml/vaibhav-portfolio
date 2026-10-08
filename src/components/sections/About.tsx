"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Download, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { personalData } from "@/data/personal";

const STATS = [
  { label: "Projects Built", value: "6+", index: "01", detail: "Full-Stack & AI Systems" },
  { label: "Max Concurrency", value: "50+", index: "02", detail: "Real-time WebSocket Users" },
  { label: "Internships", value: "2", index: "03", detail: "Xebia & QuasysAI" },
  { label: "Academic CGPA", value: "8.3", index: "04", detail: "JECRC University (AI & ML)" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative overflow-hidden"
    >
      <SectionHeading
        badge="❖ 02 / ABOUT"
        title="Engineering Architectural Rigor & Neural Systems"
        subtitle="Bridging classical computational craftsmanship with next-generation generative AI architectures."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Cusped Arch Photo Frame (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative group max-w-sm w-full mx-auto">
            {/* Ambient Diya backlight */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-container/20 via-maroon/30 to-gold/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            {/* Arch-Framed Container */}
            <div className="relative glass-tier-2 p-3 md:p-4 rounded-2xl border border-gold/30 shadow-2xl">
              {/* Decorative scalloped arch top indicator */}
              <div className="flex items-center justify-between mb-3 px-1 text-gold/70">
                <span className="text-code-tech-xs text-xs font-semibold">❖ JAIPUR</span>
                <span className="text-code-tech-xs font-code-tech-xs text-[10px] uppercase tracking-widest text-primary">
                  PORTRAIT ARCH
                </span>
                <span className="text-code-tech-xs text-xs font-semibold">2026 ❖</span>
              </div>

              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-gold/20 bg-surface-container-lowest">
                <Image
                  src="/images/profile.jpg"
                  alt="Vaibhav Badaya portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating overlay chip */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-surface-container-high/90 border border-gold/25 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                    <span className="text-code-tech-xs text-on-surface font-semibold tracking-wide">
                      {personalData.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-code-tech-xs text-gold font-bold uppercase tracking-wider">
                    {personalData.name}
                  </span>
                </div>
              </div>

              {/* Location telemetry footer */}
              <div className="mt-3 pt-3 border-t border-gold/15 flex items-center justify-between text-xs text-on-surface-variant font-code-tech-xs">
                <div className="flex items-center gap-1.5 text-primary">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalData.location}</span>
                </div>
                <span className="text-[10px] text-outline">{personalData.coordinates}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Qualifications (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Bio introduction */}
          <div className="space-y-4 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
            <p>
              I am a <strong className="text-on-surface font-semibold">Full-Stack &amp; AI Engineer</strong> pursuing
              my B.Tech in Computer Science &amp; Engineering (Artificial Intelligence &amp; Machine Learning) at{" "}
              <strong className="text-primary font-semibold">JECRC University, Jaipur</strong> (CGPA 8.3/10, graduating May 2027).
            </p>
            <p>
              My engineering focuses on architecting <span className="text-on-surface font-medium">high-throughput REST APIs</span>,
              responsive real-time systems, and <span className="text-tertiary font-medium">LLM-powered applications</span>. From streaming
              sub-2s healthcare consultations with Groq and WebSockets to topological fraud detection with Graph Neural Networks,
              I engineer resilient distributed backends connected to sleek, reactive frontends.
            </p>
            <p className="text-sm border-l-2 border-primary/50 pl-4 italic text-on-surface/80 bg-primary/5 py-2 rounded-r-lg">
              &ldquo;Drawing inspiration from Vidyadhar Bhattacharya&apos;s 1727 Jaipur grid, I treat software architecture
              with geometric precision—building high-concurrency systems as enduring as royal fortified stonework.&rdquo;
            </p>
          </div>

          {/* Education & Credentials Badge */}
          <GlassCard tier={1} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-gold/25">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-title-md text-sm md:text-base text-on-surface font-bold">
                  {personalData.degree}
                </h3>
                <p className="text-body-sm text-xs text-on-surface-variant">
                  {personalData.university} • CGPA {personalData.cgpa}/10 • Graduating {personalData.graduatingYear}
                </p>
              </div>
            </div>
            <span className="text-code-tech-xs px-2.5 py-1 rounded bg-gold/15 text-gold border border-gold/30 font-bold shrink-0">
              JAIPUR, RAJASTHAN
            </span>
          </GlassCard>

          {/* Animated 4-Stat Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((stat, idx) => (
              <GlassCard key={idx} tier={2} className="p-3 text-center border-gold/20 hover:border-primary/50 transition-colors">
                <div className="text-[10px] font-code-tech-xs text-gold font-bold mb-1 opacity-80">
                  {stat.index}
                </div>
                <div className="font-display-hero text-2xl md:text-3xl text-primary font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-code-tech-xs text-on-surface font-semibold mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-on-surface-variant/70 mt-0.5 line-clamp-1">
                  {stat.detail}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={personalData.resumePath}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-surface font-label-caps text-label-caps uppercase tracking-wider font-bold hover:scale-[1.02] transition-all focus-saffron"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg glass-tier-1 text-on-surface hover:text-primary border-gold/30 hover:border-primary transition-all font-label-caps text-label-caps uppercase tracking-wider"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
