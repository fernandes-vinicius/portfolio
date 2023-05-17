'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../public/images/logo.svg'

const MotionLink = motion(Link)

export function Logo() {
  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <MotionLink
        href="/"
        className="flex h-16 w-16 items-center justify-center overflow-hidden
        rounded-full bg-dark p-3.5 text-light dark:border-2 dark:border-solid
        dark:border-light"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131, 58, 180, 1)',
            'rgba(253, 29, 29, 1)',
            'rgba(252, 176, 69, 1)',
            'rgba(131, 58, 180, 1)',
            '#121212',
          ],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        <Image src={logoImg} alt="Logo" className="mt-1 h-auto" />
      </MotionLink>
    </div>
  )
}
