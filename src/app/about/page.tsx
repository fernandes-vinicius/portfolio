import { AnimatedText } from '@/components/animated-text'
import { Container } from '@/components/container'
import { TransitionEffect } from '@/components/transition-effect'

import { Bio } from './_components/bio'
import { Education } from './_components/education'
import { Experience } from './_components/experience'
import { Highlight } from './_components/highlight'
import { ProfilePic } from './_components/profile-pic'
import { Skills } from './_components/skills'

export default function AboutPage() {
  return (
    <>
      <TransitionEffect />

      <main className="flex flex-col items-center justify-center">
        <Container className="!pt-16">
          <AnimatedText
            text="A paixão alimenta o propósito!"
            className="mb-16 !text-8xl !leading-tight xl:text-6xl lg:!text-7xl
            sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <Bio />
            <ProfilePic />

            {/* highlights */}
            <div
              className="col-span-2 flex flex-col items-end gap-32 xl:col-span-8
              xl:flex-row xl:items-center md:order-3 md:justify-between sm:gap-0"
            >
              <Highlight value={4} label="Anos de experiência" />
              <Highlight value={10} label="Projetos desenvolvidos" />
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
