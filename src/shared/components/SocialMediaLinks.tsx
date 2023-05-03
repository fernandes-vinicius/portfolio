'use client'

import { motion } from 'framer-motion'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react'

const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL
const linkedinURL = process.env.NEXT_PUBLIC_LINKED_IN_URL
const instagramURL = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const whatsappURL = process.env.NEXT_PUBLIC_WHATS_APP_URL

const socialMediaLinks = [
  { href: githubURL, icon: GithubLogo },
  { href: linkedinURL, icon: LinkedinLogo },
  { href: instagramURL, icon: InstagramLogo },
  { href: whatsappURL, icon: WhatsappLogo },
]

export function SocialMediaLinks() {
  const links = socialMediaLinks.map((link) => {
    const Icon = link.icon

    return (
      <motion.a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="text-dark dark:text-light sm:text-light
        sm:dark:text-dark"
      >
        <Icon weight="regular" className="w-6 h-6" />
      </motion.a>
    )
  })

  return <>{links}</>
}
