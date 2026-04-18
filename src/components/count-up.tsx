"use client";

import ReactCountUp, { type CountUpProps } from "react-countup";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function formatCompact(value: number, divisor: number, suffix: string) {
  const result = value / divisor;

  // remove .0 if the result is an integer
  return Number.isInteger(result)
    ? `${result}${suffix}`
    : `${result.toFixed(1)}${suffix}`;
}

export function formatNumberShort(value: number) {
  if (value >= 1_000_000) return formatCompact(value, 1_000_000, "M");
  if (value >= 1_000) return formatCompact(value, 1_000, "K");
  return value.toString();
}

export function CountUp({ end, suffix = "", duration = 2.75, ...props }: CountUpProps) {
  const reduced = useReducedMotion();
  return (
    <ReactCountUp
      end={end}
      duration={reduced ? 0 : duration}
      formattingFn={(v) => `${formatNumberShort(v)}${suffix.trim() ?? ""}`}
      {...props}
    />
  );
}
