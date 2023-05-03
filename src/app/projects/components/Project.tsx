import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon } from '~/shared/components/Icons'

interface ProjectProps {
  type: string
  title: string
  img: string
  link: string
  github: string
}

// TODO Criar animação de hover na image usando motion scale

export function Project(props: ProjectProps) {
  const { type, title, img, link, github } = props

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center
      rounded-2xl rounded-br-2xl border border-solid border-dark bg-light
      p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]
        rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2
        md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          loading="lazy"
          width="1280"
          height="720"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto hover:scale-105"
        />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span
          className="text-xl font-medium text-primary
          dark:text-primary-dark lg:text-lg md:text-base"
        >
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded text-lg font-medium underline md:text-base"
          >
            Visite
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
