import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { locales } from '@/config/locales'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
