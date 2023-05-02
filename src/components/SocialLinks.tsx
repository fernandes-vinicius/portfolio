'use client'

import { motion } from 'framer-motion'

import { GithubIcon, InstagramIcon, LinkedInIcon } from './Icons'

export function SocialLinks() {
  return (
    <>
      <motion.a
        href="/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6"
      >
        <GithubIcon />
      </motion.a>

      <motion.a
        href="/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6"
      >
        <LinkedInIcon />
      </motion.a>

      <motion.a
        href="/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6"
      >
        <InstagramIcon />
      </motion.a>
    </>
  )
}
