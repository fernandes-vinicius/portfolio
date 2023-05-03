import { AnimatedText } from '~/shared/components/AnimatedText'
import { Layout } from '~/shared/components/Layout'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import projectCoffeeDelivery from '../../../public/images/projects/coffee-delivery.png'
import projectIgniteShop from '../../../public/images/projects/ignite-shop.png'
import projectThatMovie from '../../../public/images/projects/that-movie.png'
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
        className="w-full mb-16 flex flex-col items-center justify-center
        dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="A imaginação supera o conhecimento!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
            md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="That Movie"
                summary="That Movie is a web application that allows you to
                search for movies and series, and see their details. It was
                developed using React, TypeScript, Tailwind CSS, and The Movie
                Database API."
                link="https://that-movie.vercel.app/"
                type="Projeto em destaque"
                github="https://github.com/fernandes-vinicius/that-movie"
                img={projectThatMovie}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Coffee Delivery"
                link="https://coffee-delivery-react-one.vercel.app/"
                type="Web application"
                github="https://github.com/fernandes-vinicius/coffee-delivery-react"
                img={projectCoffeeDelivery}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ignite Shop"
                link="https://coffee-delivery-react-one.vercel.app/"
                type="Web application"
                github="https://github.com/fernandes-vinicius/ignite-shop-2.0"
                img={projectIgniteShop}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
