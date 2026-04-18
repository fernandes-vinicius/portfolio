"use client";

import { ProjectCard } from "@/components/project-card";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionDivider,
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
      <SectionDivider />

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
