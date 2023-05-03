import Image from 'next/image'
import Link from 'next/link'

import { AnimatedText } from '~/shared/components/AnimatedText'
import { LinkArrow } from '~/shared/components/Icons'
import { Layout } from '~/shared/components/Layout'
import { TransitionEffect } from '~/shared/components/TransitionEffect'

import profilePic from '../../../public/images/developer-pic-1.png'
import lightBulb from '../../../public/images/light-bulb.svg'
// import { HireMe } from './components/HireMe'

const whatsAppURL = process.env.NEXT_PUBLIC_WHATS_APP_URL

export default function Home() {
  return (
    <>
      <TransitionEffect />

      <main
        className="flex items-center text-dark w-full min-h-screen
        dark:text-light"
      >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Vinícius"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>

            <div
              className="w-1/2 flex flex-col items-center self-center lg:w-full
              lg:text-center"
            >
              <AnimatedText
                text="Criando o futuro: Transformando ideias em soluções
                inovadoras"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center
                lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="py-4 text-base font-medium md:text-sm sm:text-xs">
                Como um desenvolvedor frontend apaixonado por criar interfaces
                web atraentes e responsivas, dedico-me a transformar ideias em
                designs elegantes e intuitivos que oferecem a melhor experiência
                do usuário possível. Explore meu portfólio para ver meus
                projetos mais recentes.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  download
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light
                  hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark
                  hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resumo <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link
                  href={whatsAppURL}
                  target="_blank"
                  className="ml-6 text-left font-medium capitalize text-dark
                  underline underline-offset-8 dark:text-light md:text-base"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* TODO */}
        {/* <HireMe /> */}

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Light bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
