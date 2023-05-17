import Image from 'next/image'
import Link from 'next/link'

import { AnimatedText } from '~/shared/components/AnimatedText'
import { Container } from '~/shared/components/Container'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import { ResumeLink } from './components/ResumeLink'

const whatsAppLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK

export default function Home() {
  return (
    <>
      <TransitionEffect />

      <main
        className="flex min-h-screen items-center justify-center text-dark
        dark:text-light sm:items-start"
      >
        <Container
          className="flex w-full items-start justify-between
          md:flex-col"
        >
          <div className="w-1/2 lg:hidden md:inline-block md:w-full">
            <Image
              src="/images/me-profile.png"
              alt="Vinícius"
              priority
              sizes="100vh"
              width="580"
              height="580"
              className="h-auto w-full"
            />
          </div>

          <div
            className="flex w-1/2 flex-col items-center self-center lg:w-full
            lg:text-center"
          >
            <AnimatedText
              text="Criando o futuro: Transformando ideias em soluções."
              className="!text-left !text-6xl xl:text-5xl lg:!text-center
              lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />

            <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Sou um desenvolvedor front-end apaixonado pelo processo de
              criação. Meu portfólio é um reflexo do meu compromisso em criar
              soluções elegantes, combinando habilidades técnicas com uma
              abordagem criativa.
            </p>

            <div className="mt-2 flex items-center self-start lg:self-center">
              <ResumeLink />

              <Link
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 text-lg font-medium capitalize text-dark
                underline underline-offset-2 dark:text-light md:text-base"
              >
                Contato
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-8 right-8 inline-block w-24 md:hidden">
          <Image
            src="/images/light-bulb.svg"
            alt="Light bulb"
            loading="lazy"
            width="38"
            height="65"
            className="relative h-auto w-full"
          />
        </div>
      </main>
    </>
  )
}
