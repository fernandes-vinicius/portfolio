import Image from 'next/image'
import Link from 'next/link'

import { AnimatedText } from '@/components/animated-text'
import { Container } from '@/components/container'

import { HeroImage } from './_components/hero-image'
import { ResumeButton } from './_components/resume-button'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center sm:items-start">
      <Container className="flex items-start justify-between md:flex-col">
        <div className="w-1/2 lg:hidden md:inline-block md:w-full sm:mb-4">
          <HeroImage />
        </div>

        <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Transformando ideias em negócios."
            className="!text-left !text-6xl xl:text-5xl lg:!text-center lg:!text-6xl
            md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            Como um desenvolvedor front-end, dedico-me a transformar ideias em
            soluções inovadoras, combinando habilidades técnicas e criatividade.
            Explore meus projetos mais recentes e conheça meu trabalho.
          </p>

          <div className="mt-2 flex items-center self-start lg:self-center">
            <ResumeButton />
            <Link
              href="/projects"
              className="ml-8 text-lg font-medium capitalize underline underline-offset-2 md:text-base"
            >
              Projetos
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-36 right-8 inline-block w-24 md:hidden">
        <Image
          src="/images/light-bulb.svg"
          alt="Light bulb"
          width={38}
          height={65}
          className="relative h-auto w-full"
        />
      </div>
    </main>
  )
}
