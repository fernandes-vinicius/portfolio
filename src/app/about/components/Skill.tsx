'use client'

import { motion } from 'framer-motion'

interface SkillProps {
  name: string
  x: string | number
  y: string | number
}

export function Skill({ name, x, y }: SkillProps) {
  return (
    <motion.div
      className="cursor-pointer w-max origin-center absolute font-semibold
      bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
      xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
