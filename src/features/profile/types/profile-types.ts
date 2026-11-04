import type { Metric, Profile, TechStack } from "@/shared/lib/sanity/types";

type Keyed<T> = T & { _key: string };

/** Shape returned by `PROFILE_QUERY` (projection of the `profile` document). */
export type ProfileData = Pick<
  Profile,
  | "_id"
  | "title"
  | "firstName"
  | "lastName"
  | "jobTarget"
  | "headline"
  | "email"
  | "phone"
  | "available"
  | "socialLinks"
  | "metrics"
  | "techStack"
>;

export type ProfileMetric = Keyed<Metric>;
export type ProfileTech = Keyed<TechStack>;
