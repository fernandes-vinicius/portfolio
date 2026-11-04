import { ProjectCard } from "@/features/projects/components/project-card";
import type { ProjectItem } from "@/features/projects/types/project-types";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionDivider,
  SectionHeader,
  SectionTagline,
  SectionTitle,
} from "@/shared/components/section";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects">
      <SectionDivider />

      <SectionContainer>
        <SectionHeader>
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
