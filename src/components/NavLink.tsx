'use client'

import { ComponentPropsWithoutRef } from 'react'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'

interface NavLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

export function NavLink({ href, className, children, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  const locale = useLocale()

  const path = pathname.replace(locale, '').replace('//', '/')

  const isActive = path === href

  const _className = clsx(
    className,
    'absolute -bottom-0.5 left-0 inline-block h-[1px] group-hover:w-full',
    'ease bg-dark transition-[width] duration-300 dark:bg-light',
    'lg:bg-light lg:dark:bg-dark',
    [isActive ? 'w-full' : 'w-0'],
  )

  return (
    <Link
      {...rest}
      href={href}
      className="group relative rounded lg:text-light lg:dark:text-dark"
    >
      {children}
      <span className={_className}>&nbsp;</span>
    </Link>
  )
}
