import { cn } from "@/lib/utils";

type ScrollCueProps = React.ComponentProps<"div">;

export function ScrollCue({ className, ...props }: ScrollCueProps) {
  return (
    <div
      className={cn(
        "-translate-x-1/2 absolute bottom-10 left-1/2",
        "animate-[hero-fade-up_0.8s_0.66s_cubic-bezier(0.22,1,0.36,1)_both]",
        className,
      )}
      {...props}
    >
      <div className="h-10 w-px origin-center animate-[scroll-pulse_2s_ease-in-out_infinite] bg-[linear-gradient(to_bottom,transparent,var(--primary)_50%,transparent)]" />
    </div>
  );
}
