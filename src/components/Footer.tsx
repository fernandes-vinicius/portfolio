'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const currentYear = new Date().getFullYear()

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer
      className="w-full border-t-2 border-solid border-dark text-lg font-medium
      dark:border-light dark:text-light sm:text-center sm:text-sm"
    >
      <div
        className="z-0 flex h-full w-full items-center justify-between bg-light
        p-32 py-8 dark:bg-dark xl:p-24 lg:flex-col lg:p-16 lg:py-6 md:p-12
        sm:gap-2 sm:p-8"
      >
        <span>
          © {currentYear} {t('text')}
        </span>

        <Link
          href={process.env.NEXT_PUBLIC_WHATS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {t('hello')}
        </Link>
      </div>
    </footer>
  )
}
