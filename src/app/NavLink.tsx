'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends LinkProps {
  className?: string
  children: string
}

export function NavLink({ href, className, children, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link {...rest} href={href} className={clsx('relative group', className)}>
      {children}

      <span
        className={clsx(
          'h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5',
          'group-hover:w-full transition-[width] ease-in duration-300',
          'dark:bg-light',
          [isActive && 'w-full'],
        )}
      >
        &nbsp;
      </span>
    </Link>
  )
}
