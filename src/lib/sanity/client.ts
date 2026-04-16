import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: process.env.SANITY_DATASET ?? "production",
  apiVersion: process.env.SANITY_API_VERSION ?? "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});
