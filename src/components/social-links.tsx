'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import socialLinks from '@/data/social-links.json'

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={link.imageUrl}
            alt={link.name}
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </motion.a>
      ))}
    </div>
  )
}
