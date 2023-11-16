'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

interface FeaturedProjectProps {
  title: string
  type: string
  summary: string
  coverImageUrl: string
  codeUrl: string
  demoUrl?: string
}

const MotionImage = motion(Image)

export function FeaturedProject(props: FeaturedProjectProps) {
  const { codeUrl, coverImageUrl, summary, title, type, demoUrl } = props

  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl
      rounded-br-2xl border border-solid bg-background p-12 shadow-2xl
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[103%] w-full
        rounded-[2.5rem] rounded-br-3xl bg-foreground xs:-right-2 xs:h-[102%]
        xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={demoUrl ?? codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <MotionImage
          src={coverImageUrl}
          alt={title}
          priority
          width="1280"
          height="720"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
        />
      </Link>

      <div
        className="flex w-1/2 flex-col items-start justify-between pl-6
        lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-xl font-medium text-primary xs:text-base">
          {type}
        </span>

        <Link
          href={demoUrl ?? codeUrl}
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

        <p className="my-2 rounded-md font-medium sm:text-sm">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/social/github.svg"
              alt="Github"
              width={40}
              height={40}
              className="h-auto"
            />
          </Link>

          <Link
            href={demoUrl ?? codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-foreground p-2 px-6 text-lg font-semibold
            text-background sm:px-4 sm:text-base"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  )
}
