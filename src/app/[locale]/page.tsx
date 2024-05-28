import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>{t('title')}</h1>
    </main>
  )
}
