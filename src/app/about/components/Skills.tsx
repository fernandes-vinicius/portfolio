'use client'

import { Skill } from './Skill'

export function Skills() {
  return (
    <>
      <h2
        className="mt-32 w-full text-center text-8xl font-bold md:mt-16
        md:text-6xl"
      >
        Skills
      </h2>

      <div
        className="relative mb-64 mt-32 flex w-full items-center justify-center
        md:mb-32"
      >
        <div
          className="grid grid-cols-5 gap-12 md:grid-cols-4 sm:grid-cols-3
          xs:grid-cols-2"
        >
          <Skill name="HTML5" image="/images/skills/html5.svg" />

          <Skill name="CSS3" image="/images/skills/css3.svg" />

          <Skill name="JavaScript" image="/images/skills/js.svg" />

          <Skill name="TypeScript" image="/images/skills/ts.svg" />

          <Skill name="React | React Native" image="/images/skills/react.svg" />

          <Skill
            name="Next.Js"
            image="/images/skills/next.svg"
            className="rounded-full bg-light p-0.5"
          />

          <Skill name="Tailwind CSS" image="/images/skills/tailwind.svg" />

          <Skill
            name="Styled Components"
            image="/images/skills/styled-components.png"
          />

          <Skill name="Material UI" image="/images/skills/mui.svg" />

          <Skill name="ESLint" image="/images/skills/eslint.svg" />

          <Skill name="React Query" image="/images/skills/react-query.png" />

          <Skill name="Redux" image="/images/skills/redux.svg" />

          <Skill name="Supabase" image="/images/skills/supabase.png" />

          <Skill
            name="Prisma"
            image="/images/skills/prisma.svg"
            className="rounded-full bg-light p-0.5"
          />

          <Skill name="Git | Github" image="/images/skills/git.svg" />
        </div>
      </div>
    </>
  )
}
