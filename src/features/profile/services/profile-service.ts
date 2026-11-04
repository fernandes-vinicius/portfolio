import "server-only";

import { defineQuery } from "next-sanity";
import type { ProfileData } from "@/features/profile/types/profile-types";
import { sanityFetch } from "@/shared/lib/sanity/fetch";

export const PROFILE_QUERY = defineQuery(
  `*[_type == "profile"][0]{_id, title, firstName, lastName, jobTarget, headline, email, phone, available, socialLinks, metrics, techStack}`,
);

/** The single `profile` document, or `null` if it was not published yet. */
export function getProfile() {
  return sanityFetch<ProfileData | null>({
    query: PROFILE_QUERY,
    tags: ["profile"],
  });
}
