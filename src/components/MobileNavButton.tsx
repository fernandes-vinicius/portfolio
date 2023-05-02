'use client'

import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

interface MobileNavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
}

export function MobileNavButton(props: MobileNavButtonProps) {
  const { href, className, children, onClick, ...rest } = props

  const pathname = usePathname()
  const router = useRouter()

  const isActive = pathname === href

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    router.push(href)

    if (onClick) onClick(e)
  }

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={clsx('relative group text-light dark:text-dark', className)}
    >
      {children}

      <span
        className={clsx(
          'h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5',
          'group-hover:w-full transition-[width] ease-in duration-300',
          'dark:bg-dark',
          [isActive && 'w-full'],
        )}
      >
        &nbsp;
      </span>
    </button>
  )
}
