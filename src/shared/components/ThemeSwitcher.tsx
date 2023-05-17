'use client'

import clsx from 'clsx'
import { MoonStars, Sun } from 'phosphor-react'

import { useThemeSwitcher } from '~/shared/hooks/useThemeSwitcher'

export function ThemeSwitcher() {
  const { mode, setMode } = useThemeSwitcher()

  function handleChangeThemeMode() {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label="theme-switcher"
      onClick={handleChangeThemeMode}
      className={clsx(
        'flex h-6 w-6 items-center justify-center rounded-full p-1',
        [mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'],
      )}
    >
      {mode === 'dark' ? <Sun weight="fill" /> : <MoonStars weight="fill" />}
    </button>
  )
}
