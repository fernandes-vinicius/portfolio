"use client";

import { CountUp } from "@/components/count-up";
import {
  Section,
  SectionContainer,
  SectionDivider,
} from "@/components/section";
import {
  Statistic,
  StatisticLabel,
  StatisticSub,
  StatisticValue,
} from "@/components/statistic";
import { Card } from "@/components/ui/card";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import type { Metric } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

type StatsSectionProps = {
  metrics: Metric[];
};

export function StatsSection({ metrics = [] }: StatsSectionProps) {
  const { ref: wrapRef } = useInViewOnce();

  return (
    <Section className="py-20">
      <SectionDivider />

      <SectionContainer className="max-w-5xl">
        <Card
          ref={wrapRef}
          className={cn(
            "reveal grid grid-cols-2 gap-0 overflow-hidden p-0 md:grid-cols-4",
            "divide-x divide-border",
          )}
        >
          {metrics.map((metric) => (
            <Statistic key={metric.label}>
              <StatisticValue>
                <CountUp end={metric.value ?? 0} suffix={metric.suffix ?? ""} />
              </StatisticValue>
              <StatisticLabel>{metric.label}</StatisticLabel>
              <StatisticSub>{metric.sub}</StatisticSub>
            </Statistic>
          ))}
        </Card>
      </SectionContainer>
    </Section>
  );
}
