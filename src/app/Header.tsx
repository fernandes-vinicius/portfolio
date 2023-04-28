import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { SocialLinks } from './SocialLinks'

export function Header() {
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center
      justify-between"
    >
      <nav className="flex items-center gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
      </nav>

      <SocialLinks />

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
