'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { Logo } from './logo'
import { MenuButton } from './menu-button'
import { NavLink } from './nav-link'
import { SocialLinks } from './social-links'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen((state) => !state)
  }

  return (
    <header className="relative flex items-center justify-between px-32 py-8 lg:px-16 md:px-12 sm:px-8">
      <div className="hidden lg:block">
        <MenuButton
          isOpen={isMobileMenuOpen}
          onClick={handleToggleMobileMenu}
        />
      </div>

      <nav className="flex items-center justify-between gap-8 lg:hidden">
        <NavLink href="/">Início</NavLink>
        <NavLink href="/about">Sobre</NavLink>
        <NavLink href="/projects">Projetos</NavLink>
      </nav>

      <div className="flex items-center justify-center gap-8 lg:mt-2">
        <div className="lg:hidden">
          <SocialLinks />
        </div>
        <ThemeToggle />
      </div>

      <div className="absolute left-1/2 top-3 -translate-x-1/2">
        <Logo />
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed left-1/2 top-1/2 z-50 flex min-w-[70vw]
          -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between
          rounded-lg bg-foreground/90 py-32 text-background backdrop-blur-md
          dark:bg-foreground/75 sm:min-w-[90vw]"
        >
          <nav className="flex flex-col items-center justify-center gap-4">
            <NavLink href="/" onClick={handleToggleMobileMenu}>
              Início
            </NavLink>
            <NavLink href="/about" onClick={handleToggleMobileMenu}>
              Sobre
            </NavLink>
            <NavLink href="/projects" onClick={handleToggleMobileMenu}>
              Projetos
            </NavLink>
          </nav>

          <div className="mt-6 flex items-center justify-center gap-6">
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </header>
  )
}
