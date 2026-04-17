"use client";

import { ExperienceCard } from "@/components/experience-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Experience } from "@/lib/sanity/types";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative bg-background px-6 py-28">
      <div className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.06)_30%,rgba(0,0,0,0.06)_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="mb-3 bg-brand-gradient bg-clip-text font-semibold text-transparent text-xs uppercase tracking-widest">
            Experience
          </p>
          <h2 className="mb-3 font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-foreground leading-[1.1] tracking-[-0.035em]">
            Where I've worked
          </h2>
          <p className="max-w-md font-normal text-base text-muted-foreground leading-7">
            6+ years of building high-impact products, leading architecture
            decisions, and shipping measurable results.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp._id} experience={exp} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
