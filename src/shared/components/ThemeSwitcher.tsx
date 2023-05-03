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
      onClick={handleChangeThemeMode}
      className={clsx(
        'flex items-center justify-center rounded-full p-1 w-6 h-6',
        [mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'],
      )}
    >
      {mode === 'dark' ? <Sun weight="fill" /> : <MoonStars weight="fill" />}
    </button>
  )
}
