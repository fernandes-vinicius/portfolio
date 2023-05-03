'use client'

import { motion } from 'framer-motion'

import { Skill } from './Skill'

export function Skills() {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-64 w-full text-center md:text-6xl
        md:mt-32"
      >
        Skills
      </h2>

      <div
        className="w-full h-[100vh] relative bg-circular-light
        dark:bg-circular-dark flex items-center justify-center mb-64 md:mb-32
        rounded-full lg:bg-circular-light-lg lg:dark:bg-circular-dark-lg
        md:bg-circular-light-md md:dark:bg-circular-dark-md
        sm:bg-circular-light-sm sm:dark:bg-circular-dark-sm lg:h-[80vh]
        sm:h-[60vh] xs:h-[50vh]"
      >
        <motion.div
          className="cursor-pointer flex rounded-full font-semibold bg-dark
          text-light p-8 shadow-dark dark:bg-light dark:text-dark lg:p-6
          md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Typescript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="ViteJS" x="15vw" y="-12vw" />
        <Skill name="Web design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Supabase" x="-25vw" y="18vw" />
        <Skill name="Tailwind" x="18vw" y="18vw" />
      </div>
    </>
  )
}
