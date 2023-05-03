'use client'

import { motion } from 'framer-motion'

// import githubIcon from '../../../public/icons/Github.svg'
// import linkedInIcon from '../../../public/icons/LinkedIn.svg'
import { GithubIcon, LinkedInIcon } from './Icons'

const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL
const linkedInURL = process.env.NEXT_PUBLIC_LINKED_IN_URL
// const instagramURL = process.env.NEXT_PUBLIC_INSTAGRAM_URL
// const emailURL = process.env.NEXT_PUBLIC_EMAIL_URL

export function SocialLinks() {
  return (
    <>
      <motion.a
        href={githubURL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 rounded-full bg-light dark:bg-dark"
      >
        <GithubIcon className="fill-dark" />
      </motion.a>

      <motion.a
        href={linkedInURL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6"
      >
        <LinkedInIcon />
      </motion.a>
    </>
  )
}
