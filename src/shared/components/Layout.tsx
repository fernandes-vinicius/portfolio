import React from 'react'

import clsx from 'clsx'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Layout({ className, children, ...rest }: LayoutProps) {
  return (
    <div
      {...rest}
      id="layout"
      className={clsx(
        'w-full h-full inline-block z-0',
        'bg-light dark:bg-dark',
        'p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
