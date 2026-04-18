import { cn } from "@/lib/utils";

type GradientTopEdgeProps = React.ComponentProps<"div">;

export function GradientTopEdge({ className, ...props }: GradientTopEdgeProps) {
  return (
    <div
      className={cn(
        "mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)] absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-50",
        className,
      )}
      {...props}
    />
  );
}
