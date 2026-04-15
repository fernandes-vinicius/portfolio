import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = React.ComponentProps<typeof Button>;

export function CTAButton({ className, ...props }: CTAButtonProps) {
  return (
    <Button
      className={cn(
        "bg-brand-gradient px-4 py-2 font-semibold shadow-sm duration-200 hover:scale-[1.03] active:scale-[0.97]",
        className,
      )}
      {...props}
    />
  );
}
