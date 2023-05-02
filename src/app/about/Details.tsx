'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { LiIcon } from './LiIcon'

interface DetailsProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

export function Details(props: DetailsProps) {
  const ref = React.useRef(null)

  const { position, company, companyLink, time, address, work } = props

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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>

        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  )
}
