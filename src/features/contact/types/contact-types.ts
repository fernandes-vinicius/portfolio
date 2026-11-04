import type { PROFILE_QUERY_RESULT } from "@/shared/lib/sanity/types";

/** Social links come from the `profile` document (`PROFILE_QUERY`). */
export type ContactSocialLink = NonNullable<
  NonNullable<PROFILE_QUERY_RESULT>["socialLinks"]
>[number];
