"use client";

import { Slot } from "@radix-ui/react-slot";

type ScrollToTopProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
};

export function ScrollToTop({ asChild, onClick, ...props }: ScrollToTopProps) {
  const Comp = asChild ? Slot : "button";

  const handleClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    onClick?.(e);

    const scrollY = window.scrollY;
    window.scrollTo({ top: 0, behavior: scrollY > 0 ? "smooth" : "auto" });
  };

  return <Comp {...props} onClick={handleClick} />;
}
