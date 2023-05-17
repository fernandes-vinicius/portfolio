import React from 'react'

import clsx from 'clsx'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      id="container"
      className={clsx(
        'z-0 inline-block h-full w-full',
        'p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8',
        className,
      )}
    />
  )
}
