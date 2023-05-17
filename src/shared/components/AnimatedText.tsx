'use client'

import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <div
      className="mx-auto flex w-full flex-col items-center justify-center
      overflow-hidden py-2 text-center sm:py-0"
    >
      <motion.h1
        className={clsx(
          'inline-block w-full text-8xl font-bold capitalize',
          'text-dark dark:text-light',
          className,
        )}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={singleWord}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
