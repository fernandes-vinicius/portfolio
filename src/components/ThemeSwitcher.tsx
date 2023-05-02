'use client'

import clsx from 'clsx'

import { useThemeSwitcher } from '~/hooks/useThemeSwitcher'

import { SunIcon } from './Icons'

export function ThemeSwitcher() {
  const { mode, setMode } = useThemeSwitcher()

  function handleChangeThemeMode() {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={handleChangeThemeMode}
      className={clsx(
        'flex items-center justify-center rounded-full p-1 w-6 h-6 ml-3',
        [mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'],
      )}
    >
      {mode === 'dark' ? (
        <SunIcon className="fill-dark" />
      ) : (
        <SunIcon className="fill-dark" />
      )}
    </button>
  )
}
