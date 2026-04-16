"use client";

import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "@/components/common/cta-button";
import { CloseIcon, MenuIcon } from "@/components/common/icons";
import { NavButton } from "@/components/common/nav-button";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "./scroll-to-top";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

          {/* Mobile popover */}
          <Popover open={mobileOpen} onOpenChange={setMobileOpen}>
            <PopoverTrigger asChild className="md:hidden">
              {/* Mobile toggle */}
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </Button>
            </PopoverTrigger>

            <PopoverContent
              id="mobile-nav"
              side="bottom"
              align="end"
              sideOffset={24}
              className="md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <NavButton
                    key={href}
                    asChild
                    className="justify-start px-3 py-2.5 text-left"
                  >
                    <Link href={href}>{label}</Link>
                  </NavButton>
                ))}

                <div className="mt-2 border-t pt-4">
                  {/* Mobile CTA */}
                  <CTAButton asChild className="w-full">
                    <Link href="#contact" aria-label="Go to contact">
                      Hire me
                    </Link>
                  </CTAButton>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
