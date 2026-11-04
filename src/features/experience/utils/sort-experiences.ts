import type { ExperienceItem } from "@/features/experience/types/experience-types";

/**
 * Most recent first, by end date. An experience without `endDate` is treated
 * as ongoing (ends "now"). Returns a new array — never mutates the input.
 */
export function sortExperiences(
  experiences: ExperienceItem[],
  now: Date = new Date(),
): ExperienceItem[] {
  const endTime = (exp: ExperienceItem) =>
    exp.endDate ? new Date(exp.endDate).getTime() : now.getTime();

  return experiences.toSorted((a, b) => endTime(b) - endTime(a));
}
