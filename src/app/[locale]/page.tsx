import { useTranslations } from '@/hooks/use-translations'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('title')}</h1>
    </main>
  )
}
