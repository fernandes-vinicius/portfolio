import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavButtonProps = React.ComponentProps<typeof Button>;

export function NavButton(props: NavButtonProps) {
  const { className, ...rest } = props;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "font-normal opacity-75 transition-all duration-150",
        className,
      )}
      {...rest}
    />
  );
}
