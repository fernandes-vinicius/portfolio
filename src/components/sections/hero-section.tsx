import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { CTAButton } from "@/components/common/cta-button";
import { ArrowRightIcon } from "@/components/common/icons";
import { OpenToWorkBadge } from "@/components/common/open-to-work-badge";
import { Stat } from "@/components/common/stat";
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

export function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      data-slot="hero-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* ── Ambient orbs ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-8%",
          left: "-6%",
          width: "52vw",
          height: "52vw",
          maxWidth: 680,
          maxHeight: 680,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.11) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)",
          filter: "blur(52px)",
          animation: "orb-1 14s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "46vw",
          height: "46vw",
          maxWidth: 620,
          maxHeight: 620,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.09) 0%, rgba(124,58,237,0.02) 50%, transparent 70%)",
          filter: "blur(56px)",
          animation: "orb-2 16s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-36 pb-28 text-center">
        {/* ── Status badge ── */}
        {profile.available && <OpenToWorkBadge />}

        {/* ── Heading ── */}
        <div
          className="mb-5"
          style={{
            animation:
              "hero-slide-up 0.75s 0.11s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <h1 className="-tracking-[0.04em] font-extrabold font-heading text-[clamp(3rem,7.5vw,5.5rem)] leading-[1.04]">
            {profile.firstName}{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 60%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {profile.lastName}
            </span>
          </h1>
        </div>

        {/* ── Job target ── */}
        <p
          className="mb-5 font-normal font-sans text-[clamp(0.875rem,1.6vw,1rem)] text-muted-foreground uppercase tracking-[0.17em] opacity-75!"
          style={{
            animation:
              "hero-fade-up 0.75s 0.22s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          {profile.jobTarget}
        </p>

        {/* ── Headline ── */}
        {profile.headline && (
          <p
            className="mx-auto mt-0 mb-10 max-w-xl font-normal font-sans text-[clamp(1rem,2vw,1.125rem)] text-muted-foreground leading-[1.8]"
            style={{
              animation:
                "hero-fade-up 0.75s 0.33s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            <PortableText
              value={profile.headline}
              components={portableTextComponents}
            />
          </p>
        )}

        {/* ── CTAs ── */}
        <div
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
          style={{
            animation:
              "hero-fade-up 0.75s 0.44s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <CTAButton asChild size="xl" className="group flex gap-2">
            <Link href="#projects">
              <span className="relative">View Projects</span>
              <ArrowRightIcon
                size={14}
                className="relative transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </CTAButton>

          <CTAButton
            asChild
            size="xl"
            variant="outline"
            className="font-medium"
          >
            <Link href="#contact">Contact me</Link>
          </CTAButton>
        </div>

        {/* Metric strip */}
        {profile.metrics && (
          <div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            style={{
              animation:
                "hero-fade-up 0.75s 0.55s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {profile.metrics.map((metric) => (
              <Stat key={metric._key} metric={metric} />
            ))}
          </div>
        )}
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          animation: `hero-fade-up 0.8s 0.66s cubic-bezier(0.22,1,0.36,1) both`,
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, transparent, var(--primary) 50%, transparent)",
            animation: "scroll-pulse 2s ease-in-out infinite",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
