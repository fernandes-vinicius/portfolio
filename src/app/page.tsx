import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../../public/images/developer-pic-1.png'
import lightBulb from '../../public/images/miscellaneous_icons_1.svg'
import { AnimatedText } from './AnimatedText'
import { HireMe } from './HireMe'
import { LinkArrow } from './Icons'

export default function Home() {
  return (
    <main
      className="flex items-center text-dark w-full min-h-screen
      dark:text-light"
    >
      <div className="w-full h-full inline-block z-0 p-32 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="Vinícius" className="w-full h-auto" />
          </div>

          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />

            <p className="py-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>

            <div className="flex items-center self-start mt-2">
              <Link
                download
                href="/dummy.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light
                hover:text-dark border-2 border-solid border-transparent
                hover:border-dark dark:bg-light dark:text-dark
                hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light"
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>

              <Link
                href="mailto:viniciusfernandes6991@gmail.com"
                target="_blank"
                className="ml-4 text-left font-medium capitalize text-dark
                underline underline-offset-8 dark:text-light"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HireMe />

      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="Light bulb" className="w-full h-auto" />
      </div>
    </main>
  )
}
