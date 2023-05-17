'use client'

import React from 'react'

import { motion, useScroll } from 'framer-motion'

import { EducationDetails } from './EducationDetails'

export function Education() {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2
        className="mb-32 w-full text-center text-8xl font-bold md:mb-16
        md:text-6xl xs:text-4xl"
      >
        Educação
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl absolute left-9 top-0.5 h-full w-[4px]
          origin-top rounded-full bg-dark dark:bg-primary-dark md:left-[30px]
          md:w-[2px] xs:left-[20px]"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <EducationDetails
            place="IFRN - INSTITUTO FEDERAL DO RIO GRANDE DO NORTE"
            type="Graduado em Análise e Desenvolvimento de Sistemas"
            time="2015-2020"
            info="Os cursos relevantes incluíram Estruturas e Algoritmos de Dados,
            Engenharia de Sistemas Computacionais, Web Design, entre outros."
          />

          <EducationDetails
            place="Rocketseat"
            type="Curso Ignite - Trilha ReactJS"
            time="2023"
            info="O Ignite é um programa de aceleração de carreira para devs que
            buscam evoluir na carreira e se destacar no mercado. A trilha de
            ReactJS é focada em desenvolvimento web com ReactJS e NextJS."
          />
        </ul>
      </div>
    </div>
  )
}
