'use client'

import React from 'react'

import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function AnimatedNumbers({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement | null>(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  React.useEffect(() => {
    springValue.on('change', (latest: number) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref} />
}
