import { cn } from '@/lib/utils'

type ContainerProps = React.ComponentProps<'div'>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'inline-block h-full w-full p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8',
        className,
      )}
      {...props}
    />
  )
}
