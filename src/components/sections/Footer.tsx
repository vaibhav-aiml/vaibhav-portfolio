import { personalData } from "@/data/personal";
import { navItems } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-24 md:pb-16 px-margin-mobile md:px-margin lg:px-margin-desktop border-t border-gold/15 overflow-hidden">
      {/* Background Jaali Pattern accent */}
      <div className="absolute inset-0 jaali-texture opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Heritage ornamental divider */}
        <div className="flex items-center justify-center gap-3 w-full max-w-md mb-8 opacity-60">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent flex-1" />
          <span className="text-primary text-xs tracking-widest font-code-tech-xs">
            ❖ ❖ ❖
          </span>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent flex-1" />
        </div>

        {/* Monogram / Brand mark */}
        <div className="mb-4">
          <a href="#hero" className="inline-block group">
            <span className="font-display-hero text-2xl md:text-3xl text-on-surface font-bold group-hover:text-primary transition-colors">
              {personalData.name}
            </span>
            <div className="text-xs text-gold font-code-tech-xs tracking-wider mt-0.5">
              Full-Stack &amp; AI Engineer • Jaipur, India
            </div>
          </a>
        </div>

        <p className="text-xs md:text-sm text-on-surface-variant max-w-md mx-auto mb-6">
          Architecting resilient distributed systems, sub-2s streaming LLM engines, and cyber-regal interfaces.
        </p>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs font-code-tech-xs text-on-surface-variant">
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalData.resumePath}
            download
            className="text-primary font-bold hover:underline"
          >
            Resume.pdf
          </a>
        </div>

        {/* Heritage Signature & Copyright */}
        <div className="pt-6 border-t border-gold/15 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant font-code-tech-xs">
          <p className="flex items-center gap-1.5">
            <span>Made with <span className="text-red-500">❤️</span> in Jaipur</span>
            <span>•</span>
            <span className="text-primary font-semibold">Vaibhav Badaya</span>
          </p>

          <a
            href="#hero"
            className="text-primary hover:text-primary-container flex items-center gap-1 uppercase font-semibold transition-colors"
          >
            <span>Return to Apex</span>
            <span>↑</span>
          </a>

          <p className="text-outline">
            © 2026 Vaibhav Badaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
