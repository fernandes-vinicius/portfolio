import { SkillCard } from "@/features/skills/components/skill-card";
import type { SkillGroupItem } from "@/features/skills/types/skill-types";
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

type SkillsSectionProps = {
  skillGroups: SkillGroupItem[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <Section id="skills">
      <SectionDivider />

      <SectionContainer>
        <SectionHeader>
          <SectionTagline>Skills</SectionTagline>
          <SectionTitle>Tech stack</SectionTitle>
          <SectionDescription>
            The tools I reach for to build fast, accessible, and maintainable
            applications.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group._id} skillGroup={group} delay={i * 0.07} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
