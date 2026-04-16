"use client";

import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "@/components/cta-button";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { navLinks } from "@/config/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </PopoverTrigger>

      <PopoverContent id="mobile-nav" side="bottom" align="end" sideOffset={24}>
        <div className="flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Button
              key={href}
              asChild
              variant="ghost"
              className="justify-start px-3 py-2.5 text-left font-normal duration-150"
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}

          <div className="mt-2 border-t pt-4">
            <CTAButton asChild className="w-full">
              <Link href="#contact" aria-label="Go to contact">
                Hire me
              </Link>
            </CTAButton>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
