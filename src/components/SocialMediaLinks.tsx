'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

type LinkType = {
  href: string
  src: string
  alt: string
}

const links: LinkType[] = [
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
    src: '/images/social/github.svg',
    alt: 'Github',
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    src: '/images/social/linkedin.svg',
    alt: 'Linkedin',
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    src: '/images/social/instagram.png',
    alt: 'Instagram',
  },
  {
    href: process.env.NEXT_PUBLIC_WHATS_APP_URL,
    src: '/images/social/whatsapp.svg',
    alt: 'WhatsApp',
  },
]

export function SocialMediaLinks() {
  const socialMediaLinks = links.map((link) => (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={link.src}
        alt={link.alt}
        width="40"
        height="40"
        className="h-6 w-6"
      />
    </motion.a>
  ))

  return <>{socialMediaLinks}</>
}
