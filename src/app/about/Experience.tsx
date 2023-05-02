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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark
          origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
