'use client'

import React from 'react'

import { motion, usePresence } from 'framer-motion'

export function TransitionEffect() {
  const [isPresent, safeToRemove] = usePresence()

  React.useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent])

  console.log('isPresent', isPresent)

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30
        bg-primary"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        key="transition-effect"
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20
        bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        key="transition-effect-2"
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10
        bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
        key="transition-effect-3"
      />
    </>
  )
}
