"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type UseInViewOnceOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useInViewOnce<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOnceOptions = {},
) {
  const { threshold = 0.15, rootMargin = "0px" } = options;

  const ref = useScrollReveal<T>();
  const [inView, setInView] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <>
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin, inView]);

  return { ref, inView };
}
