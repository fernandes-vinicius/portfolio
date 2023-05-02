'use client'

import React from 'react'

import { motion, useScroll } from 'framer-motion'

import { Details } from './Details'

export function Experience() {
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
        Experience
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
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for
            Google's search engine, including improving the accuracy and
            relevance of search results and developing new tools for data
            analysis and visualization."
          />
        </ul>
      </div>
    </div>
  )
}
