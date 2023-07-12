import Image from 'next/image'

import { Container } from '~/components/Container'
import { TransitionEffect } from '~/components/TransitionEffect'

import { ContactLink } from './components/ContactLink'
import { HeroImage } from './components/HeroImage'
import { ResumeLink } from './components/ResumeLink'
import { Subtitle } from './components/Subtitle'
import { Title } from './components/Title'

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
            <HeroImage />
          </div>

          <div
            className="flex w-1/2 flex-col items-center self-center lg:w-full
            lg:text-center"
          >
            <Title />
            <Subtitle />

            <div className="mt-2 flex items-center self-start lg:self-center">
              <ResumeLink />
              <ContactLink />
            </div>
          </div>
        </Container>

        <div className="absolute bottom-8 right-8 inline-block w-24 md:hidden">
          <Image
            src="/images/light-bulb.svg"
            alt="Light bulb"
            width={38}
            height={65}
            className="relative h-auto w-full"
          />
        </div>
      </main>
    </>
  )
}
