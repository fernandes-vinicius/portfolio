import { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
}

export function MenuButton({ isOpen, className, ...rest }: MenuButtonProps) {
  return (
    <button
      {...rest}
      type="button"
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      className={clsx('flex flex-col items-center justify-center', className)}
    >
      <span className="sr-only" />
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-sm bg-dark dark:bg-light',
          'transition-all duration-300 ease-out',
          [isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'],
        )}
      />
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-sm bg-dark dark:bg-light',
          'my-0.5 transition-all duration-300 ease-out',
          [isOpen ? 'opacity-0' : 'opacity-100'],
        )}
      />
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-sm bg-dark dark:bg-light',
          'transition-all duration-300 ease-out',
          isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5',
        )}
      />
    </button>
  )
}
