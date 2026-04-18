import { cn } from "@/lib/utils";

function Statistic({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="statistic"
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 px-4 py-10 text-center",
        className,
      )}
      {...props}
    />
  );
}

function StatisticValue({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="statistic-value"
      className={cn(
        "font-extrabold text-[clamp(1.75rem,4vw,2.25rem)] leading-none tracking-tighter",
        className,
      )}
      {...props}
    />
  );
}

function StatisticLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="statistic-label"
      className={cn("font-normal text-foreground text-xs", className)}
      {...props}
    />
  );
}

function StatisticSub({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="statistic-label"
      className={cn("font-normal text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

export { Statistic, StatisticValue, StatisticLabel, StatisticSub };
