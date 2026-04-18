import { defineQuery } from "next-sanity";

export const PROFILE_QUERY = defineQuery(
  `*[_type == "profile"][0]{_id, title, firstName, lastName, jobTarget, headline, email, phone, available, socialLinks, metrics, techStack}`,
);

export const DIFFERENTIALS_QUERY = defineQuery(
  `*[_type == "differential"] | order(order asc) {_id, title, description, metric, icon}`,
);

export const EXPERIENCES_QUERY = defineQuery(
  `*[_type == "experience"] | order(order asc) {_id, jobTitle, employer, startDate, endDate, current, description, location, achievements, techStack, order}`,
);

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(order asc) {_id, name, slug, tagline, description, techStack, metrics, featured, repositoryUrl, liveUrl, order}`,
);

export const SKILL_GROUPS_QUERY = defineQuery(
  `*[_type == "skillGroup"] | order(order asc) {_id, category, techStack, order}`,
);
