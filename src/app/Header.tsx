'use client'

import React from 'react'

import clsx from 'clsx'
import { motion } from 'framer-motion'

import { ButtonThemeSwitcher } from './ButtonThemeSwitcher'
import { Logo } from './Logo'
import { MobileNavLink } from './MobileNavLink'
import { NavLink } from './NavLink'
import { SocialLinks } from './SocialLinks'

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center
      justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={clsx(
            'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm',
            'transition-all duration-300 ease-out',
            [isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'],
          )}
        />
        <span
          className={clsx(
            'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5',
            [isOpen ? 'opacity-0' : 'opacity-100'],
          )}
        />
        <span
          className={clsx('bg-dark dark:bg-light block h-0.5 w-6 rounded-sm', [
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5',
          ])}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-6">
          <SocialLinks />
          <ButtonThemeSwitcher />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center
          fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center gap-4">
            <MobileNavLink href="/" toggle={handleClick}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" toggle={handleClick}>
              About
            </MobileNavLink>
            <MobileNavLink href="/projects" toggle={handleClick}>
              Projects
            </MobileNavLink>
          </nav>

          <nav
            className="flex items-center justify-center flex-wrap gap-6
            sm:gap-3 mt-4"
          >
            <SocialLinks />
            <ButtonThemeSwitcher />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
