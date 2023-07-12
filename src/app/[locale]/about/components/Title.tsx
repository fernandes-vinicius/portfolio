'use client'

import { useTranslations } from 'next-intl'

import { AnimatedText } from '~/components/AnimatedText'

export function Title() {
  const t = useTranslations('About')

  return (
    <AnimatedText
      text={t('title')}
      className="mb-16 !text-8xl !leading-tight xl:text-6xl lg:!text-7xl sm:mb-8
      sm:!text-6xl xs:!text-4xl"
    />
  )
}
