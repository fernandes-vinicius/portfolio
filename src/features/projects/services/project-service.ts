import "server-only";

import { defineQuery } from "next-sanity";
import type { ProjectItem } from "@/features/projects/types/project-types";
import { sanityFetch } from "@/shared/lib/sanity/fetch";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(order asc) {_id, name, tagline, description, thumbnail, techStack, metrics, featured, repositoryUrl, demoUrl, order}`,
);

/** Projects ordered by the `order` field set in the Studio. */
export function getProjects() {
  return sanityFetch<ProjectItem[]>({
    query: PROJECTS_QUERY,
    tags: ["project"],
  });
}
