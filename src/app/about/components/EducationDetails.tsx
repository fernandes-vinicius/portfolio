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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
      items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>

        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75
          xs:text-sm"
        >
          {time} | {place}
        </span>

        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  )
}
