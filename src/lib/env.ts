import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SANITY_PROJECT_ID: z.string().min(1),
    SANITY_DATASET: z.string().min(1),
    SANITY_API_VERSION: z.string().min(1),
    GOOGLE_TAG_MANAGER_ID: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
  },
  // skipValidation: process.env.NODE_ENV === 'production',
});
