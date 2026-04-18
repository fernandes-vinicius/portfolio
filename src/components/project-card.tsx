"use client";

import {
  CodeIcon,
  ExternalLinkIcon,
  FlameIcon,
  TrendingUpIcon,
} from "@/components/icons";
import { TechTag } from "@/components/tech-tag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import type { Project } from "@/lib/sanity/types";

type ProjectCardProps = {
  project: Project;
  delay: number;
};

export function ProjectCard({ project, delay }: ProjectCardProps) {
  const { ref: wrapRef } = useInViewOnce<HTMLDivElement>({
    threshold: 0.06,
    rootMargin: "-40px 0px",
  });

  return (
    <Card
      ref={wrapRef}
      className="group reveal transition-all duration-300 hover:shadow-lg hover:ring-primary/10 hover:dark:ring-primary-foreground/20"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Colored top line */}
      <div className="absolute top-0 left-0 h-px w-full bg-primary/70" />

      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <h3 className="font-bold">{project.name}</h3>
          {project.featured && <Badge variant="tertiary">Featured</Badge>}
        </CardTitle>

        <CardDescription>
          <p>{project.tagline}</p>
        </CardDescription>

        <CardAction className="flex translate-y-1 items-center gap-1.5 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <Button asChild size="icon-sm" variant="ghost" aria-label="View code">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.repositoryUrl}
            >
              <CodeIcon />
            </a>
          </Button>
          <Button asChild size="icon-sm" variant="ghost" aria-label="Live demo">
            <a target="_blank" rel="noopener noreferrer" href={project.liveUrl}>
              <ExternalLinkIcon />
            </a>
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        {/* Description */}
        <p className="mb-5 flex-1 text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mb-5 flex gap-6">
          {project.metrics?.map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <FlameIcon size={12} className="text-primary" />
              <div>
                <p className="font-bold text-foreground text-sm leading-none tracking-tight">
                  {value}
                </p>
                <p className="mt-0.5 text-muted-foreground text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.map((t) => (
              <TechTag key={t._key}>{t.title}</TechTag>
            ))}
          </div>
          <Button asChild size="xs" variant="link">
            <a target="_blank" rel="noopener noreferrer" href={project.liveUrl}>
              View <ExternalLinkIcon />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
