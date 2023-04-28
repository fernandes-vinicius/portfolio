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
      className="w-full mx-auto py-2 flex items-center justify-center text-center
      overflow-hidden"
    >
      <motion.h1
        className={clsx(
          'inline-block w-full text-dark font-bold capitalize text-8xl',
          className,
        )}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
