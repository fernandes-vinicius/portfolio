'use client'

import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function NavLink({ href, children, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      {...rest}
      href={href}
      className="relative group rounded lg:text-light lg:dark:text-dark"
    >
      {children}

      <span
        className={clsx(
          'absolute left-0 -bottom-0.5 inline-block h-[1px]',
          'group-hover:w-full',
          'bg-dark dark:bg-light lg:bg-light lg:dark:bg-dark',
          'transition-[width] ease duration-300',
          [isActive ? 'w-full' : 'w-0'],
        )}
      >
        &nbsp;
      </span>
    </Link>
  )
}
