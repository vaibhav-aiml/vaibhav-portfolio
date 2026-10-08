"use client";

export default function StatusChip() {
  return (
    <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-low/80 border border-outline-variant/40 shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
      </span>
      <span className="text-code-tech-xs font-code-tech-xs text-primary uppercase font-semibold tracking-wider">
        AVAILABLE
      </span>
    </div>
  );
}
