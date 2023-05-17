import { ReactNode } from 'react'

import { Montserrat } from 'next/font/google'

import { Footer } from '~/shared/components/Footer'
import { Header } from '~/shared/components/Header'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinícius | Desenvolvedor Front-end',
  description: `Sou um desenvolvedor front-end apaixonado pelo processo de criação.`,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body className="h-full min-h-screen w-full bg-light dark:bg-dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
