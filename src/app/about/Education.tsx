'use client'

import React from 'react'

import { motion, useScroll } from 'framer-motion'

import { DetailsEducation } from './DetailsEducation'

export function Education() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl
        xs:text-4xl md:mb-16"
      >
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark
          origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul
          className="w-full flex flex-col items-start justify-between ml-4
          xs:ml-2"
        >
          <DetailsEducation
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms,
            Computer Systems Engineering, and Artificial Intelligence."
          />

          <DetailsEducation
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms,
            Computer Systems Engineering, and Artificial Intelligence."
          />

          <DetailsEducation
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms,
            Computer Systems Engineering, and Artificial Intelligence."
          />

          <DetailsEducation
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms,
            Computer Systems Engineering, and Artificial Intelligence."
          />

          <DetailsEducation
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms,
            Computer Systems Engineering, and Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  )
}
