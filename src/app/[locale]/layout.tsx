import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface LocaleLayoutProps {
  params: { locale: string }
  hero: React.ReactNode
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { params, hero } = props

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html suppressHydrationWarning lang={params.locale}>
      <body className={cn('dark', fontSans.variable)}>
        <NextIntlClientProvider messages={messages}>
          <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
            <div className="w-full max-w-7xl">{hero}</div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
