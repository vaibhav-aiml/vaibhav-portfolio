import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: ReactNode;
  tier?: 1 | 2 | 3;
  className?: string;
  hasArch?: boolean;
}

export default function GlassCard({
  children,
  tier = 2,
  className,
  hasArch = false,
}: GlassCardProps) {
  const tierClass =
    tier === 1 ? "glass-tier-1" : tier === 2 ? "glass-tier-2" : "glass-tier-3";

  return (
    <div
      className={cn(
        tierClass,
        "rounded-xl p-5 md:p-6 transition-all relative overflow-hidden",
        hasArch && "cusped-arch-card",
        className
      )}
    >
      {/* Decorative top gold hairline if not arch */}
      {!hasArch && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      )}
      {children}
    </div>
  );
}
