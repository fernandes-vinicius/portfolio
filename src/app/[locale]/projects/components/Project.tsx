'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

interface ProjectProps {
  title: string
  type: string
  coverImagePath: string
  codeUrl: string
  demoUrl?: string
}

const MotionImage = motion(Image)

export function Project(props: ProjectProps) {
  const { type, title, coverImagePath, demoUrl, codeUrl } = props

  const t = useTranslations('Projects.Project')

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center
      rounded-2xl rounded-br-2xl border border-solid border-dark bg-light
      p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[103%] w-[100%]
        rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2
        md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={demoUrl || codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <MotionImage
          whileHover={{ scale: 1.05 }}
          src={coverImagePath}
          alt={title}
          width={1280}
          height={720}
          priority
          className="h-auto w-full"
        />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span
          className="text-xl font-medium text-primary dark:text-primary-dark
          lg:text-lg md:text-base"
        >
          {type}
        </span>

        <Link
          href={demoUrl || codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="flex w-full items-center justify-between">
          <Link
            href={demoUrl || codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded text-lg font-medium underline md:text-base"
          >
            {t('demoLink')}
          </Link>

          <Link
            href={demoUrl || codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 md:w-6"
          >
            <Image
              src="/images/social/github.svg"
              alt="Github"
              width={40}
              height={40}
              className="h-auto"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
