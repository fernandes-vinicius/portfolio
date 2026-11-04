import "server-only";

import { defineQuery } from "next-sanity";
import type { ExperienceItem } from "@/features/experience/types/experience-types";
import { sortExperiences } from "@/features/experience/utils/sort-experiences";
import { sanityFetch } from "@/shared/lib/sanity/fetch";

export const EXPERIENCES_QUERY = defineQuery(
  `*[_type == "experience"] | order(order asc) {_id, jobTitle, employer, startDate, endDate, current, description, location, achievements, techStack}`,
);

/** Work experiences, most recent first. */
export async function getExperiences() {
  const experiences = await sanityFetch<ExperienceItem[]>({
    query: EXPERIENCES_QUERY,
    tags: ["experience"],
  });

  return sortExperiences(experiences);
}
