import Image from 'next/image'
import Link from 'next/link'

import { AnimatedText } from '~/shared/components/AnimatedText'
import { Container } from '~/shared/components/Container'
import { LinkArrow } from '~/shared/components/Icons'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import { HireMe } from './components/HireMe'

const whatsAppURL = process.env.NEXT_PUBLIC_WHATS_APP_URL

export default function Home() {
  return (
    <>
      <TransitionEffect />

      <main
        className="flex items-center min-h-screen text-dark dark:text-light
        sm:items-start"
      >
        <Container className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex items-start justify-between w-full md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src="/images/developer-pic-1.png"
                alt="Vinícius"
                priority
                sizes="100vh"
                width="580"
                height="580"
                className="h-auto w-full"
              />
            </div>

            <div
              className="flex w-1/2 flex-col items-center self-center
              lg:w-full lg:text-center"
            >
              <AnimatedText
                text="Criando o futuro: Transformando ideias em soluções."
                className="!text-left !text-6xl lg:!text-center lg:!text-6xl
                md:!text-5xl sm:!text-3xl xl:text-5xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Sou um desenvolvedor frontend apaixonado pelo processo de
                criação. Meu portfólio é um reflexo do meu compromisso em criar
                soluções elegantes e eficientes, combinando habilidades técnicas
                com uma abordagem criativa.
              </p>

              <div className="flex items-center self-start lg:self-center mt-2">
                <Link
                  download
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border-2 border-solid
                  bg-dark p-2.5 px-6 text-lg font-semibold capitalize
                  text-light hover:border-dark hover:bg-transparent
                  hover:text-dark dark:bg-light dark:text-dark
                  dark:hover:border-light dark:hover:bg-dark
                  dark:hover:text-light md:p-2 md:px-4 md:text-base"
                >
                  Resumo <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href={whatsAppURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 text-lg font-medium capitalize text-dark
                  underline underline-offset-2 dark:text-light md:text-base"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Container>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src="/images/light-bulb.svg"
            alt="Light bulb"
            loading="lazy"
            width="38"
            height="65"
            className="relative w-full h-auto"
          />
        </div>
      </main>
    </>
  )
}
