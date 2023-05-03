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
        className="w-full h-full z-0 p-32 py-8 flex items-center justify-between
        gap-2 lg:flex-col lg:py-6 sm:p-6"
      >
        <span>{year} &copy; Todos os direitos reservados.</span>

        <Link
          href={whatsAppURL}
          target="_blank"
          className="underline underline-offset-2"
        >
          Diga olá
        </Link>
      </div>
    </footer>
  )
}
