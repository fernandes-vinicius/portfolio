'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { ListIcon } from './list-icon'

interface EducationItemProps {
  place: string
  type: string
  time: string
  details: string
}

export function EducationItem(props: EducationItemProps) {
  const { type, time, place, details } = props

  const ref = React.useRef(null)

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-3/5 flex-col items-start justify-between
      first:mt-0 last:mb-0 md:w-4/5"
    >
      <ListIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {type}
        </h3>

        <span className="mt-0.5 block font-medium text-foreground/75 xs:text-sm">
          {time} | {place}
        </span>

        <p className="mt-2 w-full font-medium md:text-sm">{details}</p>
      </motion.div>
    </li>
  )
}
