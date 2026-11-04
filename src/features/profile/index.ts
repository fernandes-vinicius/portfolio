// Client-safe exports only. Server-only code (services) is imported by its
// direct path: `@/features/profile/services/profile-service`.
export { HeroSection } from "@/features/profile/components/hero-section";
export { StatsSection } from "@/features/profile/components/stats-section";
export { TechMarquee } from "@/features/profile/components/tech-marquee";
export type {
  ProfileData,
  ProfileMetric,
  ProfileTech,
} from "@/features/profile/types/profile-types";
