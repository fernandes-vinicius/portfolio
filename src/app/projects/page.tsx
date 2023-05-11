import { AnimatedText } from '~/shared/components/AnimatedText'
import { Container } from '~/shared/components/Container'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import { FeaturedProject } from './components/FeaturedProject'
import { Project } from './components/Project'

export const metadata = {
  title: 'Projetos | Vinícius Fernandes',
}

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
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8
            sm:!text-6xl xs:!text-4xl xl:text-6xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
            md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Quotify"
                summary="Transforme seu dia com frases inspiradoras e
                motivacionais escolhidas aleatoriamente."
                type="Projeto em destaque"
                img="/images/projects/quotify.png"
                link="https://quotify-two.vercel.app/"
                github="https://github.com/fernandes-vinicius/quotify"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Coffee Delivery"
                type="Web Application"
                img="/images/projects/coffee-delivery.png"
                link="https://coffee-delivery-react-one.vercel.app/"
                github="https://github.com/fernandes-vinicius/coffee-delivery-react"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ignite Shop"
                type="Web Application"
                img="/images/projects/ignite-shop.png"
                link="https://coffee-delivery-react-one.vercel.app/"
                github="https://github.com/fernandes-vinicius/ignite-shop-2.0"
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
