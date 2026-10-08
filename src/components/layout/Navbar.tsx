"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Download, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { navItems } from "@/data/navigation";
import { personalData } from "@/data/personal";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import StatusChip from "@/components/ui/StatusChip";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections for active state
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-container to-primary"
          style={{ scaleX: progress, transformOrigin: "0%" }}
        />
      </div>

      {/* ── Mobile header (< md) ── */}
      <header
        className={cn(
          "md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-tier-1 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile py-space-sm">
          <div className="flex items-center gap-space-sm">
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open Navigation Drawer"
              className="p-space-xs text-primary hover:text-primary-container transition-colors rounded-lg flex items-center justify-center focus-saffron min-w-[44px] min-h-[44px]"
            >
              <Menu size={24} />
            </button>
            <Link
              href="#hero"
              className="text-headline-sm font-headline-sm font-bold text-primary tracking-wider flex items-center gap-1.5 group"
            >
              <span>VB.ai</span>
              <span className="text-code-tech-xs font-code-tech-xs text-primary-container font-normal tracking-widest opacity-80 group-hover:opacity-100 transition-opacity font-devanagari">
                जयपुर
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-space-sm">
            <StatusChip />
          </div>
        </div>
      </header>

      {/* ── Desktop navbar (md+) ── */}
      <header
        className={cn(
          "hidden md:block fixed top-[2px] left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-tier-1 shadow-lg border-b border-outline-variant/30"
            : "bg-transparent"
        )}
      >
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-margin md:px-margin-desktop py-space-sm">
          {/* Brand */}
          <Link
            href="#hero"
            className="text-headline-sm font-headline-sm font-bold text-primary tracking-wider flex items-center gap-1.5 group"
          >
            <span>VB.ai</span>
            <span className="text-code-tech-xs font-code-tech-xs text-primary-container font-normal tracking-widest opacity-80 group-hover:opacity-100 transition-opacity font-devanagari">
              जयपुर
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-space-lg">
            {navItems
              .filter((item) => ["About", "Experience", "Projects", "Skills", "Contact"].includes(item.label))
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-label-caps font-label-caps uppercase tracking-wider transition-colors hover:text-primary focus-saffron px-1 py-1",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "text-on-surface-variant"
                  )}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-space-sm">
            <StatusChip />
            <ThemeToggle />
            <a
              href={personalData.resumePath}
              download
              className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-gradient-to-r from-primary-container to-on-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-md hover:shadow-diya hover:scale-[1.02] active:scale-95 transition-all focus-saffron min-h-[44px]"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
