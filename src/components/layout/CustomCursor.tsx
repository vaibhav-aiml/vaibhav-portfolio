"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer and hover capability
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!hoverQuery.matches || reducedMotion.matches) return;

    setCanHover(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track hoverable elements
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Attach hover listeners to interactive elements
    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    };

    // Use MutationObserver to handle dynamically added elements
    attachHoverListeners();
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Animation loop for smooth trailing
    const animate = () => {
      const dotLerp = 0.35;
      const ringLerp = 0.15;

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotLerp;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotLerp;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (!canHover) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <div
          className="rounded-full bg-saffron transition-all duration-200"
          style={{
            width: isHovering ? 12 : 8,
            height: isHovering ? 12 : 8,
          }}
        />
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99] pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <div
          className="rounded-full border transition-all duration-300"
          style={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering
              ? "rgba(255, 153, 51, 0.6)"
              : "rgba(255, 153, 51, 0.3)",
            borderWidth: isHovering ? 2 : 1,
          }}
        />
      </div>
    </>
  );
}
