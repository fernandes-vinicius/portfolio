import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechMarquee } from "@/components/tech-marquee";
import { client } from "@/lib/sanity/client";
import { PROFILE_QUERY } from "@/lib/sanity/queries";
import type { Profile } from "@/lib/sanity/types";

const queryOptions = { next: { revalidate: 60 } };

export default async function HomePage() {
  const profile = await client.fetch<Profile>(PROFILE_QUERY, {}, queryOptions);

  console.log("profile", profile);

  return (
    <main>
      <HeroSection profile={profile} />
      <TechMarquee techStack={profile.techStack || []} />
      <StatsSection metrics={profile.metrics || []} />
    </main>
  );
}
