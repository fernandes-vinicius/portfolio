'use client'

import React from 'react'

import { motion, useScroll } from 'framer-motion'

import { ExperienceDetails } from './ExperienceDetails'

export function Experience() {
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
        Experiência
      </h2>

      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl absolute left-9 top-0.5 h-full w-[4px]
          origin-top bg-dark dark:bg-primary-dark md:left-[30px] md:w-[2px]
          xs:left-[20px]"
        />

        <ul
          className="ml-4 flex w-full flex-col items-start justify-between
          xs:ml-2"
        >
          <ExperienceDetails
            position="Bolsista"
            company="IFRN - INSTITUTO FEDERAL DO RIO GRANDE DO NORTE"
            companyLink="https://portal.ifrn.edu.br/campus/paudosferros/"
            time="2018 - 2019"
            address="Brasil, Pau dos Ferros - RN"
            work="Fui bolsista do IFRN, onde trabalhei no desenvolvimento de um
            sistema de gestão e monitoramento dos resultados dos Jogos
            Intercampi dos Servidores. Foi meu primeiro contato com tecnologias
            como: React, React Native, entre outras."
          />

          <ExperienceDetails
            position="Desenvolvedor de Software"
            company="EVOCORP"
            companyLink="https://www.evocorp.com.br/"
            time="2019 - Hoje"
            address="Brasil, São Miguel - RN"
            work="Trabalho em uma equipe responsável pelo desenvolvimento de
            soluções tecnológicas para diversos setores do mercado. Incluindo
            soluções de Chatbot, Aplicativos Mobile, Sites e Sistemas Web."
          />
        </ul>
      </div>
    </div>
  )
}
