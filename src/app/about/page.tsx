import Image from 'next/image'

import { AnimatedText } from '~/shared/components/AnimatedText'
import { Container } from '~/shared/components/Container'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import { AnimatedNumbers } from './components/AnimatedNumbers'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'

export default function About() {
  return (
    <>
      <TransitionEffect />

      <main
        className="flex w-full flex-col items-center justify-center
        dark:text-light"
      >
        <Container className="!pt-16">
          <AnimatedText
            text="A paixão alimenta o propósito!"
            className="mb-16 !text-8xl !leading-tight xl:text-6xl lg:!text-7xl
            sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start
              xl:col-span-4 md:order-2 md:col-span-8"
            >
              <h2
                className="mb-4 text-lg font-bold uppercase text-dark/75
                dark:text-light/75"
              >
                Biografia
              </h2>

              <p className="font-medium">
                Olá, me chamo Vinícius Fernandes. Sou um desenvolvedor front-end
                apaixonado por criar experiências digitais elegantes, funcionais
                e centradas no usuário.
              </p>

              <p className="my-4 font-medium">
                Me graduei em Análise e Desenvolvimento de Sistemas e desde
                então sou um entusiasta das melhores tecnologias de
                desenvolvimento Web e Mobile do mercado. Com mais de 4 anos de
                experiência na área profissional, estou sempre procurando
                maneiras novas e inovadoras de dar vida as minhas ideias.
              </p>

              <p className="my-4 font-medium">
                Possuo habilidades na área de administração e gestão de
                projetos, planos de negócios, funções administrativas
                (Liderança, Direção, Planejamento e Controle), Gestão de TI.
              </p>

              <p className="my-4 font-medium">
                Experiência com ferramentas de versionamento de projeto (Git,
                GitHub, GitFlow) e técnicas de prototipagem de projetos
                aplicando conceitos de UI/UX com ferramentas como Figma e
                Whimsical.
              </p>

              <p className="my-4 font-medium">
                Acredito que o processo de criação front-end é mais do que
                apenas fazer as coisas parecerem bonitas — é resolver problemas
                e criar experiências intuitivas e agradáveis para os usuários.
              </p>

              <p className="font-medium">
                Estou ansioso pela oportunidade de trazer minhas habilidades
                para o seu próximo projeto.
              </p>
            </div>

            <div
              className="relative col-span-3 h-max rounded-2xl border-2
              border-solid border-dark bg-light p-8 dark:border-light
              dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%]
                rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"
              />
              <Image
                src="/images/me-2.jpg"
                alt="Vinícius"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width="1920"
                height="2345"
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <div
              className="col-span-2 flex flex-col items-end justify-between
              xl:col-span-8 xl:flex-row xl:items-center md:order-3"
            >
              <div
                className="flex flex-col items-end justify-center
                xl:items-center"
              >
                <span
                  className="inline-block text-7xl font-bold md:text-6xl
                  sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={4} /> +
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75
                  dark:text-light/75 xl:text-center md:text-lg sm:text-base
                  xs:text-sm"
                >
                  anos de experiência
                </h2>
              </div>

              {/* <div
                className="flex flex-col items-end justify-center
                xl:items-center"
              >
                <span
                  className="inline-block text-7xl font-bold md:text-6xl
                  sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={4} /> +
                </span>
                <h2
                  className="text-xl font-medium text-dark/75 dark:text-light/75
                  xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  anos de experiência
                </h2>
              </div> */}

              {/* <div
                className="flex flex-col items-end justify-center
                xl:items-center"
              >
                <span
                  className="inline-block text-7xl font-bold md:text-6xl
                  sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={155} /> +
                </span>
                <h2
                  className="text-xl font-medium text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base
                  xs:text-sm"
                >
                  contribuições no GitHub
                </h2>
              </div> */}
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Container>
      </main>
    </>
  )
}
