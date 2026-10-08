"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  ArrowDown,
  Download,
  Sparkles,
  Briefcase,
  Brain,
  Zap,
} from "lucide-react";
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
  "LLM Orchestrator & Scalable APIs",
  "Real-Time WebSocket Architect",
  "CSE (AI & ML) • JECRC University",
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
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin lg:px-margin-desktop pt-24 pb-12 overflow-hidden"
    >
      {/* Layer 0: Neural Mandala & Ember WebGL Shader */}
      <MandalaShader />

      {/* Layer 1: Ambient Rajputana Radial Backlights */}
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-secondary-container/15 blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-primary-container/10 blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-tertiary/10 blur-[150px] pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Telemetry & Pitch */}
        <div className="lg:col-span-7 space-y-5 text-left">
          {/* Terminal Flare Telemetry Line */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-low/90 border border-outline-variant/40 font-code-tech-sm text-xs text-tertiary shadow-md backdrop-blur-md"
          >
            <Terminal className="w-3.5 h-3.5 text-primary-container shrink-0" />
            <span className="tracking-wider uppercase font-semibold">
              FULL-STACK & AI ENGINEER · JAIPUR, INDIA
            </span>
            <span className="inline-block w-1.5 h-3.5 bg-primary-container animate-pulse ml-0.5" />
          </motion.div>

          {/* Hero Display Title with नमस्ते */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-on-surface leading-[1.12]"
          >
            <span className="text-primary-container font-display-hero italic block sm:inline font-normal mr-3">
              नमस्ते,
            </span>
            <span>Vaibhav </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-gold drop-shadow-[0_0_24px_rgba(255,153,51,0.35)]">
              Badaya
            </span>
          </motion.h1>

          {/* Cycling Role Ticker */}
          <div className="h-7 sm:h-8 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-tertiary font-code-tech-sm text-sm sm:text-base font-semibold flex items-center gap-2 tracking-wide"
              >
                <Sparkles className="w-4 h-4 text-gold shrink-0 animate-pulse" />
                <span>{ROLES[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Architectural Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            I craft resilient microservices, high-throughput streaming systems, and LLM
            orchestration architectures. Fusing Vidyadhar&apos;s Jaipur grid geometry with
            cutting-edge full-stack engineering.
          </motion.p>

          {/* 3 Stats Glass Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-2 max-w-lg"
          >
            <div className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/25 backdrop-blur-md">
              <div className="font-headline-sm text-lg sm:text-2xl font-bold text-primary">
                50+
              </div>
              <div className="font-code-tech-xs text-[10px] text-outline uppercase tracking-wider">
                Concurrent Streams
              </div>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/25 backdrop-blur-md">
              <div className="font-headline-sm text-lg sm:text-2xl font-bold text-primary-container">
                6+
              </div>
              <div className="font-code-tech-xs text-[10px] text-outline uppercase tracking-wider">
                Shipped Systems
              </div>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/25 backdrop-blur-md">
              <div className="font-headline-sm text-lg sm:text-2xl font-bold text-tertiary">
                2
              </div>
              <div className="font-code-tech-xs text-[10px] text-outline uppercase tracking-wider">
                Tech Internships
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 pt-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-primary-container to-[#E68A2E] text-surface-container-lowest font-label-caps text-xs uppercase font-bold border border-primary/60 diya-glow hover:-translate-y-0.5 hover:diya-glow-intense transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-md"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>View My Work</span>
            </a>

            <a
              href={personalData.resumePath}
              download
              className="px-5 py-3 rounded-lg bg-surface-container-low/80 border border-primary/40 text-on-surface font-label-caps text-xs uppercase font-semibold hover:border-primary-container hover:bg-secondary-container/30 transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-primary" />
              <span>Resume & Specs</span>
            </a>

            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-code-tech-xs text-[10px] text-on-surface-variant uppercase font-medium">
                Remote / On-site
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Cusped Hawa Mahal Arch Frame with Vaibhav's Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0"
        >
          {/* Neural Mandala Back-ring Glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
            <div className="w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-primary/20 animate-spin [animation-duration:45s]" />
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-dashed border-tertiary/20" />
            <div className="absolute w-64 h-64 rounded-full bg-secondary-container/25 blur-3xl" />
          </div>

          {/* Sacred Cusped Arch Container */}
          <div className="relative p-2 rounded-3xl border border-primary/40 bg-surface-container-low/70 backdrop-blur-2xl shadow-2xl diya-glow max-w-[340px] sm:max-w-[380px] w-full">
            {/* Hairline Arch Top Decorative Keyline */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-surface-container-high border border-primary/50 text-primary font-code-tech-xs text-[10px] tracking-widest uppercase font-bold z-20">
              VAIBHAV BADAYA · 01
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden rounded-2xl bg-surface-container-lowest flex items-end justify-center">
              <Image
                src="/images/profile.jpg"
                alt="Vaibhav Badaya portrait"
                fill
                priority
                sizes="(max-width: 640px) 300px, 380px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-105"
              />

              {/* Smoked Indigo Base Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent pointer-events-none" />

              {/* Base Telemetry Glass Badge */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-surface-container-low/95 backdrop-blur-md border border-primary/30 flex items-center justify-between z-10">
                <div>
                  <div className="font-title-md text-sm sm:text-base font-bold text-on-surface leading-tight">
                    Vaibhav Badaya
                  </div>
                  <div className="font-code-tech-xs text-[10px] text-primary-container mt-0.5">
                    CSE (AI & ML) · JECRC
                  </div>
                </div>
                <span className="font-code-tech-sm text-xs text-tertiary px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/30 font-bold">
                  CGPA 8.3
                </span>
              </div>
            </div>

            {/* Orbiting Floating Tech Badges */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-surface-container-high/95 border border-tertiary/50 text-tertiary font-code-tech-xs text-[10px] shadow-lg flex items-center gap-1.5 backdrop-blur-md font-bold cyan-glow">
              <Brain className="w-3.5 h-3.5 text-tertiary" />
              <span>LLM Orchestration</span>
            </div>

            <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg bg-surface-container-high/95 border border-primary/50 text-primary font-code-tech-xs text-[10px] shadow-lg flex items-center gap-1.5 backdrop-blur-md font-bold diya-glow">
              <Zap className="w-3.5 h-3.5 text-primary-container" />
              <span>Sub-2s WebSockets</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 flex justify-center mt-10">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="inline-flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors p-2"
        >
          <span className="font-code-tech-xs text-[10px] uppercase tracking-widest text-outline">
            Telemetry & Heritage
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
        </a>
      </div>
    </section>
  );
}
