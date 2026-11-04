import "server-only";

import type { QueryParams } from "next-sanity";
import { client } from "@/shared/lib/sanity/client";

/** Default ISR window (seconds) for Sanity content. */
export const SANITY_REVALIDATE = 60;

type SanityFetchOptions = {
  query: string;
  params?: QueryParams;
  /**
   * Cache tags for on-demand revalidation (`revalidateTag("project")` from a
   * Sanity webhook). Use the document `_type`.
   */
  tags?: string[];
  revalidate?: number | false;
};

/**
 * Single entry point for reading content from Sanity on the server.
 * Every domain service goes through here, so caching rules live in one place.
 */
export function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = SANITY_REVALIDATE,
}: SanityFetchOptions): Promise<T> {
  return client.fetch<T>(query, params, { next: { revalidate, tags } });
}
