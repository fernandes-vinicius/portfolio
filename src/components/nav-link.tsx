'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface NavLinkProps extends LinkProps {
  className?: string
  children: React.ReactNode
}

export function NavLink({ className, children, href, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn('group relative font-medium', className)}
      {...props}
    >
      {children}
      <span
        data-active={isActive}
        className={cn(
          'absolute -bottom-0.5 left-0 inline-block h-px w-0 bg-foreground group-hover:w-full lg:bg-background',
          'transition-[width] duration-300 ease-linear',
          'data-[active=true]:w-full',
        )}
      >
        &nbsp;
      </span>
    </Link>
  )
}
