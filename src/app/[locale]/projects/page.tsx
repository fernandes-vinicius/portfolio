import { Container } from '~/components/Container'
import { TransitionEffect } from '~/components/TransitionEffect'

import { ProjectsList } from './components/ProjectsList'
import { Title } from './components/Title'

export default function Projects() {
  return (
    <>
      <TransitionEffect />

      <main
        className="mb-16 flex w-full flex-col items-center justify-center
        dark:text-light"
      >
        <Container className="pt-16">
          <Title />
          <ProjectsList />
        </Container>
      </main>
    </>
  )
}
