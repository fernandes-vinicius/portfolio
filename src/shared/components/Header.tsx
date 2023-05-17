'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { Logo } from './Logo'
import { MenuButton } from './MenuButton'
import { NavLink } from './NavLink'
import { SocialMediaLinks } from './SocialMediaLinks'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className="relative z-10 flex w-full items-center justify-between px-32
      py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8"
    >
      <div className="hidden lg:block">
        <MenuButton
          isOpen={isMobileMenuOpen}
          onClick={handleToggleMobileMenu}
        />
      </div>

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav className="flex items-center gap-8">
          <NavLink href="/home">Início</NavLink>
          <NavLink href="/about">Sobre mim</NavLink>
          <NavLink href="/projects">Projetos</NavLink>
        </nav>

        <nav
          className="flex flex-wrap items-center justify-center gap-6
          lg:mt-2"
        >
          <SocialMediaLinks />
          <ThemeSwitcher />
        </nav>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed left-1/2 top-1/2 z-50 flex min-w-[70vw]
          -translate-x-1/2 -translate-y-1/2 flex-col items-center
          justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md
          dark:bg-light/75 sm:min-w-[90vw]"
        >
          <nav className="flex flex-col items-center justify-center gap-4">
            <NavLink href="/home" onClick={handleToggleMobileMenu}>
              Início
            </NavLink>
            <NavLink href="/about" onClick={handleToggleMobileMenu}>
              Sobre mim
            </NavLink>
            <NavLink href="/projects" onClick={handleToggleMobileMenu}>
              Projetos
            </NavLink>
          </nav>

          <nav className="mt-6 flex items-center justify-center gap-6">
            <SocialMediaLinks />
            <ThemeSwitcher />
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
