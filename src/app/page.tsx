import { ContactSection } from "@/components/sections/contact-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechMarquee } from "@/components/tech-marquee";
import { client } from "@/lib/sanity/client";
import {
  EXPERIENCES_QUERY,
  PROFILE_QUERY,
  PROJECTS_QUERY,
  SKILL_GROUPS_QUERY,
} from "@/lib/sanity/queries";
import type {
  Experience,
  Profile,
  Project,
  SkillGroup,
} from "@/lib/sanity/types";

const queryOptions = { next: { revalidate: 60 } };

export default async function HomePage() {
  const [profile, experiences, projects, skillGroups] = await Promise.all([
    client.fetch<Profile>(PROFILE_QUERY, {}, queryOptions),
    client.fetch<Experience[]>(EXPERIENCES_QUERY, {}, queryOptions),
    client.fetch<Project[]>(PROJECTS_QUERY, {}, queryOptions),
    client.fetch<SkillGroup[]>(SKILL_GROUPS_QUERY, {}, queryOptions),
  ]);

  return (
    <main>
      <HeroSection profile={profile} />
      <TechMarquee techStack={profile.techStack || []} />
      <StatsSection metrics={profile.metrics || []} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <SkillsSection skillGroups={skillGroups} />
      <DifferentialsSection />
      <ContactSection />
    </main>
  );
}
