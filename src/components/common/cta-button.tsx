import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = React.ComponentProps<typeof Button>;

export function CTAButton({ className, ...props }: CTAButtonProps) {
  return (
    <Button
      size="xl"
      variant="gradient"
      className={cn(
        "font-semibold shadow-sm duration-200 hover:scale-[1.03] active:scale-[0.97]",
        className,
      )}
      {...props}
    />
  );
}
