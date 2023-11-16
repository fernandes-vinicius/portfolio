import { cn } from '@/lib/utils'

interface MenuButtonProps extends React.ComponentProps<'button'> {
  isOpen: boolean
}

export function MenuButton({ isOpen, className, ...props }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      data-open={isOpen}
      className={cn(
        'group flex flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'block h-0.5 w-6 -translate-y-0.5 rounded-sm bg-foreground transition-all duration-300 ease-out',
          'group-data-[open=true]:translate-y-1 group-data-[open=true]:rotate-45',
        )}
      />
      <span
        className={cn(
          'my-0.5 block h-0.5 w-6 rounded-sm bg-foreground transition-all duration-300 ease-out',
          'group-data-[open=true]:opacity-0',
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-6 translate-y-0.5 rounded-sm bg-foreground transition-all duration-300 ease-out',
          'group-data-[open=true]:-translate-y-1 group-data-[open=true]:-rotate-45',
        )}
      />
      <span className="sr-only">Toggle menu</span>
    </button>
  )
}
