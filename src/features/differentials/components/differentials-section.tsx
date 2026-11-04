import { DifferentialCard } from "@/features/differentials/components/differential-card";
import type { DifferentialItem } from "@/features/differentials/types/differential-types";
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

type DifferentialsSectionProps = {
  differentials: DifferentialItem[];
};

export function DifferentialsSection({
  differentials,
}: DifferentialsSectionProps) {
  return (
    <Section id="differentials">
      <SectionDivider />

      <SectionContainer>
        <SectionHeader className="text-center">
          <SectionTagline>What I bring</SectionTagline>
          <SectionTitle>Why work with me</SectionTitle>
          <SectionDescription className="mx-auto" aria-hidden="true">
            Not just code — craft, judgment, and measurable results.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {differentials.map((differential, i) => (
            <DifferentialCard
              key={differential._id}
              differential={differential}
              delay={i * 0.1}
            />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
