import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ─── Dark theme palette (DESIGN.md "Modern Jaipur") ─── */
        surface: {
          DEFAULT: "var(--color-surface)",
          dim: "var(--color-surface-dim)",
          bright: "var(--color-surface-bright)",
          variant: "var(--color-surface-variant)",
          tint: "var(--color-surface-tint)",
        },
        "surface-container": {
          lowest: "var(--color-surface-container-lowest)",
          low: "var(--color-surface-container-low)",
          DEFAULT: "var(--color-surface-container)",
          high: "var(--color-surface-container-high)",
          highest: "var(--color-surface-container-highest)",
        },
        "on-surface": {
          DEFAULT: "var(--color-on-surface)",
          variant: "var(--color-on-surface-variant)",
        },
        "inverse-surface": "var(--color-inverse-surface)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        outline: {
          DEFAULT: "var(--color-outline)",
          variant: "var(--color-outline-variant)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          container: "var(--color-primary-container)",
          fixed: "var(--color-primary-fixed)",
          "fixed-dim": "var(--color-primary-fixed-dim)",
        },
        "on-primary": {
          DEFAULT: "var(--color-on-primary)",
          container: "var(--color-on-primary-container)",
          fixed: "var(--color-on-primary-fixed)",
          "fixed-variant": "var(--color-on-primary-fixed-variant)",
        },
        "inverse-primary": "var(--color-inverse-primary)",
        secondary: {
          DEFAULT: "var(--color-secondary)",
          container: "var(--color-secondary-container)",
          fixed: "var(--color-secondary-fixed)",
          "fixed-dim": "var(--color-secondary-fixed-dim)",
        },
        "on-secondary": {
          DEFAULT: "var(--color-on-secondary)",
          container: "var(--color-on-secondary-container)",
          fixed: "var(--color-on-secondary-fixed)",
          "fixed-variant": "var(--color-on-secondary-fixed-variant)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          container: "var(--color-tertiary-container)",
          fixed: "var(--color-tertiary-fixed)",
          "fixed-dim": "var(--color-tertiary-fixed-dim)",
        },
        "on-tertiary": {
          DEFAULT: "var(--color-on-tertiary)",
          container: "var(--color-on-tertiary-container)",
          fixed: "var(--color-on-tertiary-fixed)",
          "fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          container: "var(--color-error-container)",
        },
        "on-error": {
          DEFAULT: "var(--color-on-error)",
          container: "var(--color-on-error-container)",
        },
        background: "var(--color-background)",
        "on-background": "var(--color-on-background)",

        /* ─── Named accent shortcuts ─── */
        saffron: "#FF9933",
        maroon: "#5C1A2B",
        "peacock-teal": "#0FA3B1",
        "turmeric-gold": "#F2B705",
        "midnight-indigo": "#0B0B1A",
      },

      fontFamily: {
        "display-hero": ["var(--font-bodoni)", "serif"],
        "headline-lg": ["var(--font-bodoni)", "serif"],
        "headline-md": ["var(--font-bodoni)", "serif"],
        "headline-sm": ["var(--font-bodoni)", "serif"],
        "title-lg": ["var(--font-manrope)", "sans-serif"],
        "title-md": ["var(--font-manrope)", "sans-serif"],
        "body-lg": ["var(--font-manrope)", "sans-serif"],
        "body-md": ["var(--font-manrope)", "sans-serif"],
        "body-sm": ["var(--font-manrope)", "sans-serif"],
        "code-tech-sm": ["var(--font-jetbrains)", "monospace"],
        "code-tech-xs": ["var(--font-jetbrains)", "monospace"],
        "label-caps": ["var(--font-jetbrains)", "monospace"],
        devanagari: ["var(--font-noto-devanagari)", "serif"],
      },

      fontSize: {
        "display-hero": [
          "clamp(2.5rem, 6vw + 1rem, 4rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-hero-mobile": [
          "clamp(2.25rem, 5vw + 0.5rem, 2.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "headline-lg": [
          "clamp(2rem, 4vw + 0.5rem, 3rem)",
          { lineHeight: "1.17", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        "headline-lg-mobile": [
          "clamp(1.75rem, 3vw + 0.5rem, 2rem)",
          { lineHeight: "1.25", fontWeight: "600" },
        ],
        "headline-md": [
          "2rem",
          { lineHeight: "2.5rem", fontWeight: "600" },
        ],
        "headline-sm": [
          "1.5rem",
          { lineHeight: "2rem", fontWeight: "500" },
        ],
        "title-lg": [
          "1.25rem",
          { lineHeight: "1.75rem", fontWeight: "600" },
        ],
        "title-md": [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.75rem", fontWeight: "400" },
        ],
        "body-md": [
          "0.9375rem",
          { lineHeight: "1.5rem", fontWeight: "400" },
        ],
        "body-sm": [
          "0.8125rem",
          { lineHeight: "1.25rem", fontWeight: "400" },
        ],
        "code-tech-sm": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.08em", fontWeight: "500" },
        ],
        "code-tech-xs": [
          "0.625rem",
          { lineHeight: "0.875rem", letterSpacing: "0.12em", fontWeight: "400" },
        ],
        "label-caps": [
          "0.6875rem",
          { lineHeight: "1rem", letterSpacing: "0.16em", fontWeight: "600" },
        ],
      },

      spacing: {
        "margin-mobile": "1.25rem",
        "margin-desktop": "4rem",
        margin: "2rem",
        "gutter-mobile": "1rem",
        "gutter-desktop": "2rem",
        gutter: "1.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },

      animation: {
        "diya-pulse": "diyaPulse 3.5s infinite ease-in-out",
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },

      keyframes: {
        diyaPulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 16px rgba(255, 153, 51, 0.25), 0 0 32px rgba(242, 183, 5, 0.12)",
          },
          "50%": {
            boxShadow:
              "0 0 24px rgba(255, 153, 51, 0.45), 0 0 44px rgba(255, 153, 51, 0.25)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      boxShadow: {
        "diya-sm": "0 0 12px rgba(255, 153, 51, 0.2)",
        diya: "0 0 24px rgba(255, 153, 51, 0.35)",
        "diya-lg":
          "0 0 24px rgba(255, 153, 51, 0.45), 0 0 44px rgba(255, 153, 51, 0.25)",
        "tier-2":
          "0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 16px -2px rgba(255, 153, 51, 0.08)",
        "tier-3":
          "0 24px 64px -8px rgba(0, 0, 0, 0.85), 0 0 32px 0 rgba(255, 153, 51, 0.15)",
      },

      backdropBlur: {
        "tier-1": "16px",
        "tier-2": "24px",
        "tier-3": "36px",
      },
    },
  },
  plugins: [],
};

export default config;
