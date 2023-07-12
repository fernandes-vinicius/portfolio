'use client'

import ReactCountryFlag from 'react-country-flag'

import { useLocale } from 'next-intl'
import IntlLink from 'next-intl/link'

import clsx from 'clsx'

export function LocaleSwitcher() {
  const locale = useLocale()

  const _className = 'rounded-full px-2 py-1.5'
  const _activeClassName = 'bg-dark/20 dark:bg-light/20'

  return (
    <div
      className="flex items-center justify-center gap-2 rounded-full border
      border-solid border-dark/20 p-1 leading-none dark:border-light/20"
    >
      <IntlLink href="/" locale="pt">
        <div
          className={clsx(_className, [locale === 'pt' && _activeClassName])}
        >
          <ReactCountryFlag countryCode="BR" />
        </div>
      </IntlLink>

      <IntlLink href="/" locale="en">
        <div
          className={clsx(_className, [locale === 'en' && _activeClassName])}
        >
          <ReactCountryFlag countryCode="US" />
        </div>
      </IntlLink>
    </div>
  )
}
