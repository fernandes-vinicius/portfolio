'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { LiIcon } from './LiIcon'

interface DetailsEducationProps {
  type: string
  time: string
  place: string
  info: string
}

export function DetailsEducation(props: DetailsEducationProps) {
  const ref = React.useRef(null)

  const { type, time, place, info } = props

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
      items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>

        <span
          className="capitalize font-medium text-dark/75
          dark:text-light/75"
        >
          {time} | {place}
        </span>

        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  )
}
