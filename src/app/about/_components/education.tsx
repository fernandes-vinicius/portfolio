'use client'

import React from 'react'

import { motion, useScroll } from 'framer-motion'

import { EducationItem } from './education-item'

export function Education() {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Educação
      </h2>

      <div ref={ref} className="relative mx-auto w-3/4 lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl dark:bg-primary-dark absolute left-9 top-0.5
          h-full w-1 origin-top rounded-full bg-foreground md:left-[30px]
          md:w-[2px] xs:left-5"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <EducationItem
            time="2015-2019"
            place="IFRN - Instituto Federal do Rio Grande do Norte"
            type="Graduado em Análise e Desenvolvimento de Sistemas"
            details="Cursos relevantes incluíram Estruturas e Algoritmos de Dados,
            Engenharia de Sistemas de Computação, Web Design, entre outros."
          />

          <EducationItem
            time="2022-2023"
            place="Rocketseat"
            type="Curso Ignite - Trilha ReactJS"
            details="O Ignite é um programa de aceleração de carreira para
            desenvolvedores que buscam evoluir na carreira e se destacar no
            mercado. a trilha do ReactJS é focada em desenvolvimento web com
            ReactJS e NextJS."
          />
        </ul>
      </div>
    </div>
  )
}
