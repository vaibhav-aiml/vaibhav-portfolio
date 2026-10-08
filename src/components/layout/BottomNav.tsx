"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { bottomNavItems } from "@/data/navigation";

export default function BottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-margin-mobile py-space-xs glass-tier-1 rounded-t-xl safe-area-bottom"
      role="navigation"
      aria-label="Bottom navigation"
    >
      {bottomNavItems.map((item) => {
        const isProjects = item.label === "Projects";
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center px-space-md py-space-xs transition-all duration-200 active:scale-95 min-w-[44px] min-h-[44px] focus-saffron",
              isProjects
                ? "bg-primary-container/20 text-primary rounded-lg border border-primary/40"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            <item.icon size={20} />
            <span
              className={cn(
                "text-code-tech-xs font-code-tech-xs mt-0.5",
                isProjects && "font-bold"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
