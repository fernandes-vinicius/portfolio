'use client'

import React, { useRef } from 'react'

import { motion } from 'framer-motion'

import { ListIcon } from './ListIcon'

interface ExperienceDetailsProps {
  position: string
  company: string
  companyLink: string
  time: string
  work: string
}

export function ExperienceDetails(props: ExperienceDetailsProps) {
  const { position, company, companyLink, time, work } = props

  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between
      first:mt-0 last:mb-0 md:w-[80%]"
    >
      <ListIcon reference={ref} />

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

        <span
          className="mt-0.5 block font-medium text-dark/75 dark:text-light/50
          xs:text-sm"
        >
          {time} | Brazil
        </span>

        <p className="mt-2 w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}
