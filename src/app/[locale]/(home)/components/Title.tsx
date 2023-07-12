'use client'

import { useTranslations } from 'next-intl'

import { AnimatedText } from '~/components/AnimatedText'

export function Title() {
  const t = useTranslations('Home')

  return (
    <AnimatedText
      text={t('title')}
      className="!text-left !text-6xl xl:text-5xl lg:!text-center lg:!text-6xl
      md:!text-5xl sm:!text-3xl"
    />
  )
}
