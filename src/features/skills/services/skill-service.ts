import "server-only";

import { defineQuery } from "next-sanity";
import type { SkillGroupItem } from "@/features/skills/types/skill-types";
import { sanityFetch } from "@/shared/lib/sanity/fetch";

export const SKILL_GROUPS_QUERY = defineQuery(
  `*[_type == "skillGroup"] | order(order asc) {_id, category, techStack, icon, colorSchema}`,
);

/** Skill groups ordered by the `order` field set in the Studio. */
export function getSkillGroups() {
  return sanityFetch<SkillGroupItem[]>({
    query: SKILL_GROUPS_QUERY,
    tags: ["skillGroup"],
  });
}
