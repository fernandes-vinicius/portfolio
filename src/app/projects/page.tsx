import { AnimatedText } from '~/shared/components/AnimatedText'
import { Layout } from '~/shared/components/Layout'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import projectCrypto from '../../../public/images/crypto-screener-cover-image.jpg'
import projectQuotify from '../../../public/images/projects/quotify.png'
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
                title="Quotify"
                summary="Transforme seu dia com frases inspiradoras. O Quotify
                é uma aplicação web que consome uma API pública de frases, e
                mostra para os usuários frases aleatórias ou de acordo com a
                categoria escolhida."
                link="https://quotify-two.vercel.app/"
                type="Projeto em destaque"
                github="https://github.com/fernandes-vinicius/quotify"
                img={projectQuotify}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="/"
                img={projectCrypto}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="/"
                img={projectCrypto}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React,
              Tailwind CSS, Context API, React Router and Recharts. It shows
              detail regarding almost all the cryptocurrency. You can easily
              convert the price in your local currency."
                link="/"
                type="Featured Project"
                github="/"
                img={projectCrypto}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="/"
                img={projectCrypto}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github="/"
                img={projectCrypto}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
