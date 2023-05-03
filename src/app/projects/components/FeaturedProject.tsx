import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon } from '~/shared/components/Icons'

interface FeaturedProjectProps {
  type: string
  title: string
  summary: string
  img: string
  link: string
  github: string
}

// TODO Criar animação de hover na image usando motion scale

export function FeaturedProject(props: FeaturedProjectProps) {
  const { type, title, summary, img, link, github } = props

  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl
      rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl
      dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl
      xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%]
        rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2
        xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          priority
          width="1280"
          height="720"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto"
        />
      </Link>

      <div
        className="flex w-1/2 flex-col items-start justify-between pl-6
        lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-xl font-medium text-primary
          dark:text-primary-dark xs:text-base"
        >
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold lg:text-3xl
            xs:text-2xl"
          >
            {title}
          </h2>
        </Link>

        <p
          className=" my-2 rounded-md font-medium text-dark dark:text-light
          sm:text-sm"
        >
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
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold
            text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  )
}
