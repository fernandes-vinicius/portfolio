'use client'

import { useTranslations } from 'next-intl'

export function Biography() {
  const t = useTranslations('About.Biography')

  return (
    <div
      className="col-span-3 flex flex-col items-start justify-start
      xl:col-span-4 md:order-2 md:col-span-8"
    >
      <h2
        className="mb-4 text-lg font-bold uppercase text-dark/75
        dark:text-light/75"
      >
        {t('title')}
      </h2>

      <p className="font-medium">{t('paragraphs.1')}</p>
      <p className="mt-4 font-medium">{t('paragraphs.2')}</p>
      <p className="mt-4 font-medium">{t('paragraphs.3')}</p>
      <p className="mt-4 font-medium">{t('paragraphs.4')}</p>
    </div>
  )
}
