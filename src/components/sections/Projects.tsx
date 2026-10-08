"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Code,
  ArrowRight,
  Mic,
  ArrowDown,
  Database,
  Cpu,
  Gauge,
  ShieldCheck,
  Terminal as TerminalIcon,
  GitFork,
  FileText,
  Workflow,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechTag from "@/components/ui/TechTag";
import { projects, projectCategories, ProjectItem } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.categories.includes(activeCategory as any);
  });

  const flagshipProject = projects[0]; // MediVoice AI
  const gridProjects = filteredProjects.filter((p) => p.id !== flagshipProject.id);
  const showFlagship = activeCategory === "All" || flagshipProject.categories.includes(activeCategory as any);

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="font-code-tech-xs text-xs text-primary-container uppercase tracking-widest flex items-center gap-2 font-bold mb-2">
            <span>02 // ARCHITECTURE & DEPLOYMENTS</span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-gold">
              Projects
            </span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container-low border border-outline-variant/30 self-start md:self-auto">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-code-tech-xs text-xs uppercase transition-all font-semibold ${
                  isActive
                    ? "bg-primary-container/20 border border-primary/40 text-primary diya-glow"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {cat} {cat === "All" ? `(${projects.length})` : ""}
              </button>
            );
          })}
        </div>
      </div>

      {/* FLAGSHIP PROJECT #1: MediVoice AI (Full Width Architectural Pavilion) */}
      {showFlagship && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 p-5 sm:p-7 md:p-8 rounded-3xl bg-gradient-to-br from-secondary-container/20 via-surface-container-low/90 to-surface-container-lowest border border-primary/40 shadow-2xl relative overflow-hidden group hover:border-primary-container transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Architecture Preview & Telemetry Simulation (6 cols) */}
            <div className="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-surface-container-lowest/95 border border-outline-variant/40 relative shadow-inner">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-code-tech-xs text-[10px] text-outline ml-2 font-bold tracking-wider">
                    ARCH_DIAGRAM_MEDIVOICE.v1
                  </span>
                </div>
                <span className="font-code-tech-xs text-[10px] text-primary-container px-2 py-0.5 rounded bg-primary-container/10 border border-primary-container/30 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE STREAM
                </span>
              </div>

              {/* Architectural Flow Diagram Representation */}
              <div className="space-y-2.5 font-code-tech-xs text-xs">
                <div className="p-2.5 rounded-lg bg-surface-container-low border border-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-tertiary" />
                    <span className="text-on-surface font-medium">Client Audio Stream (PCM)</span>
                  </div>
                  <span className="text-outline text-[11px]">WebSocket · 16kHz</span>
                </div>

                <div className="flex justify-center text-primary-container">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                <div className="p-2.5 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-primary font-bold">Groq LLM + Whisper Inference</span>
                  </div>
                  <span className="text-tertiary font-mono font-bold text-[11px]">1.82s Total RTT</span>
                </div>

                <div className="flex justify-center text-primary-container">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary-container" />
                    <span className="text-on-surface font-medium">PostgreSQL (FHIR Schema) + Redis Cache</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold text-[11px]">Synced</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-outline font-code-tech-xs text-[10px]">
                <span>Telemetry: 50+ Concurrent WebSockets</span>
                <span className="text-primary-container font-semibold">HIPAA / HL7 Compliant</span>
              </div>
            </div>

            {/* Project Details & Actions (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-code-tech-xs text-xs text-primary font-bold tracking-widest uppercase">
                  FLAGSHIP CASE STUDY · 01
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-code-tech-xs text-[10px] font-bold">
                  Production Ready
                </span>
              </div>

              <h3 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface">
                {flagshipProject.title}
              </h3>

              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {flagshipProject.description}
              </p>

              {/* Demonstrated Benchmark Chip */}
              <div className="p-3 rounded-xl bg-surface-container-high/60 border border-primary/30 flex items-center gap-3">
                <Gauge className="w-6 h-6 text-primary-container shrink-0" />
                <div>
                  <div className="font-code-tech-xs text-[10px] text-outline uppercase tracking-wider font-semibold">
                    Demonstrated Benchmark
                  </div>
                  <div className="font-code-tech-sm text-xs sm:text-sm text-primary font-bold">
                    {flagshipProject.telemetryHighlight}
                  </div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagshipProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-tertiary/10 border border-tertiary/30 text-tertiary font-code-tech-xs text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={flagshipProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary-container text-surface-container-lowest font-label-caps text-xs uppercase font-bold hover:diya-glow transition-all flex items-center gap-1.5"
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/40 text-on-surface font-label-caps text-xs uppercase hover:border-primary transition-all flex items-center gap-1.5"
                >
                  <Code className="w-3.5 h-3.5 text-primary" />
                  <span>GitHub</span>
                </a>

                <Link
                  href={`/projects/${flagshipProject.slug}`}
                  className="font-code-tech-xs text-xs text-outline hover:text-primary-container transition-colors ml-auto flex items-center gap-1 font-semibold"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* PROJECTS BENTO GRID (Cards 2 to 6) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {gridProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <GlassCard
                tier={2}
                className="h-full p-6 rounded-2xl border-primary/20 hover:border-primary-container transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-code-tech-xs text-xs text-primary-container font-mono font-bold">
                      PROJ // {project.index}
                    </span>
                    <span className="font-code-tech-xs text-[10px] px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-outline">
                      {project.categories.join(" · ")}
                    </span>
                  </div>

                  <h4 className="font-title-lg text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* High-Contrast Telemetry Highlight Callout Box */}
                  <div className="p-2.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 mb-4">
                    <span className="font-code-tech-xs text-[10px] text-tertiary block uppercase font-bold tracking-wider mb-0.5">
                      Telemetry Highlight
                    </span>
                    <span className="font-code-tech-sm text-xs text-on-surface font-semibold">
                      {project.telemetryHighlight}
                    </span>
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20 text-tertiary font-code-tech-xs text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-code-tech-xs text-[10px]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-label-caps text-primary hover:text-primary-container uppercase font-bold"
                      >
                        <span>Demo</span>
                        <Rocket className="w-3 h-3" />
                      </a>
                      <span className="text-outline/40">·</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-label-caps text-on-surface-variant hover:text-on-surface uppercase"
                      >
                        <span>Code</span>
                        <Code className="w-3 h-3" />
                      </a>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-code-tech-xs text-[11px] text-outline hover:text-primary transition-colors flex items-center gap-0.5"
                    >
                      <span>Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
