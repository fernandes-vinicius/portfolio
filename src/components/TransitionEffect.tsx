'use client'

// import { useState } from 'react'

import { motion } from 'framer-motion'

export function TransitionEffect() {
  // const [isExpanded, setIsExpanded] = useState(true)

  // function onComplete() {
  //   setIsExpanded(false)
  // }

  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-50 h-screen w-screen
        bg-primary"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed bottom-0 right-full top-0 z-40 h-screen w-screen
        bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen
        bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>

    // <AnimatePresence mode="wait">
    //   {isExpanded && (
    //     <>
    //       <motion.div
    //         initial={{ x: '0%', width: '0%' }}
    //         animate={{ x: '100%', width: '100%' }}
    //         exit={{ x: ['100%', '0%'], width: ['100%', '0%'] }}
    //         transition={{ duration: 0.7, ease: 'easeInOut' }}
    //         className="fixed bottom-0 right-full top-0 z-50 h-screen w-screen
    //       bg-primary"
    //       />

    //       <motion.div
    //         initial={{ x: '0%', width: '0%' }}
    //         animate={{ x: '100%', width: '100%' }}
    //         exit={{ x: ['100%', '0%'], width: ['100%', '0%'] }}
    //         transition={{ delay: 0.1, duration: 0.7, ease: 'easeInOut' }}
    //         className="fixed bottom-0 right-full top-0 z-40 h-screen w-screen
    //       bg-light"
    //       />

    //       <motion.div
    //         initial={{ x: '0%', width: '0%' }}
    //         animate={{ x: '100%', width: '100%' }}
    //         exit={{ x: ['100%', '0%'], width: ['100%', '0%'] }}
    //         transition={{
    //           delay: 0.2,
    //           duration: 0.7,
    //           ease: 'easeInOut',
    //           onComplete,
    //         }}
    //         className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen
    //       bg-dark"
    //       />
    //     </>
    //   )}
    // </AnimatePresence>
  )
}
