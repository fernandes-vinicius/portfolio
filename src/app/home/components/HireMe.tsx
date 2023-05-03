'use client'

import Link from 'next/link'
// import { Envelope } from 'phosphor-react'

import { CircularText } from '~/shared/components/Icons'

export function HireMe() {
  return (
    <div
      className="fixed left-4 bottom-4 flex flex-col items-center overflow-hidden
      justify-center md:right-8 sm:right-0 md:bottom-auto md:left-auto md:top-0
      md:absolute"
    >
      <div
        className="w-48 h-auto flex items-center justify-center relative
        md:w-24"
      >
        <CircularText
          className="w-full h-auto fill-dark dark:fill-light
          animate-spin-slow duration-200"
        />

        <Link
          href="mailto:viniciusfernandes6991@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center absolute left-[50%]
          top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border
          border-solid bg-dark rounded-full text-white w-20 h-20
          font-semibold hover:bg-light hover:border-dark hover:text-dark
          dark:text-dark dark:bg-light dark:hover:bg-dark
          dark:hover:text-light dark:hover:border-light
          dark:shadow-light/25 md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
          {/* <Envelope weight="regular" className="text-[40px] md:text-[24px]" /> */}
        </Link>
      </div>
    </div>
  )
}
