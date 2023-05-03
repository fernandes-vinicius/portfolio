'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { MenuButton } from './MenuButton'
import { MobileNavButton } from './MobileNavButton'
import { NavLink } from './NavLink'
import { SocialLinks } from './SocialLinks'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <MenuButton isOpen={isMobileMenuOpen} onClick={handleToggleMobileMenu} />

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-8">
          <NavLink href="/home">Início</NavLink>
          <NavLink href="/about">Sobre mim</NavLink>
          <NavLink href="/projects">Projetos</NavLink>
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-6">
          <SocialLinks />
          <ThemeSwitcher />
        </nav>
      </div>

      {isMobileMenuOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center
          fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center gap-6">
            <MobileNavButton href="/home" onClick={handleToggleMobileMenu}>
              Início
            </MobileNavButton>
            <MobileNavButton href="/about" onClick={handleToggleMobileMenu}>
              Sobre mim
            </MobileNavButton>
            <MobileNavButton href="/projects" onClick={handleToggleMobileMenu}>
              Projetos
            </MobileNavButton>
          </nav>

          <nav
            className="flex items-center justify-center flex-wrap gap-8
            sm:gap-4 mt-8"
          >
            <SocialLinks />
            <ThemeSwitcher />
          </nav>
        </motion.div>
      ) : null}
    </header>
  )
}
