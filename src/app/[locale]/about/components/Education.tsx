'use client'

import { useRef } from 'react'

import { useTranslations } from 'next-intl'

import { motion, useScroll } from 'framer-motion'

import { EducationDetails } from './EducationDetails'

export function Education() {
  const ref = useRef(null)

  const t = useTranslations('About.Education')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2
        className="mb-32 w-full text-center text-8xl font-bold md:mb-16
        md:text-6xl xs:text-4xl"
      >
        {t('title')}
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl absolute left-9 top-0.5 h-full w-[4px]
          origin-top rounded-full bg-dark dark:bg-primary-dark md:left-[30px]
          md:w-[2px] xs:left-[20px]"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <EducationDetails
            time="2015-2019"
            place={t('history.1.place')}
            type={t('history.1.type')}
            details={t('history.1.details')}
          />

          <EducationDetails
            time="2022-2023"
            place={t('history.2.place')}
            type={t('history.2.type')}
            details={t('history.2.details')}
          />
        </ul>
      </div>
    </div>
  )
}
