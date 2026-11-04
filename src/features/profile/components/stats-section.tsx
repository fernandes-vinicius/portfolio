import type { ProfileMetric } from "@/features/profile/types/profile-types";
import { CountUp } from "@/shared/components/count-up";
import { Reveal } from "@/shared/components/reveal";
import {
  Section,
  SectionContainer,
  SectionDivider,
} from "@/shared/components/section";
import {
  Statistic,
  StatisticLabel,
  StatisticSub,
  StatisticValue,
} from "@/shared/components/statistic";
import { Card } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";

type StatsSectionProps = {
  metrics: ProfileMetric[];
};

export function StatsSection({ metrics = [] }: StatsSectionProps) {
  return (
    <Section className="py-20">
      <SectionDivider />

      <SectionContainer className="max-w-5xl">
        <Reveal>
          <Card
            className={cn(
              "grid grid-cols-2 gap-0 overflow-hidden p-0 md:grid-cols-4",
              "divide-x divide-border",
            )}
          >
            {metrics.map((metric) => (
              <Statistic key={metric._key}>
                <StatisticValue>
                  <CountUp
                    end={metric.value ?? 0}
                    suffix={metric.suffix ?? ""}
                  />
                </StatisticValue>
                <StatisticLabel>{metric.label}</StatisticLabel>
                <StatisticSub>{metric.sub}</StatisticSub>
              </Statistic>
            ))}
          </Card>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
