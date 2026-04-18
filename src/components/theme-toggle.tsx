"use client";

import { useTheme } from "next-themes";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
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

  const CurrentIcon =
    CURRENT_ICON[(resolvedTheme as "light" | "dark") ?? "dark"] ?? MonitorIcon;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Toggle theme">
          <CurrentIcon aria-hidden="true" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-auto min-w-36 gap-1.5 p-1">
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
      </PopoverContent>
    </Popover>
  );
}
