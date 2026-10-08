"use client";

export default function MandalaDivider() {
  return (
    <div
      className="flex items-center justify-center gap-4 my-10 md:my-16 select-none pointer-events-none"
      aria-hidden="true"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1" />
      <span className="text-primary-container text-xs font-bold tracking-widest drop-shadow-[0_0_8px_rgba(255,153,51,0.5)]">
        ❖ ॐ ❖
      </span>
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1" />
    </div>
  );
}
