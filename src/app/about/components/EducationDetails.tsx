'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { LiIcon } from './LiIcon'

interface EducationDetailsProps {
  type: string
  time: string
  place: string
  info: string
}

export function EducationDetails(props: EducationDetailsProps) {
  const ref = React.useRef(null)

  const { type, time, place, info } = props

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
          {type}
        </h3>

        <span className="font-medium text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>

        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  )
}
