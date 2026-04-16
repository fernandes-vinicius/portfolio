import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/sections/hero-section";
import { client } from "@/lib/sanity/client";
import { PROFILE_QUERY } from "@/lib/sanity/queries";
import type { Profile } from "@/lib/sanity/types";

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const profile = await client.fetch<Profile>(PROFILE_QUERY, {}, options);

  return (
    <>
      <Header />
      <HeroSection profile={profile} />
    </>
  );
}
