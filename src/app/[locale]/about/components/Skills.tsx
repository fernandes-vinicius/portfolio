'use client'

import { useTranslations } from 'next-intl'

import { Skill } from './Skill'

export function Skills() {
  const t = useTranslations('About.Skills')

  return (
    <>
      <h2
        className="mt-32 w-full text-center text-8xl font-bold md:mt-16
        md:text-6xl"
      >
        {t('title')}
      </h2>

      <div
        className="relative mb-64 mt-24 flex w-full items-center justify-center
        md:mb-32"
      >
        <div
          className="grid grid-cols-5 gap-12 xl:grid-cols-4 lg:grid-cols-3
          sm:grid-cols-2"
        >
          <Skill name="HTML5" imagePath="/images/skills/html5.svg" />

          <Skill name="CSS3" imagePath="/images/skills/css3.svg" />

          <Skill name="JavaScript" imagePath="/images/skills/js.svg" />

          <Skill name="TypeScript" imagePath="/images/skills/ts.svg" />

          <Skill
            name="React | React Native"
            imagePath="/images/skills/react.svg"
          />

          <Skill
            name="Next.Js"
            imagePath="/images/skills/next.svg"
            className="rounded-full bg-light p-0.5"
          />

          <Skill name="Tailwind CSS" imagePath="/images/skills/tailwind.svg" />

          <Skill name="Material UI" imagePath="/images/skills/mui.svg" />

          <Skill name="ESLint" imagePath="/images/skills/eslint.svg" />

          <Skill
            name="React Query"
            imagePath="/images/skills/react-query.png"
          />

          <Skill name="Redux" imagePath="/images/skills/redux.svg" />

          <Skill name="Supabase" imagePath="/images/skills/supabase.png" />

          <Skill
            name="Prisma"
            imagePath="/images/skills/prisma.svg"
            className="rounded-full bg-light p-0.5"
          />

          <Skill name="Figma" imagePath="/images/skills/figma.png" />

          <Skill name="Git | Github" imagePath="/images/skills/git.svg" />
        </div>
      </div>
    </>
  )
}
