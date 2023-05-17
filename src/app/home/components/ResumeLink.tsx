'use client'

import Link from 'next/link'
import { ArrowSquareOut } from 'phosphor-react'

export function ResumeLink() {
  return (
    <Link
      download
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center rounded-lg border-2 border-solid bg-dark
      p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark
      hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark
      dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2
      md:px-4 md:text-base"
    >
      Resumo <ArrowSquareOut weight="bold" className="ml-1 !w-6 md:!w-4" />
    </Link>
  )
}
