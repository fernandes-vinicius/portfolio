import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon } from '~/shared/components/Icons'

interface FeaturedProjectProps {
  type: string
  title: string
  summary: string
  img: string | any
  link: string
  github: string
}

export function FeaturedProject(props: FeaturedProjectProps) {
  const { type, title, summary, img, link, github } = props

  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
      relative dark:bg-dark dark:border-light lg:flex-col lg:p-8
      xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
        rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2
        sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full
        border border-solid border-dark dark:border-light"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6
        lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary font-medium text-xl
          dark:text-primary-dark xs:text-base"
        >
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold
            dark:text-light sm:text-sm"
          >
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10"
          >
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg
            font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  )
}
