"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { drawerNavItems } from "@/data/navigation";
import { personalData } from "@/data/personal";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileDrawer({ isOpen, onClose, activeSection }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 left-0 w-80 max-w-[85vw] z-[56] glass-tier-3 flex flex-col h-full p-space-lg overflow-y-auto"
            role="dialog"
            aria-label="Navigation drawer"
          >
            {/* Drawer Header */}
            <div className="pb-space-md border-b border-outline-variant/20 flex items-start justify-between">
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-primary/40 p-0.5 bg-surface-container">
                  <Image
                    src="/images/profile.jpg"
                    alt={`${personalData.name} portrait`}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h2 className="text-headline-sm font-headline-sm text-primary text-base">
                    {personalData.name}
                  </h2>
                  <p className="text-code-tech-sm font-code-tech-sm text-on-surface-variant">
                    {personalData.title}
                  </p>
                  <span className="text-code-tech-xs font-code-tech-xs text-tertiary">
                    {personalData.location} • {personalData.coordinates.split(",")[0]}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-on-surface-variant hover:text-primary p-1 focus-saffron min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close navigation drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-space-xs my-space-md flex-1">
              {drawerNavItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all duration-200 min-h-[44px] focus-saffron",
                      isActive
                        ? "bg-surface-container-high text-primary font-bold border-l-2 border-primary-container"
                        : "text-on-surface-variant hover:bg-surface-container-high/50 hover:text-primary"
                    )}
                  >
                    <item.icon size={18} />
                    <span className="text-label-caps font-label-caps uppercase">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            <div className="pt-space-md border-t border-outline-variant/20 text-center">
              <p className="text-code-tech-xs font-code-tech-xs text-outline font-devanagari">
                विद्या ददाति विनयं • JAIPUR CYBER-REGAL
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
