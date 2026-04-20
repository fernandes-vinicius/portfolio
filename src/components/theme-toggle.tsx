"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTrigger,
} from "@/components/ui/popover";

type Theme = "system" | "light" | "dark";

const OPTIONS: { value: Theme; label: string; Icon: typeof SunIcon }[] = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
];

const CURRENT_ICON: Record<"light" | "dark", typeof SunIcon> = {
  light: SunIcon,
  dark: MoonIcon,
};

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const CurrentIcon = mounted
    ? (CURRENT_ICON[resolvedTheme as "light" | "dark"] ?? MonitorIcon)
    : MonitorIcon;

  if (!mounted) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Toggle theme">
          <CurrentIcon aria-hidden="true" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-auto min-w-36">
        <div className="flex flex-col gap-1.5">
          {OPTIONS.map(({ value, label, Icon }) => (
            <Button
              key={value}
              variant="ghost"
              size="sm"
              onClick={() => setTheme(value)}
              className="justify-start gap-3 text-left"
            >
              <Icon aria-hidden="true" />
              {label}
            </Button>
          ))}
        </div>

        <PopoverDescription className="sr-only text-[0.625rem] text-muted-foreground opacity-75 md:not-sr-only">
          Press <kbd>D</kbd> to toggle theme
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  );
}
