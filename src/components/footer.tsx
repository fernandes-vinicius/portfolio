export function Footer() {
  return (
    <footer className="relative bg-background px-6 py-8">
      <div className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-linear-to-r from-transparent via-border/75 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-muted-foreground text-xs tracking-tighter">
            vf
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground opacity-75" />
          <span className="text-muted-foreground text-xs opacity-75">
            Vinicius Fernandes · Senior Frontend Engineer
          </span>
        </div>
        <p className="text-muted-foreground text-xs opacity-50">
          Built with React · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
