'use client'

import { useTranslations } from 'next-intl'

import { AnimatedNumbers } from './AnimatedNumbers'

export function Highlights() {
  const t = useTranslations('About.Highlights')

  return (
    <div
      className="col-span-2 flex flex-col items-end justify-between
      xl:col-span-8 xl:flex-row xl:items-center md:order-3"
    >
      <div className="flex flex-col items-end justify-center xl:items-center">
        <span
          className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl
          xs:text-4xl"
        >
          <AnimatedNumbers value={4} /> +
        </span>
        <h2
          className="mb-4 text-xl font-medium capitalize text-dark/75
        dark:text-light/75 xl:text-center md:text-lg sm:text-base
          xs:text-sm"
        >
          {t('experience')}
        </h2>
      </div>
    </div>
  )
}
