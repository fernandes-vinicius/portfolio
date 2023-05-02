import Image from 'next/image'

import { AnimatedText } from '~/components/AnimatedText'
import { Layout } from '~/components/Layout'
import { TransitionEffect } from '~/components/TransitionEffect'

import profilePic from '../../../public/images/developer-pic-2.jpg'
import { AnimatedNumbers } from './AnimatedNumbers'
import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'

// export const metadata = {
//   title: 'About',
// }

export default function About() {
  return (
    <>
      <TransitionEffect />

      <main
        className="flex w-full flex-col items-center justify-center
        dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="A paixão alimenta o propósito!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
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
                Olá, sou Vinícius Fernandes, um desenvolvedor web apaixonado por
                criar experiências digitais bonitas, funcionais e centradas no
                usuário. Com 4 anos de experiência na área. Estou sempre
                procurando maneiras novas e inovadoras de dar vida às visões de
                meus clientes.
              </p>

              <p className="my-4 font-medium">
                Acredito que o processo de criação frontend é mais do que apenas
                fazer as coisas parecerem bonitas — é resolver problemas e criar
                experiências intuitivas e agradáveis para os usuários.
              </p>

              <p>
                Quer esteja trabalhando em um site, aplicativo móvel ou outro
                produto digital, trago meu compromisso com a excelência em
                design e o pensamento centrado no usuário em todos os projetos
                em que trabalho. Estou ansioso pela oportunidade de trazer
                minhas habilidades e paixão para o seu próximo projeto.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2
              border-solid border-dark bg-light p-8 dark:bg-dark
            dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]
                rounded-[2rem] bg-dark dark:bg-light"
              />
              <Image
                src={profilePic}
                alt="Vinícius"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <AnimatedNumbers value={50} /> +
                </span>
                <h2
                  className="text-xl font-medium text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base
                  xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div
                className="flex flex-col items-end justify-center
                xl:items-center"
              >
                <span
                  className="inline-block text-7xl font-bold md:text-6xl
                  sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={40} /> +
                </span>
                <h2
                  className="text-xl font-medium text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base
                  xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

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
                  className="text-xl font-medium text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base
                  xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}
