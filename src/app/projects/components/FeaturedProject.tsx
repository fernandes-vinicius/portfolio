import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon } from '~/app/Icons'

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
      relative dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
        rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span
          className="text-primary font-medium text-xl
          dark:text-primaryDark"
        >
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg
            font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}
