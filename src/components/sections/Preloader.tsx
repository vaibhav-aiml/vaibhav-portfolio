"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Post-mount sessionStorage check — avoids hydration mismatch
  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("preloader-seen");
    if (hasSeenPreloader) {
      setAnimationComplete(true);
      return;
    }
    setShow(true);
  }, []);

  const handleAnimationEnd = () => {
    sessionStorage.setItem("preloader-seen", "true");
    setAnimationComplete(true);
  };

  if (animationComplete) return null;

  return (
    <AnimatePresence>
      {show && !animationComplete && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-midnight-indigo"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onAnimationComplete={handleAnimationEnd}
        >
          {/* SVG Mandala */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-32 h-32 md:w-48 md:h-48"
            initial="hidden"
            animate="visible"
          >
            {/* Outer ring */}
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#FF9933"
              strokeWidth="1"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.5, ease: "easeInOut" },
                },
              }}
            />
            {/* Middle ring */}
            <motion.circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="#F2B705"
              strokeWidth="0.8"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.2, delay: 0.3, ease: "easeInOut" },
                },
              }}
            />
            {/* Inner ring */}
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="#0FA3B1"
              strokeWidth="0.6"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.6, ease: "easeInOut" },
                },
              }}
            />
            {/* 8-fold rays */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              const x1 = 100 + Math.cos(angle) * 20;
              const y1 = 100 + Math.sin(angle) * 20;
              const x2 = 100 + Math.cos(angle) * 85;
              const y2 = 100 + Math.sin(angle) * 85;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FF9933"
                  strokeWidth="0.5"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 0.6,
                      transition: {
                        duration: 0.8,
                        delay: 0.8 + i * 0.05,
                        ease: "easeOut",
                      },
                    },
                  }}
                />
              );
            })}
            {/* Center dot */}
            <motion.circle
              cx="100"
              cy="100"
              r="4"
              fill="#FF9933"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 1.3 },
                },
              }}
            />
          </motion.svg>

          {/* Brand name below mandala */}
          <motion.div
            className="absolute bottom-[30%] text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <p className="text-label-caps font-label-caps text-primary tracking-[0.3em] uppercase">
              Vaibhav Badaya
            </p>
            <p className="text-code-tech-xs font-code-tech-xs text-outline mt-1 font-devanagari">
              वैभव बडाया • जयपुर
            </p>
          </motion.div>

          {/* Saffron curtain wipe */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-saffron via-saffron to-maroon"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2.2, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "bottom" }}
            onAnimationComplete={() => {
              setTimeout(() => setShow(false), 200);
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
