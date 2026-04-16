"use client";

import { useEffect, useState } from "react";
import { CountUp } from "@/components/common/count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Years of experience",
    sub: "Building at scale",
  },
  { value: 40, suffix: "%", label: "LCP reduction", sub: "Performance wins" },
  { value: 95, suffix: "+", label: "Lighthouse score", sub: "Production apps" },
  { value: 1, suffix: "M+", label: "Users reached", sub: "Real-world impact" },
];

function StatCell({
  value,
  suffix,
  label,
  sub,
  active,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  active: boolean;
  index: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-10 text-center">
      <span className="-tracking-tighter font-extrabold font-sans text-[clamp(1.75rem,4vw,2.25rem)] text-foreground leading-none">
        {active ? <CountUp end={value} delay={index * 0.15} /> : 0}
        {suffix}
      </span>

      <span className="font-medium text-foreground/80 text-xs">{label}</span>

      <span className="text-muted-foreground text-xs">{sub}</span>
    </div>
  );
}

export function StatsSection() {
  const [active, setActive] = useState(false);
  const wrapRef = useScrollReveal<HTMLDivElement>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <>
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
          {stats.map((s, i) => (
            <StatCell key={s.label} {...s} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
