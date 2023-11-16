import { AnimatedNumbers } from '@/components/animated-numbers'

interface HighlightProps {
  label: string
  value: number
}

export function Highlight({ label, value }: HighlightProps) {
  return (
    <div className="flex flex-col items-end justify-center xl:items-center">
      <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
        <AnimatedNumbers value={value} /> +
      </span>
      <h2
        className="mb-4 text-xl font-medium capitalize text-foreground/75
        xl:text-center md:text-lg sm:text-base xs:text-sm"
      >
        {label}
      </h2>
    </div>
  )
}
