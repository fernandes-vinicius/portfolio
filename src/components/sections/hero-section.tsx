import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { CTAButton } from "@/components/cta-button";
import { ArrowRightIcon } from "@/components/icons";
import { OpenToWorkBadge } from "@/components/open-to-work-badge";
import { ScrollCue } from "@/components/scroll-cue";
import {
  Statistic,
  StatisticSub,
  StatisticValue,
} from "@/components/statistic";
import type { Profile } from "@/lib/sanity/types";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <>{children}</>,
  },
  marks: {
    strong: ({ children }) => (
      <span className="text-foreground">{children}</span>
    ),
  },
  hardBreak: () => <br className="hidden sm:block" />,
};

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      data-slot="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background"
    >
      {/* ── Ambient orbs ── */}
      <div className="pointer-events-none absolute top-[-8%] left-[-6%] h-[52vw] max-h-[680px] w-[52vw] max-w-[680px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.11)_0%,rgba(59,130,246,0.03)_50%,transparent_70%)] blur-[52px] motion-safe:animate-orb" />
      <div className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[46vw] max-h-[620px] w-[46vw] max-w-[620px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.09)_0%,rgba(124,58,237,0.02)_50%,transparent_70%)] blur-[56px] [animation-delay:1s] motion-safe:animate-orb-2" />

      {/* ── Dot grid ── */}
      <div className="mask-[radial-gradient(ellipse_75%_65%_at_50%_50%,black_0%,transparent_100%)] pointer-events-none absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,var(--foreground)_12%,transparent)_1px,transparent_1px)] bg-size-[28px_28px] [-webkit-mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,black_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-36 pb-28 text-center">
        {/* ── Available badge ── */}
        {profile.available && <OpenToWorkBadge />}

        {/* ── Heading ── */}
        <div className="mb-5 motion-safe:animate-[hero-slide-up_0.75s_0.11s_cubic-bezier(0.22,1,0.36,1)_both]">
          <h1 className="font-extrabold font-heading text-[clamp(3rem,7.5vw,5.5rem)] leading-[1.04] tracking-tighter">
            {profile.firstName}{" "}
            {/* <span className="bg-brand-gradient bg-clip-text text-transparent"> */}
            <span className="bg-linear-to-br from-blue-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h1>
        </div>

        {/* ── Job target ── */}
        <p className="mb-5 font-normal font-sans text-[clamp(0.875rem,1.6vw,1rem)] text-muted-foreground/75 uppercase tracking-[0.17em] motion-safe:animate-[hero-fade-up_0.75s_0.22s_cubic-bezier(0.22,1,0.36,1)_both]">
          {profile.jobTarget}
        </p>

        {/* ── Headline ── */}
        {profile.headline && (
          <div className="mx-auto mt-0 mb-10 max-w-xl font-normal font-sans text-[clamp(1rem,2vw,1.125rem)] text-muted-foreground leading-[1.8] motion-safe:animate-[hero-fade-up_0.75s_0.33s_cubic-bezier(0.22,1,0.36,1)_both]">
            <PortableText
              value={profile.headline}
              components={portableTextComponents}
            />
          </div>
        )}

        {/* ── CTAs ── */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3 motion-safe:animate-[hero-fade-up_0.75s_0.44s_cubic-bezier(0.22,1,0.36,1)_both]">
          <CTAButton
            asChild
            className="group relative flex gap-2 overflow-hidden"
          >
            <Link href="#projects">
              <span className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <ArrowRightIcon
                size={14}
                className="relative transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </CTAButton>

          <CTAButton asChild variant="outline" className="font-medium">
            <Link href="#contact">Contact me</Link>
          </CTAButton>
        </div>

        {/* Metric strip */}
        {profile.metrics && (
          <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-8 md:w-fit md:grid-cols-4">
            {profile.metrics.map((metric, index) => (
              <Statistic
                key={metric._key}
                className="justify-stretch gap-0.5 p-0 motion-safe:animate-[hero-fade-up_0.75s_var(--delay)_cubic-bezier(0.22,1,0.36,1)_both]"
                style={
                  {
                    "--delay": `${0.55 + index * 0.05}s`,
                  } as React.CSSProperties
                }
              >
                <StatisticValue className="text-xl">
                  <CountUp
                    end={metric.value ?? 0}
                    suffix={metric.suffix ?? ""}
                    duration={0}
                  />
                </StatisticValue>
                <StatisticSub>{metric.label}</StatisticSub>
              </Statistic>
            ))}
          </div>
        )}
      </div>

      <ScrollCue />
    </section>
  );
}
