import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
}

export function MenuButton({ isOpen, className, ...rest }: MenuButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex-col justify-center items-center hidden lg:flex',
        className,
      )}
    >
      <span
        className={clsx(
          'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm',
          'transition-all duration-300 ease-out',
          [isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'],
        )}
      />
      <span
        className={clsx(
          'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5',
          [isOpen ? 'opacity-0' : 'opacity-100'],
        )}
      />
      <span
        className={clsx('bg-dark dark:bg-light block h-0.5 w-6 rounded-sm', [
          isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5',
        ])}
      />
    </button>
  )
}
