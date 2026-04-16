import { TechMarquee } from "@/components/common/tech-marquee";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { client } from "@/lib/sanity/client";
import { PROFILE_QUERY } from "@/lib/sanity/queries";
import type { Profile } from "@/lib/sanity/types";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const profile = await client.fetch<Profile>(PROFILE_QUERY, {}, options);

  return (
    <main>
      <HeroSection profile={profile} />
      <TechMarquee techStack={profile.techStack || []} />
      <StatsSection />
    </main>
  );
}
