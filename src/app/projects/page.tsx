import { AnimatedText } from '@/components/animated-text'
import { Container } from '@/components/container'
import { TransitionEffect } from '@/components/transition-effect'

import { Projects } from './_components/projects'

export default function ProjectsPage() {
  return (
    <>
      <TransitionEffect />

      <main className="mb-16 flex flex-col items-center justify-center">
        <Container className="!pt-16">
          <AnimatedText
            text="A imaginação supera o conhecimento!"
            className="mb-16 !text-8xl !leading-tight xl:text-6xl lg:!text-7xl
            sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Projects />
        </Container>
      </main>
    </>
  )
}
