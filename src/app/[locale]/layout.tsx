import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Montserrat } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinicius | Front-end Developer',
  description:
    "I'm a front-end developer passionate about the creation process.",
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

interface RootLayoutProps {
  children: ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children, params } = props
  const { locale } = params

  let messages

  // Show a 404 error if the unable to load messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen w-full bg-light dark:bg-dark">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
