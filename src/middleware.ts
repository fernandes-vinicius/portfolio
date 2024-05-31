import createMiddleware from 'next-intl/middleware'

import { locales } from '@/config/locales'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: locales[0],
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en-US|pt-BR)/:path*'],
}
