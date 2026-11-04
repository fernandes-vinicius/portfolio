import type { Differential } from "@/shared/lib/sanity/types";

/** Shape returned by `DIFFERENTIALS_QUERY`. */
export type DifferentialItem = Pick<
  Differential,
  "_id" | "title" | "description" | "metric" | "icon"
>;
