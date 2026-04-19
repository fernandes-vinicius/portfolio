"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/nav";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { cn } from "@/lib/utils";

// Radix Popover + its 14 sub-packages (floating-ui, focus-scope, portal, etc.)
// are loaded only when this chunk is needed — keeps them out of the critical bundle.
const MobileMenu = dynamic(
  () => import("@/components/mobile-menu").then((m) => m.MobileMenu),
  {
    ssr: false,
    loading: () => (
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Open menu"
        aria-expanded="false"
        disabled
      >
        <MenuIcon />
      </Button>
    ),
  },
);

export function Header() {
  const scrolled = useScrollThreshold();
  const scrollToTop = useScrollToTop();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 motion-safe:animate-[hero-fade-up_0.6s_cubic-bezier(0.22,1,0.36,1)_both]">
      <div
        className={cn(
          "mx-auto mt-0 max-w-6xl px-0 transition-all duration-500",
          { "mt-3 max-w-3xl px-2": scrolled },
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between bg-transparent p-5 transition-all duration-500 will-change-[transform,opacity]",
            {
              "rounded-2xl border bg-background/85 py-3 backdrop-blur-xl":
                scrolled,
            },
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            onClick={scrollToTop}
            className="group flex items-center gap-1.5"
          >
            <span className="font-extrabold tracking-tighter transition-colors group-hover:text-muted-foreground">
              vf
            </span>
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand-gradient transition-colors"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                asChild
                variant="ghost"
                className="font-normal opacity-75 duration-150"
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>

          {/* CTA + theme toggle */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <CTAButton asChild size="default">
              <Link href="#contact" aria-label="Go to contact">
                Hire me
                {/* Get in touch */}
              </Link>
            </CTAButton>
          </div>

          {/* Mobile menu — lazy-loaded to keep Radix Popover out of the critical bundle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
