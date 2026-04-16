"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { CTAButton } from "@/components/common/cta-button";
import { MenuIcon } from "@/components/common/icons";
import { NavButton } from "@/components/common/nav-button";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/nav";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "./scroll-to-top";

// Radix Popover + its 14 sub-packages (floating-ui, focus-scope, portal, etc.)
// are loaded only when this chunk is needed — keeps them out of the critical bundle.
const MobileMenu = dynamic(
  () => import("./mobile-menu").then((m) => m.MobileMenu),
  {
    ssr: false,
    loading: () => (
      <Button variant="ghost" size="icon-sm" aria-label="Open menu" disabled>
        <MenuIcon />
      </Button>
    ),
  },
);

export function Header() {
  const scrolled = useScrollThreshold(24);

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50"
      style={{
        animation: "hero-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <div
        className={cn("mx-auto transition-all duration-500", {
          "mt-3 max-w-3xl px-2": scrolled,
          "mt-0 max-w-6xl px-0": !scrolled,
        })}
      >
        <div
          className={cn(
            "flex items-center justify-between px-5 transition-all duration-500 will-change-[transform,opacity]",
            {
              "rounded-2xl border bg-background/85 py-3 shadow-sm backdrop-blur-xl":
                scrolled,
              "bg-transparent py-5": !scrolled,
            },
          )}
        >
          {/* Logo */}
          <ScrollToTop asChild>
            <Link href="#" className="group flex items-center gap-1.5">
              <span className="-tracking-[0.04em] font-extrabold font-sans text-base transition-colors group-hover:text-muted-foreground">
                vf
              </span>
              <span className="size-1.5 rounded-full bg-brand-gradient transition-colors" />
            </Link>
          </ScrollToTop>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => (
              <NavButton key={href} asChild>
                <Link href={href}>{label}</Link>
              </NavButton>
            ))}
          </nav>

          {/* CTA */}
          <div aria-hidden="true" className="hidden md:block">
            <CTAButton asChild size="lg">
              <Link href="#contact" aria-label="Go to contact">
                Hire me
              </Link>
            </CTAButton>
          </div>

          {/* Mobile menu — lazy-loaded to keep Radix Popover out of the critical bundle */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
