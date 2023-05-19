import { AnimatedText } from '~/shared/components/AnimatedText'
import { Container } from '~/shared/components/Container'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import { FeaturedProject } from './components/FeaturedProject'
import { Project } from './components/Project'

export default function Projects() {
  return (
    <>
      <TransitionEffect />

      <main
        className="mb-16 flex w-full flex-col items-center justify-center
        dark:text-light"
      >
        <Container className="pt-16">
          <AnimatedText
            text="A imaginação supera o conhecimento!"
            className="mb-16 !text-8xl !leading-tight xl:text-6xl lg:!text-7xl
            sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
            md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Ignite Call"
                summary="Conecte seu calendário e permita que as pessoas marquem
                agendamentos no seu tempo livre. A aplicação foi construída
                usando Next.js, Tailwind CSS, Prisma, PlanetScale e muito mais."
                type="Projeto em destaque"
                img="/images/projects/ignite-call.png"
                link="https://ignite-call-ashy.vercel.app"
                github="https://github.com/fernandes-vinicius/ignite-call"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Coffee Delivery"
                type="Web Application"
                img="/images/projects/coffee-delivery.png"
                link="https://coffee-delivery-react-one.vercel.app"
                github="https://github.com/fernandes-vinicius/coffee-delivery-react"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="That Movie"
                type="Website"
                img="/images/projects/that-movie.png"
                link="https://that-movie.vercel.app"
                github="https://github.com/fernandes-vinicius/that-movie"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Site do Portfólio React"
                summary="Um site de portfólio profissional usando React JS,
                Framer-motion e Tailwind. Possui transições de página suaves,
                efeitos de fundo interessantes, design exclusivo e é responsivo
                a dispositivos móveis."
                type="Portfolio Website"
                img="/images/projects/portfolio.png"
                link="https://portfolio-viniciusfernandes.vercel.app"
                github="https://github.com/fernandes-vinicius/portfolio"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Quotify"
                type="Website"
                img="/images/projects/quotify.png"
                link="https://quotify-two.vercel.app"
                github="https://github.com/fernandes-vinicius/quotify"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Todo List App"
                type="Web Application"
                img="/images/projects/todo-list.png"
                link="https://todo-list-react-roan.vercel.app"
                github="https://github.com/fernandes-vinicius/todo-list-react"
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
