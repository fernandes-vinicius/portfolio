import createMiddleware from 'next-intl/middleware'

import { LOCALES } from '@/utils/constants'

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: LOCALES[0],
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-br|en-us)/:path*'],
}
