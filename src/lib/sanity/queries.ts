import { defineQuery } from "next-sanity";

export const PROFILE_QUERY = defineQuery(
  `*[_type == "profile"][0]{_id, title, firstName, lastName, jobTarget, headline, available, metrics, techStack}`,
);

// export const EXPERIENCE_QUERY = defineQuery(
//   `*[_type == "experience"] | order(order asc) {_id, role, company, startDate, endDate, current, description, order}`,
// );
