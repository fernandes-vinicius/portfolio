import Image from 'next/image'

import { Container } from '~/components/Container'
import { TransitionEffect } from '~/components/TransitionEffect'

import { Biography } from './components/Biography'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Highlights } from './components/Highlights'
import { Skills } from './components/Skills'
import { Title } from './components/Title'

export default function About() {
  return (
    <>
      <TransitionEffect />

      <main
        className="flex w-full flex-col items-center justify-center
        dark:text-light"
      >
        <Container className="!pt-16">
          <Title />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <Biography />

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
                src="/images/me.jpg"
                alt="Me"
                width={1920}
                height={2345}
                priority
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <Highlights />
          </div>

          <Skills />
          <Experience />
          <Education />
        </Container>
      </main>
    </>
  )
}
