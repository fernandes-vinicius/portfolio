import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

export function useThemeSwitcher() {
  const preferDarkQuery = '(prefer-color-scheme; dark)'
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme') as ThemeMode

    function handleChange() {
      if (userPref) {
        const check: ThemeMode = userPref === 'dark' ? 'dark' : 'light'
        setMode(check)

        if (check === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
      } else {
        const check: ThemeMode = mediaQuery.matches ? 'dark' : 'light'
        setMode(check)

        if (check === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
      }
    }

    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }

    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return { mode, setMode }
}
