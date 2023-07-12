'use client'

import { ComponentPropsWithoutRef } from 'react'

import Image from 'next/image'

import clsx from 'clsx'
import { motion } from 'framer-motion'

interface SkillProps extends ComponentPropsWithoutRef<'div'> {
  name: string
  imagePath: string
}

export function Skill({ name, imagePath, className }: SkillProps) {
  const _className = clsx(className, 'h-12 w-12 object-contain')

  return (
    <motion.div
      title={name}
      aria-label={name}
      className="relative flex aspect-square w-full cursor-pointer flex-col items-center
      justify-center rounded-2xl rounded-br-2xl border border-solid border-dark
      bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'spring' }}
    >
      <motion.div
        className="absolute -right-1.5 top-0 -z-10 h-[107%] w-[100%]
        rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-1.5
        md:w-[105%] xs:h-[109%] xs:rounded-[1.2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <Image
        src={imagePath}
        alt={name}
        width={40}
        height={40}
        className={_className}
      />

      <h3
        className="mt-6 text-center text-xs font-semibold text-dark
        dark:text-light md:text-sm"
      >
        {name}
      </h3>
    </motion.div>
  )
}
