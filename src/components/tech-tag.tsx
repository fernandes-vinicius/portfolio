import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TechTagProps = React.ComponentProps<typeof Badge>;

export function TechTag({ className, ...props }: TechTagProps) {
  return (
    <Badge
      variant="tertiary"
      className={cn("h-auto px-2.5 py-1", className)}
      {...props}
    />
  );
}
