"use client";

import { useScrollReveal } from "@/shared/hooks/use-scroll-reveal";
import { cn } from "@/shared/lib/utils";

type RevealProps = Omit<React.ComponentProps<"div">, "ref"> & {
  rootMargin?: string;
};

/**
 * Smallest possible client island for scroll-reveal: a `div` with the
 * `.reveal` class that gets `.is-visible` once it enters the viewport.
 * Lets sections stay Server Components — wrap only what needs to animate.
 */
export function Reveal({ className, rootMargin, ...props }: RevealProps) {
  const ref = useScrollReveal(rootMargin);

  return <div ref={ref} className={cn("reveal", className)} {...props} />;
}
