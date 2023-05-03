import Link from 'next/link'

const year = new Date().getFullYear()
const whatsAppURL = process.env.NEXT_PUBLIC_WHATS_APP_URL

export function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium
      text-lg dark:text-light dark:border-light sm:text-base"
    >
      <div
        className="flex items-center justify-between z-0 h-full w-full p-32
        bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 py-8
        lg:flex-col lg:py-6 sm:gap-2"
      >
        <span>© {year} Vinícius | Frontend Developer</span>

        <Link
          href={whatsAppURL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Diga olá
        </Link>
      </div>
    </footer>
  )
}
