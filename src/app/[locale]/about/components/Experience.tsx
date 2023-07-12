'use client'

import { useRef } from 'react'

import { useTranslations } from 'next-intl'

import { motion, useScroll } from 'framer-motion'

import { ExperienceDetails } from './ExperienceDetails'

export function Experience() {
  const t = useTranslations('About.Experience')

  const ref = useRef(null)

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
          origin-top bg-dark dark:bg-primary-dark md:left-[30px] md:w-[2px]
          xs:left-[20px]"
        />

        <ul
          className="ml-4 flex w-full flex-col items-start justify-between
          xs:ml-2"
        >
          <ExperienceDetails
            company="EVOCORP"
            companyLink="https://www.evocorp.com.br/"
            time="2019 - 2023"
            position={t('experiences.1.position')}
            work={t('experiences.1.work')}
          />
        </ul>
      </div>
    </div>
  )
}
