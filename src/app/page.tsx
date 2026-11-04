import { notFound } from "next/navigation";
import { ContactSection } from "@/features/contact";
import { DifferentialsSection } from "@/features/differentials";
import { getDifferentials } from "@/features/differentials/services/differential-service";
import { ExperienceSection } from "@/features/experience";
import { getExperiences } from "@/features/experience/services/experience-service";
import { HeroSection, StatsSection, TechMarquee } from "@/features/profile";
import { getProfile } from "@/features/profile/services/profile-service";
import { ProjectsSection } from "@/features/projects";
import { getProjects } from "@/features/projects/services/project-service";
import { SkillsSection } from "@/features/skills";
import { getSkillGroups } from "@/features/skills/services/skill-service";

export default async function HomePage() {
  const [profile, experiences, projects, skillGroups, differentials] =
    await Promise.all([
      getProfile(),
      getExperiences(),
      getProjects(),
      getSkillGroups(),
      getDifferentials(),
    ]);

  if (!profile) notFound();

  return (
    <main>
      <HeroSection profile={profile} />
      <TechMarquee techStack={profile.techStack ?? []} />
      <StatsSection metrics={profile.metrics ?? []} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <SkillsSection skillGroups={skillGroups} />
      <DifferentialsSection differentials={differentials} />
      <ContactSection
        email={profile.email}
        phone={profile.phone}
        socialLinks={profile.socialLinks ?? []}
      />
    </main>
  );
}
