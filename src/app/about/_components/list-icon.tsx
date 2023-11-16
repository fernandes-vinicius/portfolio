'use client'

import { MutableRefObject } from 'react'

import { motion, useScroll } from 'framer-motion'

interface ListIconProps {
  reference: MutableRefObject<null>
}

export function ListIcon({ reference }: ListIconProps) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute left-0 stroke-foreground">
      <svg
        className="xs:w-h-10 -rotate-90 md:h-[60px] md:w-[60px] xs:h-10"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="fill-none stroke-primary stroke-1"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-background stroke-[5px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse fill-primary stroke-1"
        />
      </svg>
    </figure>
  )
}
