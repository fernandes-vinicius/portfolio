'use client'

import { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

interface MobileNavLinkProps extends ButtonHTMLAttributes<HTMLElement> {
  href: string
  className?: string
  children: string
  toggle: () => void
}

export function MobileNavLink(props: MobileNavLinkProps) {
  const { href, className, children, toggle, ...rest } = props

  const pathname = usePathname()
  const router = useRouter()

  const isActive = pathname === href

  function handleClick() {
    toggle()
    router.push(href)
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
