import { createClient } from "next-sanity";
import { env } from "@/lib/env";

export const client = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
  apiVersion: env.SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
});
