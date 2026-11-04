import type { SkillGroup } from "@/shared/lib/sanity/types";

/** Shape returned by `SKILL_GROUPS_QUERY`. */
export type SkillGroupItem = Pick<
  SkillGroup,
  "_id" | "category" | "techStack" | "icon" | "colorSchema"
>;
