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
      className="relative flex items-center justify-between w-full px-32 py-8
      z-10 font-medium dark:text-light lg:px-16 z-1 md:px-12 sm:px-8"
    >
      <div className="hidden lg:block">
        <MenuButton
          isOpen={isMobileMenuOpen}
          onClick={handleToggleMobileMenu}
        />
      </div>

      <div className="flex justify-between items-center w-full lg:hidden">
        <nav className="flex items-center gap-8">
          <NavLink href="/home">Início</NavLink>
          <NavLink href="/about">Sobre mim</NavLink>
          <NavLink href="/projects">Projetos</NavLink>
        </nav>

        <nav
          className="flex items-center justify-center flex-wrap gap-6
          lg:mt-2"
        >
          <SocialMediaLinks />
          <ThemeSwitcher />
        </nav>
      </div>

      {isMobileMenuOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex justify-between
          items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/75 rounded-lg
          z-50 backdrop-blur-md"
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

          <nav className="flex items-center justify-center gap-6 mt-6">
            <SocialMediaLinks />
            <ThemeSwitcher />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
