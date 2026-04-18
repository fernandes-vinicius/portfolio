import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const iconBoxVariants = cva(
  "flex shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary",
  {
    variants: {
      size: {
        default: "size-9",
        sm: "size-8",
        lg: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type IconBoxProps = React.ComponentProps<"div"> &
  VariantProps<typeof iconBoxVariants>;

export function IconBox({ className, size, ...props }: IconBoxProps) {
  return (
    <div className={cn(iconBoxVariants({ size }), className)} {...props} />
  );
}
