"use client";

import { CountUp } from "@/components/count-up";
import {
  Statistic,
  StatisticLabel,
  StatisticSub,
  StatisticValue,
} from "@/components/statistic";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import type { Metric } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

type StatsSectionProps = {
  metrics: Metric[];
};

export function StatsSection({ metrics = [] }: StatsSectionProps) {
  const { ref: wrapRef, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section className="relative bg-background px-6 py-20">
      {/* Top divider */}
      <div className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-5xl">
        <div
          ref={wrapRef}
          className={cn(
            "reveal grid grid-cols-2 overflow-hidden rounded-2xl border bg-card md:grid-cols-4",
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
        </div>
      </div>
    </section>
  );
}
