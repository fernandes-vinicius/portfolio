'use client'

import { motion } from 'framer-motion'

import { GithubIcon, LinkedInIcon } from './Icons'

export function SocialLinks() {
  return (
    <>
      <motion.a
        href="/"
        target="_blank"
        className="w-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubIcon className="bg-light rounded-full dark:bg-dark" />
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
    </>
  )
}
