import type { Experience } from "@/shared/lib/sanity/types";

/** Shape returned by `EXPERIENCES_QUERY`. */
export type ExperienceItem = Pick<
  Experience,
  | "_id"
  | "jobTitle"
  | "employer"
  | "startDate"
  | "endDate"
  | "current"
  | "description"
  | "location"
  | "achievements"
  | "techStack"
>;
