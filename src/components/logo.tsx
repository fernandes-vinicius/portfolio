'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const bgColors = [
  '#121212',
  'rgba(131, 58, 180, 1)',
  'rgba(253, 29, 29, 1)',
  'rgba(252, 176, 69, 1)',
  'rgba(131, 58, 180, 1)',
  '#121212',
]

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <MotionLink
        href="/"
        whileHover={{
          backgroundColor: bgColors,
          transition: { duration: 1, repeat: Infinity },
        }}
        className="flex h-16 w-16 items-center justify-center overflow-hidden
        rounded-full bg-[#121212] p-3.5 text-[#f5f5f5] dark:border-2
        dark:border-solid dark:border-white"
      >
        <Image
          className="mt-1 h-auto object-contain"
          src="/images/logo.svg"
          alt="Logo"
          width={64}
          height={64}
        />
      </MotionLink>
    </div>
  )
}
