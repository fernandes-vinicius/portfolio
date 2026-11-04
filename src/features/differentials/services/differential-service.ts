import "server-only";

import { defineQuery } from "next-sanity";
import type { DifferentialItem } from "@/features/differentials/types/differential-types";
import { sanityFetch } from "@/shared/lib/sanity/fetch";

export const DIFFERENTIALS_QUERY = defineQuery(
  `*[_type == "differential"] | order(order asc) {_id, title, description, metric, icon}`,
);

/** Differentials ordered by the `order` field set in the Studio. */
export function getDifferentials() {
  return sanityFetch<DifferentialItem[]>({
    query: DIFFERENTIALS_QUERY,
    tags: ["differential"],
  });
}
