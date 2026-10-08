"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Sparkles, Send, Briefcase } from "lucide-react";
import MandalaShader from "@/components/three/MandalaShader";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { personalData } from "@/data/personal";

// Dynamically import R3F HeroScene without SSR
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const ROLES = [
  "Full-Stack & AI Engineer",
  "LLM Architectures & Scalable APIs",
  "Distributed Systems & Real-Time Web",
  "B.Tech CSE (AI & ML) • JECRC University",
];

export default function Hero() {
  const { canRender3D } = useDeviceCapability();
  const prefersReduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center px-margin-mobile md:px-margin lg:px-margin-desktop pt-24 pb-16 overflow-hidden"
    >
      {/* Layer 0: Neural Mandala & Ember WebGL Shader */}
      <MandalaShader />

      {/* Layer 1: R3F Sacred Geometry Scene (Desktop + Capable devices only) */}
      {canRender3D && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[620px] xl:h-[620px] pointer-events-none z-[2] opacity-75 hidden lg:block">
          <HeroScene />
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heritage telemetry pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 border border-gold/30 backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-code-tech-xs font-code-tech-xs text-primary tracking-widest uppercase font-bold">
            JAIPUR, INDIA • CREATIVE INTELLIGENCE
          </span>
          <span className="text-outline/40 text-xs hidden sm:inline">•</span>
          <span className="text-code-tech-xs font-code-tech-xs text-on-surface-variant hidden sm:inline tracking-wider">
            {personalData.coordinates}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display-hero text-display-hero-mobile md:text-5xl lg:text-display-hero text-on-surface font-bold tracking-tight mb-4 leading-tight"
        >
          <span className="text-primary-container font-display-hero italic block sm:inline font-normal mr-2">
            नमस्ते,
          </span>
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-on-surface via-primary to-gold bg-clip-text text-transparent">
            {personalData.name}
          </span>
        </motion.h1>

        {/* Dynamic cycling role ticker */}
        <div className="h-8 md:h-10 mb-4 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="text-tertiary font-code-tech-sm text-sm sm:text-base md:text-lg tracking-wider font-semibold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold shrink-0 animate-pulse" />
              <span>{ROLES[roleIndex]}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bio summary paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-on-surface-variant font-body-md text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalData.heroTagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg mx-auto mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-on-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-lg diya-glow hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px] focus-saffron"
          >
            <Briefcase className="w-4 h-4" />
            <span>View My Work</span>
          </a>

          <a
            href={personalData.resumePath}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg glass-tier-1 text-on-surface font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:border-primary-container hover:bg-surface-container-high transition-all min-h-[44px] focus-saffron"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-tertiary font-label-caps text-label-caps uppercase tracking-wider border border-tertiary/30 hover:border-tertiary hover:bg-tertiary/10 transition-all min-h-[44px] focus-saffron"
          >
            <Send className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </motion.div>

        {/* Telemetry quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-gold/15"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2 rounded-lg bg-surface-container-low/40 border border-gold/10">
            <span className="text-gold font-code-tech-xs text-xs font-bold">01</span>
            <div className="text-left">
              <div className="text-code-tech-xs text-primary font-bold">5+ PROJECTS</div>
              <div className="text-[11px] text-on-surface-variant">Full-Stack & AI Systems</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2 rounded-lg bg-surface-container-low/40 border border-gold/10">
            <span className="text-gold font-code-tech-xs text-xs font-bold">02</span>
            <div className="text-left">
              <div className="text-code-tech-xs text-gold font-bold">JECRC UNIVERSITY</div>
              <div className="text-[11px] text-on-surface-variant">B.Tech CSE (AI & ML)</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2 rounded-lg bg-surface-container-low/40 border border-gold/10">
            <span className="text-gold font-code-tech-xs text-xs font-bold">03</span>
            <div className="text-left">
              <div className="text-code-tech-xs text-tertiary font-bold">JAIPUR, INDIA</div>
              <div className="text-[11px] text-on-surface-variant">Open to Opportunities</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          aria-label="Scroll to About section"
          className="mt-12 inline-flex flex-col items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors focus-saffron rounded-full p-2"
        >
          <span className="text-code-tech-xs font-code-tech-xs tracking-widest uppercase">
            Explore Heritage & Code
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
        </motion.a>
      </div>
    </section>
  );
}
