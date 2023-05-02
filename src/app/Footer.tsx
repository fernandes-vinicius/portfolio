import Link from 'next/link'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium
      text-lg dark:text-light dark:border-light"
    >
      <div
        className="w-full h-full z-0 p-32 py-8 flex items-center
        justify-between"
      >
        <span>{year} &copy; All rights Reserved.</span>

        <div className="flex items-center">
          Build with{' '}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by &nbsp;
          <Link href="/" className="underline underline-offset-2">
            Vinícius Fernandes
          </Link>
        </div>

        <Link href="/" target="_blank" className="underline underline-offset-2">
          Say Hello
        </Link>
      </div>
    </footer>
  )
}
