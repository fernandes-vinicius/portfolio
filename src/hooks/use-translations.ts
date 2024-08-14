import { useTranslations as useT } from 'next-intl'

export function useTranslations(namespace?: string | undefined) {
  return useT(namespace)
}
