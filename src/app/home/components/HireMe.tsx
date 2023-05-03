import Link from 'next/link'

import { CircularText } from '~/shared/components/Icons'

export function HireMe() {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center
      overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto
      md:absolute sm:right-0"
    >
      <div
        className="w-48 h-auto flex items-center justify-center relative
        md:w-24"
      >
        <CircularText
          className="fill-dark animate-spin-slow
          dark:fill-light"
        />

        <Link
          href="mailto:viniciusfernandes6991@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
          border border-solid border-dark w-20 h-20 rounded-full font-semibold
          hover:bg-light hover:text-dark dark:bg-light dark:text-dark
          hover:dark:bg-dark hover:dark:text-light
          hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const whatsAppURL = process.env.NEXT_PUBLIC_WHATS_APP_URL

// const MotionLink = motion(Link)

// export function HireMe() {
//   return (
//     <div
//       className="fixed left-4 bottom-4 flex items-center justify-center
//       overflow-hidden md:right-8 md:left-auto md:top-3 md:bottom-auto
//       md:absolute sm:right-8"
//     >
//       <MotionLink
//         href={whatsAppURL}
//         target="_blank"
//         className="flex items-center justify-center bg-dark text-light
//           shadow-md z-10 border border-solid border-dark p-6 h-14 rounded-full
//           font-semibold md:text-[10px] md:p-4 md:h-12"
//         whileHover={{
//           backgroundColor: [
//             '#121212',
//             'rgba(131, 58, 180, 1)',
//             'rgba(253, 29, 29, 1)',
//             'rgba(252, 176, 69, 1)',
//             'rgba(131, 58, 180, 1)',
//             '#121212',
//           ],
//           transition: {
//             duration: 1,
//             repeat: Infinity,
//           },
//         }}
//       >
//         Contrate-me
//       </MotionLink>
//     </div>
//   )
// }
