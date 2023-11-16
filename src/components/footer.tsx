import { SEOConfig } from '@/lib/seo'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t-2 border-solid text-lg font-medium sm:text-center sm:text-sm">
      <div
        className="flex h-full w-full items-center justify-between p-32 py-8
        xl:p-24 lg:flex-col lg:p-16 lg:py-6 md:p-12 sm:gap-2 sm:p-8"
      >
        <span>
          <span className="sm:block">© {currentYear}</span> {SEOConfig.name}
        </span>

        <a
          href={SEOConfig.links.whatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Diga Olá
        </a>
      </div>
    </footer>
  )
}
