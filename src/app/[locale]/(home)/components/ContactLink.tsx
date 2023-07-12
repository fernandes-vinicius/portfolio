'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function ContactLink() {
  const t = useTranslations('Home')

  return (
    <Link
      href="/"
      // href={whatsAppLink} // TODO
      target="_blank"
      rel="noopener noreferrer"
      className="ml-8 text-lg font-medium capitalize text-dark underline
      underline-offset-2 dark:text-light md:text-base"
    >
      {t('contactLink')}
    </Link>
  )
}
