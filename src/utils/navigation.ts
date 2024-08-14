import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { LOCALES } from '@/utils/constants'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES })
