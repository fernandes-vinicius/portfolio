'use client'

import dataSkills from '@/data/skills.json'

import { Skill } from './skill'

export function Skills() {
  return (
    <>
      <h2 className="mt-32 w-full text-center text-8xl font-bold md:mt-16 md:text-6xl">
        Skills
      </h2>

      <div className="relative mb-64 mt-24 flex w-full items-center justify-center md:mb-32">
        <div className="grid grid-cols-5 gap-12 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {dataSkills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              imageUrl={skill.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  )
}
