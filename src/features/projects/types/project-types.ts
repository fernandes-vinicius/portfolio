import type { Project } from "@/shared/lib/sanity/types";

/** Shape returned by `PROJECTS_QUERY`. */
export type ProjectItem = Pick<
  Project,
  | "_id"
  | "name"
  | "tagline"
  | "description"
  | "techStack"
  | "metrics"
  | "featured"
  | "repositoryUrl"
  | "demoUrl"
  | "order"
>;
