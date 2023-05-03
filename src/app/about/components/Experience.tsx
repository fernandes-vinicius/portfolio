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
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl
        xs:text-4xl md:mb-16"
      >
        Experiência
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0.5 w-[4px] md:w-[2px] md:left-[30px]
          xs:left-[20px] h-full bg-dark origin-top dark:bg-primaryDark
          dark:shadow-3xl"
        />

        <ul
          className="w-full flex flex-col items-start justify-between ml-4
          xs:ml-2"
        >
          <ExperienceDetails
            position="Frontend Developer"
            company="EVOCORP"
            companyLink="https://www.evocorp.com.br/"
            time="2019-2023"
            address="Brasil, RN"
            work="Trabalho em uma equipe responsável pelo desenvolvimento de
            soluções tecnológicas para diversos setores do mercado, incluindo
            uma plataforma de para facilitar a comunicação entre cliente e
            empresa por meio de atendimento via WhatsApp."
          />

          <ExperienceDetails
            position="Web Developer"
            company="Zaut Benefícios"
            companyLink="https://zautbeneficios.com.br/"
            time="2021-2023"
            address="Brasil, RN"
            work="A Zaut é uma startup vinculada ao grupo EVOCORP cujo objetivo
            é transformar a relação entre empresas e seus colaboradores com
            simplicidade e eficiência. Através de benefícios flexíveis
            oferecemos um caminho pensando nos atuais desafios do mundo do
            trabalho."
          />
        </ul>
      </div>
    </div>
  )
}
