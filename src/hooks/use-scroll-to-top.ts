"use client";

import { useCallback } from "react";

/**
 * @description Scrolls to the top of the page.
 * @returns A function to scroll to the top of the page.
 */
export function useScrollToTop() {
  const scrollToTop = useCallback(() => {
    // remove hash from URL
    window.history.replaceState(null, "", window.location.pathname);

    const scrollY = window.scrollY;

    window.scrollTo({ top: 0, behavior: scrollY > 0 ? "smooth" : "auto" });
  }, []);

  return scrollToTop;
}
