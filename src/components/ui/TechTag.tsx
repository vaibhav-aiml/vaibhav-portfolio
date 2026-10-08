import { cn } from "@/lib/cn";

interface TechTagProps {
  name: string;
  variant?: "teal" | "saffron" | "gold" | "muted";
  className?: string;
}

export default function TechTag({
  name,
  variant = "teal",
  className,
}: TechTagProps) {
  const variantStyles = {
    teal: "bg-tertiary/10 text-tertiary border-tertiary/30 hover:border-tertiary hover:bg-tertiary/20",
    saffron:
      "bg-primary/10 text-primary border-primary/30 hover:border-primary hover:bg-primary/20",
    gold: "bg-gold/10 text-gold border-gold/30 hover:border-gold hover:bg-gold/20",
    muted:
      "bg-surface-container-high/60 text-on-surface-variant border-outline-variant/30 hover:border-outline",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-code-tech-xs tracking-wider border transition-colors select-none",
        variantStyles[variant],
        className
      )}
    >
      {name}
    </span>
  );
}
