"use client";

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
import { SkillCard } from "@/components/skill-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { SkillGroup } from "@/lib/sanity/types";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const headerRef = useScrollReveal();

  const sortedSkillGroups = skillGroups.sort(
    (a, b) => (a?.order ?? 0) - (b?.order ?? 0),
  );

  return (
    <Section id="skills">
      <SectionDivider />

      <SectionContainer>
        <SectionHeader ref={headerRef}>
          <SectionTagline>Skills</SectionTagline>
          <SectionTitle>Tech stack</SectionTitle>
          <SectionDescription>
            The tools I reach for to build fast, accessible, and maintainable
            applications.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedSkillGroups.map((group, i) => (
            <SkillCard key={group._id} skillGroup={group} delay={i * 0.07} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
