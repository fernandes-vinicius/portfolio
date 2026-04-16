"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver that adds `is-visible` to the returned
 * ref element once it enters the viewport. Combine with the `.reveal` CSS
 * class from animations.css for a zero-framer-motion scroll animation.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "-60px 0px",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
