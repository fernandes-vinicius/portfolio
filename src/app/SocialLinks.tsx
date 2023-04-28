'use client'

import { motion } from 'framer-motion'

import { GithubIcon, LinkedInIcon } from './Icons'

export function SocialLinks() {
  return (
    <nav className="flex items-center justify-center flex-wrap gap-6">
      <motion.a
        href="/"
        target="_blank"
        className="w-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubIcon />
      </motion.a>

      <motion.a
        href="/"
        target="_blank"
        className="w-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <LinkedInIcon />
      </motion.a>
    </nav>
  )
}
