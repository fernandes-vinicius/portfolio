import { ReactNode } from 'react'

import { Montserrat } from 'next/font/google'

import { Footer } from '~/shared/components/Footer'
import { Header } from '~/shared/components/Header'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinícius | Frontend Developer',
  description: `
    Desenvolvedor frontend apaixonado por criar interfaces incríveis. Confira
    meu portfólio para ver meus trabalhos mais recentes.
  `,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body className="bg-light dark:bg-dark w-full min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
