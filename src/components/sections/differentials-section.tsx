"use client";

import { DifferentialCard } from "@/components/differential-card";
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
import type { Differential } from "@/lib/sanity/types";

type DifferentialsSectionProps = {
  differentials: Differential[];
};

export function DifferentialsSection({
  differentials,
}: DifferentialsSectionProps) {
  const headerRef = useScrollReveal();

  return (
    <Section id="differentials">
      <SectionDivider />

      <SectionContainer>
        <SectionHeader ref={headerRef} className="text-center">
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
