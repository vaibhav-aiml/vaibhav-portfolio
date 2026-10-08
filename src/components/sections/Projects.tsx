"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechTag from "@/components/ui/TechTag";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.categories.includes(activeCategory as any);
  });

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <SectionHeading
        badge="❖ ०४ / PROJECTS"
        title="Featured Engineering Systems & AI Deployments"
        subtitle="Full-stack distributed applications, low-latency LLM pipelines, and Graph Neural Network security."
        devanagariWatermark="प्रकल्प"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-lg text-xs font-label-caps uppercase tracking-wider font-semibold transition-all min-h-[40px] ${
                isActive
                  ? "text-surface-container-lowest bg-primary shadow-md"
                  : "glass-tier-1 text-on-surface-variant hover:text-on-surface hover:border-gold/40"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-primary rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={isFeatured ? "md:col-span-2 lg:col-span-3" : ""}
              >
                <GlassCard
                  tier={2}
                  className={`h-full flex flex-col justify-between border-gold/25 hover:border-primary/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl ${
                    isFeatured ? "p-6 md:p-8" : "p-5 md:p-6"
                  }`}
                >
                  <div>
                    {/* Top Row: Index + Categories + Featured Chip */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-devanagari text-gold font-bold">
                          {project.devanagariIndex}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.categories.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded text-[10px] font-code-tech-xs text-tertiary bg-tertiary/10 border border-tertiary/25 font-bold"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {isFeatured && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/50 text-[10px] font-code-tech-xs text-primary font-bold">
                          <Sparkles className="w-3 h-3 text-gold" />
                          FEATURED ARCHITECTURE
                        </span>
                      )}
                    </div>

                    {/* Preview Image with Arch Motif */}
                    <div
                      className={`relative w-full rounded-xl overflow-hidden border border-gold/20 mb-5 bg-surface-container-lowest ${
                        isFeatured ? "aspect-[21/9] max-h-[340px]" : "aspect-[16/9]"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent pointer-events-none" />

                      {/* Quick stats floating bar (for featured) */}
                      {isFeatured && (
                        <div className="absolute bottom-3 left-3 right-3 hidden sm:flex items-center justify-around p-2.5 rounded-lg bg-surface-container-high/90 border border-gold/25 backdrop-blur-md">
                          {project.stats.map((s, sIdx) => (
                            <div key={sIdx} className="text-center px-2">
                              <div className="text-[10px] text-on-surface-variant font-code-tech-xs uppercase">
                                {s.label}
                              </div>
                              <div className="text-xs font-bold text-primary">{s.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-tertiary font-code-tech-sm mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs md:text-sm text-on-surface-variant line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics / Key highlights */}
                    <div className="space-y-1 mb-5">
                      {project.metrics.slice(0, isFeatured ? 3 : 2).map((m, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-1.5 text-xs text-on-surface-variant">
                          <span className="text-gold text-[10px] mt-0.5">❖</span>
                          <span className="line-clamp-1">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-gold/15">
                      {project.tags.slice(0, isFeatured ? 8 : 5).map((t, tIdx) => (
                        <TechTag key={tIdx} name={t} variant="muted" />
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-gold/15">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary/15 hover:bg-primary text-primary hover:text-surface border border-primary/30 text-xs font-label-caps uppercase tracking-wider font-bold transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md glass-tier-1 text-on-surface-variant hover:text-on-surface hover:border-gold/50 text-xs font-label-caps uppercase tracking-wider transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-gold hover:text-primary transition-colors font-code-tech-xs tracking-wider"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
