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
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl
        xs:text-4xl md:mb-16"
      >
        Educação
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
          <EducationDetails
            type="Graduado em Análise e Desenvolvimento de Sistemas"
            time="2015-2019"
            place="Instituto Federal do Rio Grande do Norte (IFRN)"
            info="Os cursos relevantes incluíram Estruturas e Algoritmos de Dados,
            Engenharia de Sistemas Computacionais e Web Design."
          />

          <EducationDetails
            type="Curso Ignite - Trilha ReactJS"
            time="2022-2023"
            place="Rocketseat"
            info="O Ignite é um programa de aceleração de carreira para devs que
            buscam evoluir na carreira e se destacar no mercado. A trilha de
            ReactJS é focada em desenvolvimento web com ReactJS e NextJS."
          />
        </ul>
      </div>
    </div>
  )
}
