'use client'

import Image from 'next/image'

import React from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface SkillProps extends React.ComponentProps<'div'> {
  name: string
  imageUrl: string
}

export function Skill({ name, imageUrl, className }: SkillProps) {
  return (
    <motion.div
      title={name}
      aria-label={name}
      className="relative flex aspect-square w-full cursor-pointer flex-col
      items-center justify-center rounded-2xl rounded-br-2xl border border-solid
      bg-background p-6 shadow-2xl xs:p-4"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, type: 'spring' }}
    >
      <motion.div
        className="absolute -right-1.5 top-0 -z-10 h-[107%] w-[100%]
        rounded-[2rem] rounded-br-3xl bg-foreground md:-right-1.5 md:w-[105%]
        xs:h-[109%] xs:rounded-[1.2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <Image
        className={cn('h-12 w-12 object-contain', className)}
        src={imageUrl}
        alt={name}
        width={48}
        height={48}
      />

      <h3 className="mt-6 text-center text-xs font-semibold md:text-sm">
        {name}
      </h3>
    </motion.div>
  )
}
