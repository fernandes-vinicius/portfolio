'use client'

import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('light')
  }

  return (
    <button type="button" onClick={handleToggleTheme} className="relative flex">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
