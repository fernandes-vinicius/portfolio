import { ProjectCover } from "@/features/projects/components/project-cover";
import type { ProjectItem } from "@/features/projects/types/project-types";
import {
  CodeIcon,
  ExternalLinkIcon,
  TrendingUpIcon,
} from "@/shared/components/icons";
import { RevealCard } from "@/shared/components/reveal-card";
import { TechTag } from "@/shared/components/tech-tag";
import { Button } from "@/shared/components/ui/button";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

type ProjectCardProps = {
  project: ProjectItem;
  delay: number;
};

export function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <RevealCard
      threshold={0.06}
      rootMargin="-40px 0px"
      delay={delay}
      className="gap-5 pt-0"
    >
      <ProjectCover project={project} />

      <CardHeader>
        <CardTitle>
          <h3 className="font-bold">{project.name}</h3>
        </CardTitle>

        {project.tagline && (
          <CardDescription>
            <p>{project.tagline}</p>
          </CardDescription>
        )}

        <CardAction className="flex translate-y-1 items-center gap-1.5 opacity-0 transition-all duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
          {project.repositoryUrl && (
            <Button
              asChild
              size="icon-sm"
              variant="ghost"
              aria-label={`${project.name} source code, opens in new tab`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.repositoryUrl}
              >
                <CodeIcon />
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button
              asChild
              size="icon-sm"
              variant="ghost"
              aria-label={`${project.name} live demo, opens in new tab`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demoUrl}
              >
                <ExternalLinkIcon />
              </a>
            </Button>
          )}
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        {/* Description — clamped so cards in a row keep the same rhythm */}
        <p
          className="mb-5 line-clamp-3 flex-1 text-muted-foreground text-sm leading-relaxed"
          title={project.description ?? undefined}
        >
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-5 flex gap-6">
            {project.metrics.map(({ _key, value, label }) => (
              <div key={_key} className="flex items-center gap-2">
                <TrendingUpIcon size={12} className="text-primary" />
                <div>
                  <p className="font-bold text-foreground text-sm leading-none tracking-tight">
                    {value}
                  </p>
                  <p className="mt-0.5 text-muted-foreground text-xs">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.map((t) => (
              <TechTag key={t._key}>{t.title}</TechTag>
            ))}
          </div>
          {project.demoUrl && (
            <Button asChild size="xs" variant="link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demoUrl}
              >
                View <ExternalLinkIcon />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </RevealCard>
  );
}
