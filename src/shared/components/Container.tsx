import React from 'react'

import clsx from 'clsx'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      id="container"
      className={clsx(
        'w-full h-full inline-block z-0',
        'p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
