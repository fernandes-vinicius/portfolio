import Link from 'next/link'

import { ArrowDownRightSquare } from 'lucide-react'

export function ResumeButton() {
  return (
    <Link
      download
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border-2 border-solid
      bg-foreground p-2.5 px-6 text-lg font-semibold capitalize text-background
      hover:bg-transparent hover:text-foreground md:p-2 md:px-4 md:text-base"
    >
      Resumo <ArrowDownRightSquare className="h-5 w-5" />
    </Link>
  )
}
