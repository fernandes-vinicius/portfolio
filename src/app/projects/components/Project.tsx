import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon } from '~/app/Icons'

interface ProjectProps {
  type: string
  title: string
  img: string | any
  link: string
  github: string
}

export function Project(props: ProjectProps) {
  const { type, title, img, link, github } = props

  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark
      dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
        rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2
        md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl dark:text-primary-dark
          lg:text-lg md:text-base"
        >
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
