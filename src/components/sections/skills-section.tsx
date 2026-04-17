"use client";

import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTagline,
  SectionTitle,
} from "@/components/section";
import { SkillCard } from "@/components/skill-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { SkillGroup } from "@/lib/sanity/types";

// const skillGroups = [
//   {
//     Icon: Layers,
//     category: "Frontend",
//     skills: ["React", "Next.js", "TypeScript", "JavaScript ES2024+", "HTML5"],
//     iconColor: "#3b82f6",
//     iconBg: "#eff6ff",
//     tagBg: "#eff6ff",
//     tagBorder: "#bfdbfe",
//     tagText: "#1d4ed8",
//   },
//   {
//     Icon: Paintbrush,
//     category: "Styling",
//     skills: [
//       "Tailwind CSS",
//       "CSS3",
//       "CSS Modules",
//       "Styled Components",
//       "Animations",
//     ],
//     iconColor: "#8b5cf6",
//     iconBg: "#f5f3ff",
//     tagBg: "#f5f3ff",
//     tagBorder: "#ddd6fe",
//     tagText: "#6d28d9",
//   },
//   {
//     Icon: Cpu,
//     category: "Architecture",
//     skills: [
//       "Design Systems",
//       "Component Libraries",
//       "SSR / SSG",
//       "Micro-frontends",
//       "Monorepos",
//     ],
//     iconColor: "#10b981",
//     iconBg: "#ecfdf5",
//     tagBg: "#ecfdf5",
//     tagBorder: "#a7f3d0",
//     tagText: "#065f46",
//   },
//   {
//     Icon: Zap,
//     category: "Performance",
//     skills: [
//       "Core Web Vitals",
//       "Lazy Loading",
//       "Code Splitting",
//       "Bundle Optimization",
//       "Caching",
//     ],
//     iconColor: "#f59e0b",
//     iconBg: "#fffbeb",
//     tagBg: "#fffbeb",
//     tagBorder: "#fde68a",
//     tagText: "#92400e",
//   },
//   {
//     Icon: Globe,
//     category: "APIs & Data",
//     skills: ["REST APIs", "GraphQL", "React Query", "SWR", "WebSockets"],
//     iconColor: "#ef4444",
//     iconBg: "#fef2f2",
//     tagBg: "#fef2f2",
//     tagBorder: "#fecaca",
//     tagText: "#991b1b",
//   },
//   {
//     Icon: Wrench,
//     category: "Tooling & More",
//     skills: ["Docker", "Git", "CI/CD", "Vitest", "SEO", "WCAG Accessibility"],
//     iconColor: "#6b7280",
//     iconBg: "#f9fafb",
//     tagBg: "#f9fafb",
//     tagBorder: "#e5e7eb",
//     tagText: "#374151",
//   },
// ];

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const headerRef = useScrollReveal();

  return (
    <Section id="skills">
      <div className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.06)_30%,rgba(0,0,0,0.06)_70%,transparent_100%)]" />

      <SectionContainer>
        <SectionHeader ref={headerRef}>
          <SectionTagline>Skills</SectionTagline>
          <SectionTitle>Tech stack</SectionTitle>
          <SectionDescription>
            The tools I reach for to build fast, accessible, and maintainable
            applications.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group._id} skillGroup={group} delay={i * 0.07} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
