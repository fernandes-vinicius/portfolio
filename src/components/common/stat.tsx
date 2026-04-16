import type { Metric } from "@/lib/sanity/types";

interface StatProps {
  metric: Metric;
}

export function Stat({ metric }: StatProps) {
  const { value, label } = metric;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="-tracking-[0.03em] font-extrabold text-xl">{value}</span>
      <span className="font-normal font-sans text-muted-foreground text-xs">
        {label}
      </span>
    </div>
  );
}
