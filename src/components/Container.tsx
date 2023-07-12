import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type ContainerProps = ComponentPropsWithoutRef<'div'>

export function Container({ className, children, ...rest }: ContainerProps) {
  const _className = clsx(
    className,
    'z-0 inline-block h-full w-full p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8',
  )

  return (
    <div {...rest} id="container" className={_className}>
      {children}
    </div>
  )
}
