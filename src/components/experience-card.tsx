"use client";

import { ArrowUpRightIcon, CalendarIcon, MapPinIcon } from "@/components/icons";
import { TechTag } from "@/components/tech-tag";
import { Badge } from "@/components/ui/badge";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatRange } from "@/lib/dayjs";
import type { Experience } from "@/lib/sanity/types";
import { RevealCard } from "./reveal-card";

type ExperienceCardProps = {
  experience: Experience;
  delay: number;
};

export function ExperienceCard({ experience, delay }: ExperienceCardProps) {
  return (
    <RevealCard threshold={0.08} rootMargin="-60px 0px" delay={delay}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <h3 className="font-bold">{experience.employer}</h3>
          {experience.current && <Badge variant="tertiary">Now</Badge>}
        </CardTitle>
        <CardDescription>
          <p>{experience.jobTitle}</p>
        </CardDescription>
        <CardAction className="flex gap-3 sm:flex-col sm:items-end">
          {experience.startDate && (
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs opacity-75">
              <CalendarIcon size={11} />
              {formatRange(
                experience.startDate,
                experience.current ? undefined : experience.endDate,
              )}
            </div>
          )}
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs opacity-75">
            <MapPinIcon size={11} />
            {experience.location || "Remote"}
          </div>
        </CardAction>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <p className="mb-5 font-normal text-muted-foreground text-sm leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="mb-6 space-y-3">
          {experience.achievements?.map((item, i) => (
            <li
              key={`achievement-${item}-${String(i)}`}
              className="flex items-start gap-3 text-sm"
            >
              <ArrowUpRightIcon
                size={13}
                className="mt-0.5 shrink-0 text-primary"
              />
              <span className="font-normal text-foreground text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        {experience.techStack && experience.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t pt-5">
            {experience.techStack.map((t) => (
              <TechTag key={t._key}>{t.title}</TechTag>
            ))}
          </div>
        )}
      </CardContent>
    </RevealCard>
  );
}
