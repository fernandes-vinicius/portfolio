'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface SkillProps {
  name: string
  image: string
  className?: string
}

const MotionImage = motion(Image)

export function Skill({ name, image, className }: SkillProps) {
  return (
    <motion.div
      title={name}
      aria-label={name}
      className="relative flex w-full cursor-pointer flex-col items-center
      justify-center rounded-2xl rounded-br-2xl border border-solid border-dark
      bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'spring' }}
    >
      <motion.div
        className="absolute -right-1.5 top-0 -z-10 h-[107%] w-[108%]
        rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-1.5
        md:w-[105%] xs:h-[109%] xs:rounded-[1.2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <MotionImage
        src={image}
        alt={name}
        loading="lazy"
        width="40"
        height="40"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={clsx('h-10 w-10', className)}
        whileHover={{ scale: 1.08 }}
      />
    </motion.div>
  )
}
