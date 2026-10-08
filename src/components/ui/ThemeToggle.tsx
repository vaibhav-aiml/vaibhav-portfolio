"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg text-on-surface-variant min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <Sun size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center focus-saffron"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
