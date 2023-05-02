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
      className="flex items-center justify-center rounded-full font-semibold
    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
