"use client";

import { ExperienceCard } from "@/components/experience-card";
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
import type { Experience } from "@/lib/sanity/types";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const headerRef = useScrollReveal();

  const sortedExperiences = experiences.sort(
    (a, b) => (a?.order ?? 0) - (b?.order ?? 0),
  );

  return (
    <Section id="experience">
      <SectionDivider />

      <SectionContainer className="max-w-4xl">
        <SectionHeader ref={headerRef}>
          <SectionTagline>Experience</SectionTagline>
          <SectionTitle>Where I've worked</SectionTitle>
          <SectionDescription>
            6+ years of building high-impact products, leading architecture
            decisions, and shipping measurable results.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="flex flex-col gap-4">
          {sortedExperiences.map((exp, i) => (
            <ExperienceCard key={exp._id} experience={exp} delay={i * 0.1} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
