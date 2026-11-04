import { ExperienceCard } from "@/features/experience/components/experience-card";
import type { ExperienceItem } from "@/features/experience/types/experience-types";
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

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section id="experience">
      <SectionDivider />

      <SectionContainer className="max-w-4xl">
        <SectionHeader>
          <SectionTagline>Experience</SectionTagline>
          <SectionTitle>Where I've worked</SectionTitle>
          <SectionDescription>
            6+ years of building high-impact products, leading architecture
            decisions, and shipping measurable results.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp._id} experience={exp} delay={i * 0.1} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
