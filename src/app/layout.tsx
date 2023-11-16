import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/contexts/theme'
import { fontSans } from '@/lib/fonts'
import { SEOConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: SEOConfig.name,
  description: SEOConfig.description,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
