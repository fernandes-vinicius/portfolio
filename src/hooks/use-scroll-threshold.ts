"use client";

import { useEffect, useState } from "react";

/**
 * @description Detects if the user has scrolled past a certain threshold.
 * @param threshold - The threshold in pixels.
 * @returns True if the user has scrolled past the threshold, false otherwise.
 */
export function useScrollThreshold(threshold = 24): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    // Sync state immediately on mount to avoid wrong initial value
    // when the page loads already scrolled (e.g. hash navigation).
    setPassed(window.scrollY > threshold);

    let rafId: number;

    const onScroll = () => {
      // Coalesce multiple scroll events per frame into a single setState call,
      // preventing a long task for every pixel scrolled.
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPassed(window.scrollY > threshold);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return passed;
}
