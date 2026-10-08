"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } max-w-3xl`}
    >
      {/* Category Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60 border border-gold/25 backdrop-blur-md mb-3 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-code-tech-xs font-code-tech-xs text-primary font-bold uppercase tracking-widest">
          {badge}
        </span>
      </motion.div>

      {/* Main Display Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Context description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-on-surface-variant font-body-md text-sm md:text-base mt-3 leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
