import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import GlassCard from "@/components/ui/GlassCard";
import TechTag from "@/components/ui/TechTag";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <article className="pt-28 pb-20 px-margin-mobile md:px-margin lg:px-margin-desktop max-w-5xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-tier-1 text-on-surface-variant hover:text-primary transition-colors text-xs font-code-tech-xs tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-base font-devanagari text-gold font-bold">
            {project.devanagariIndex}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <span
                key={c}
                className="px-2.5 py-0.5 rounded text-[10px] font-code-tech-xs text-tertiary bg-tertiary/10 border border-tertiary/25 font-bold uppercase"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="font-code-tech-sm text-sm md:text-base text-tertiary max-w-2xl mb-6">
          {project.tagline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-surface font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-lg diya-glow hover:scale-[1.02] transition-all min-h-[44px]"
          >
            <span>Live Demonstration</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-tier-1 text-on-surface font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:border-gold/60 transition-all min-h-[44px]"
          >
            <GithubIcon className="w-4 h-4 text-gold" />
            <span>Repository Code</span>
          </a>
        </div>
      </div>

      {/* Hero Image in Cusped Arch Frame */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gold/30 mb-12 shadow-2xl bg-surface-container-lowest">
        <Image
          src={project.image}
          alt={`${project.title} detailed architectural showcase`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {project.stats.map((stat, idx) => (
          <GlassCard key={idx} tier={1} className="p-3.5 text-center border-gold/20">
            <div className="text-[10px] text-on-surface-variant font-code-tech-xs uppercase">
              {stat.label}
            </div>
            <div className="text-base md:text-lg font-bold text-primary mt-0.5">
              {stat.value}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Deep Dive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        {/* Architecture & Summary (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          <GlassCard tier={2} className="p-6 md:p-8 border-gold/25 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-4 h-4" />
              <h2 className="font-headline-md text-lg md:text-xl font-bold text-on-surface">
                Architectural Breakdown
              </h2>
            </div>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              {project.description}
            </p>

            <div className="pt-4 border-t border-gold/15 space-y-2.5">
              <div className="text-xs font-code-tech-xs text-gold uppercase tracking-wider font-bold">
                Engineering Highlights &amp; Telemetry:
              </div>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-on-surface-variant">
                  <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{metric}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Tech Stack Breakdown (5 cols) */}
        <div className="md:col-span-5">
          <GlassCard tier={2} className="p-6 md:p-8 border-gold/25 h-full flex flex-col justify-between">
            <div>
              <h2 className="font-headline-md text-lg md:text-xl font-bold text-on-surface mb-3">
                Technologies Utilized
              </h2>
              <p className="text-xs text-on-surface-variant mb-6">
                Modular libraries, data stores, and framework layers integrated in this deployment:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <TechTag key={idx} name={tag} variant="teal" />
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/15 mt-8">
              <div className="text-[10px] text-on-surface-variant font-code-tech-xs uppercase">
                ENGINEER / ARCHITECT
              </div>
              <div className="text-xs font-bold text-on-surface mt-0.5">
                Vaibhav Badaya • Jaipur, India
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Bottom Prev / Next Nav */}
      <div className="pt-8 border-t border-gold/20 flex items-center justify-between gap-4">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="group flex flex-col items-start p-3 rounded-lg hover:bg-surface-container-high transition-colors"
        >
          <span className="text-[10px] text-on-surface-variant font-code-tech-xs uppercase flex items-center gap-1">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Previous Project
          </span>
          <span className="text-xs md:text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
            {prevProject.title}
          </span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex flex-col items-end p-3 rounded-lg hover:bg-surface-container-high transition-colors text-right"
        >
          <span className="text-[10px] text-on-surface-variant font-code-tech-xs uppercase flex items-center gap-1">
            Next Project
            <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-xs md:text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
            {nextProject.title}
          </span>
        </Link>
      </div>
    </article>
  );
}
