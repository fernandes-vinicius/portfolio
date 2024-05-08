'use client'

import { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'

import { ExperienceItem } from './experience-item'

export function Experience() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Experiência
      </h2>

      <div ref={ref} className="relative mx-auto w-3/4 lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl absolute left-9 top-0.5 h-full w-[4px]
          origin-top bg-foreground dark:bg-primary md:left-[30px] md:w-[2px]
          xs:left-[20px]"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <ExperienceItem
            company="EVOCORP"
            companyLink="https://www.evocorp.com.br"
            time="2019 - 2024"
            position="Desenvolvedor Frontend & UI Design"
            work="Atuei em uma equipe responsável pelo desenvolvimento de soluções
            tecnológicas para diversos setores do mercado. Incluindo soluções Chatbot,
            Aplicações Mobile, Websites e Sistemas Web."
          />

          <ExperienceItem
            company="Zaut Pagamentos"
            companyLink="https://zaut.com.br"
            time="2021 - 2023"
            position="Desenvolvedor Frontend & UI Design"
            work="A Zaut é uma startup cujo principal objetivo é otimizar
            a relação entre empresas e seus colaboradores. Participei no Core team,
            desenvolvendo e implementando novos recursos e projetando melhorias
            para o sistema."
          />
        </ul>
      </div>
    </div>
  )
}
