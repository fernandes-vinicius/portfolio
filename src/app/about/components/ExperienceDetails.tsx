'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { LiIcon } from './LiIcon'

interface ExperienceDetailsProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

export function ExperienceDetails(props: ExperienceDetailsProps) {
  const ref = React.useRef(null)

  const { position, company, companyLink, time, address, work } = props

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between
      first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer noopener"
            className="capitalize text-primary dark:text-primary-dark"
          >
            @{company}
          </a>
        </h3>

        <span className="text-dark/ font-medium dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}
