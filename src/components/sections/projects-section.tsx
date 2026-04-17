"use client";

import { ProjectCard } from "@/components/project-card";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTagline,
  SectionTitle,
} from "@/components/section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { Project } from "@/lib/sanity/types";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="projects">
      <div className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.06)_30%,rgba(0,0,0,0.06)_70%,transparent_100%)]" />

      <SectionContainer>
        <SectionHeader ref={headerRef}>
          <SectionTagline>Projects</SectionTagline>
          <SectionTitle>Selected work</SectionTitle>
          <SectionDescription>
            Projects with measurable impact — from design systems to
            performance-optimized platforms.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project._id} project={project} delay={i * 0.08} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
