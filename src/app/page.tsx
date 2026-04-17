import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechMarquee } from "@/components/tech-marquee";
import { client } from "@/lib/sanity/client";
import {
  EXPERIENCES_QUERY,
  PROFILE_QUERY,
  PROJECTS_QUERY,
} from "@/lib/sanity/queries";
import type { Experience, Profile, Project } from "@/lib/sanity/types";

const queryOptions = { next: { revalidate: 60 } };

export default async function HomePage() {
  const [profile, experiences, projects] = await Promise.all([
    client.fetch<Profile>(PROFILE_QUERY, {}, queryOptions),
    client.fetch<Experience[]>(EXPERIENCES_QUERY, {}, queryOptions),
    client.fetch<Project[]>(PROJECTS_QUERY, {}, queryOptions),
  ]);

  return (
    <main>
      <HeroSection profile={profile} />
      <TechMarquee techStack={profile.techStack || []} />
      <StatsSection metrics={profile.metrics || []} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
    </main>
  );
}
