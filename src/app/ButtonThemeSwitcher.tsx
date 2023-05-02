'use client'

import clsx from 'clsx'

import { useThemeSwitcher } from '~/hooks/useThemeSwitcher'

import { MoonIcon, SunIcon } from './Icons'

export function ButtonThemeSwitcher() {
  const { mode, setMode } = useThemeSwitcher()

  return (
    <button
      type="button"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className={clsx(
        'flex items-center justify-center rounded-full p-1',
        [mode === 'light' && 'bg-dark text-light'],
        [mode === 'dark' && 'bg-light text-dark'],
      )}
    >
      {mode === 'dark' ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </button>
  )
}
