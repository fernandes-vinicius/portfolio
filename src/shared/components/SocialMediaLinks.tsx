'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type LinkType = {
  href: string
  src: string
  alt: string
}

const links: LinkType[] = [
  {
    href: process.env.NEXT_PUBLIC_GITHUB_LINK,
    src: '/images/social/github.svg',
    alt: 'Github',
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
    src: '/images/social/linkedin.svg',
    alt: 'Linkedin',
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
    src: '/images/social/instagram.png',
    alt: 'Instagram',
  },
  {
    href: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    src: '/images/social/whatsapp.svg',
    alt: 'WhatsApp',
  },
]

export function SocialMediaLinks() {
  const socialMediaLinks = links.map((link) => (
    <motion.a
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
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
