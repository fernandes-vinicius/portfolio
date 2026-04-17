"use client";

import { BarChart2, Layers, Target, Users } from "lucide-react";
import { DifferentialCard } from "@/components/diferential-card";
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

const differentials = [
  {
    Icon: Target,
    title: "Performance-first mindset",
    description:
      "I treat performance as a feature. Every decision — from component design to data fetching — is evaluated through Core Web Vitals and real user impact.",
    metric: "LCP reduced by up to 40% in production",
  },
  {
    Icon: Layers,
    title: "Strong frontend architecture",
    description:
      "I design systems that scale. From design tokens to shared component libraries, I build foundations that teams can grow on — not around.",
    metric: "Design systems adopted by 3+ teams",
  },
  {
    Icon: BarChart2,
    title: "Business metrics focused",
    description:
      "I understand that the best code is the one that moves the needle. I tie engineering decisions to outcomes: retention, conversion, and speed.",
    metric: "18% user retention increase via UI optimization",
  },
  {
    Icon: Users,
    title: "Cross-functional collaboration",
    description:
      "I work closely with designers, product managers, and backend engineers — bridging the gap between technical constraints and product vision.",
    metric: "6+ years in cross-functional product teams",
  },
];

export function DifferentialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="differentials">
      <div className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.06)_30%,rgba(0,0,0,0.06)_70%,transparent_100%)]" />

      <SectionContainer>
        <SectionHeader ref={headerRef} className="text-center">
          <SectionTagline>What I bring</SectionTagline>
          <SectionTitle>Why work with me</SectionTitle>
          <SectionDescription className="mx-auto">
            Not just code — craft, judgment, and measurable results.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {differentials.map((item, i) => (
            <DifferentialCard key={item.title} item={item} delay={i * 0.1} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
