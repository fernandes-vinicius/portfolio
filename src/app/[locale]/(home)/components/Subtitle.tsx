'use client'

import { useTranslations } from 'next-intl'

export function Subtitle() {
  const t = useTranslations('Home')

  return (
    <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
      {t('subtitle')}
    </p>
  )
}
