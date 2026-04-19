"use client";

import { Card } from "@/components/ui/card";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

type RevealCardProps = React.ComponentProps<typeof Card> & {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
};

export function RevealCard(props: RevealCardProps) {
  const {
    className,
    threshold = 0.06,
    rootMargin = "-40px 0px",
    delay = 0,
    ...rest
  } = props;

  const { ref } = useInViewOnce({ threshold, rootMargin });

  return (
    <Card
      ref={ref}
      className={cn("group reveal card-hover", className)}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    />
  );
}
