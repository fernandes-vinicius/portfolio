import Image from "next/image";
import type { ProjectItem } from "@/features/projects/types/project-types";
import {
  displayHost,
  isExternalUrl,
} from "@/features/projects/utils/project-url";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

type ProjectCoverProps = {
  project: Pick<ProjectItem, "name" | "thumbnail" | "demoUrl" | "featured">;
  className?: string;
};

/**
 * Card cover framed as a browser window (dots + hostname). Shows the
 * `thumbnail` screenshot, or a branded fallback when there is none.
 * The whole cover links to the live demo; it is hidden from the tab order
 * because the card already has an explicit "Live demo" button.
 */
export function ProjectCover({ project, className }: ProjectCoverProps) {
  const { name, thumbnail, demoUrl, featured } = project;

  const content = (
    <>
      {/* Browser chrome */}
      <div
        aria-hidden="true"
        className="flex h-8 items-center gap-3 border-b bg-muted/40 px-3"
      >
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </div>
        {demoUrl && (
          <span className="truncate rounded-md bg-background/60 px-2 py-0.5 font-mono text-[0.625rem] text-muted-foreground">
            {displayHost(demoUrl)}
          </span>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`Screenshot of ${name ?? "project"}`}
            fill
            sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
            unoptimized={isExternalUrl(thumbnail)}
            className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
          />
        ) : (
          <CoverFallback name={name} />
        )}

        {featured && (
          <Badge
            variant="tertiary"
            className="absolute top-3 left-3 shadow-sm backdrop-blur-md"
          >
            Featured
          </Badge>
        )}
      </div>
    </>
  );

  const classes = cn("relative block overflow-hidden border-b", className);

  if (!demoUrl) return <div className={classes}>{content}</div>;

  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-label={`${name} live demo, opens in new tab`}
      className={classes}
    >
      {content}
    </a>
  );
}

function CoverFallback({ name }: { name: string | null }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-15" />
      <div className="mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,black_0%,transparent_100%)] absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,var(--foreground)_14%,transparent)_1px,transparent_1px)] bg-size-[18px_18px]" />
      <span className="relative bg-brand-gradient bg-clip-text px-6 text-center font-extrabold text-3xl text-transparent tracking-tighter">
        {name}
      </span>
    </div>
  );
}
