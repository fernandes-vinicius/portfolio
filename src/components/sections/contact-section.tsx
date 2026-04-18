"use client";

import { ContactChannelCard } from "@/components/contact-channel-card";
import { CTAButton } from "@/components/cta-button";
import { GradientTopEdge } from "@/components/gradient-top-edge";
import {
  ArrowRightIcon,
  MailIcon,
  MessageCircleIcon,
} from "@/components/icons";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDivider,
  SectionTagline,
} from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { getSocialIcon } from "@/lib/get-social-icon";
import type { SocialLink } from "@/lib/sanity/types";

type ContactSectionProps = {
  email?: string;
  phone?: string;
  socialLinks: SocialLink[];
};

export function ContactSection(props: ContactSectionProps) {
  const { email, phone, socialLinks = [] } = props;

  const contentRef = useScrollReveal();

  const channels =
    email && phone
      ? [
          {
            Icon: MailIcon,
            label: "Email",
            href: `mailto:${email}`,
            sub: "Best for project inquiries",
            external: false,
          },
          {
            Icon: MessageCircleIcon,
            label: "WhatsApp",
            href: `https://wa.me/${phone}?text=Hi!%20I%20just%20saw%20your%20website%20and%20would%20like%20to%20talk%20%F0%9F%99%82`,
            sub: "Quick conversations",
            external: true,
          },
        ]
      : [];

  const socials = socialLinks.map(({ platform, label, url }) => ({
    Icon: getSocialIcon(platform),
    label: label ?? platform,
    href: url,
  }));

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <SectionDivider />

      <SectionContainer className="max-w-4xl">
        <SectionContent ref={contentRef}>
          <Card className="relative isolate overflow-hidden p-10 text-center md:p-16">
            <GradientTopEdge />

            {/* Subtle top glow */}
            <div className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-40 w-[400px] bg-[radial-gradient(ellipse,color-mix(in_oklch,var(--primary)_7%,transparent)_0%,transparent_70%)] blur-lg" />

            <CardContent className="relative flex flex-col items-center gap-6 p-0">
              <SectionTagline className="mb-0">Get in touch</SectionTagline>

              {/* Heading */}
              <CardTitle className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] tracking-tighter">
                <h2 id="contact-heading">
                  Let's build something{" "}
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    great
                  </span>
                </h2>
              </CardTitle>

              {/* Subtext */}
              <CardDescription className="max-w-md font-normal text-base leading-[1.8]">
                Whether you have a project in mind, need a frontend architect,
                or just want to connect — I'm always open.
              </CardDescription>

              {/* Channel cards */}
              <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
                {channels.map(({ Icon, label, href, sub, external }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex-1 focus-visible:outline-none"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <ContactChannelCard icon={Icon} label={label} sub={sub} />
                    {external && (
                      <span className="sr-only">, opens in new tab</span>
                    )}
                  </a>
                ))}
              </div>

              {phone && (
                <CTAButton asChild>
                  <a
                    href={channels[1].href}
                    aria-label="Say hello on WhatsApp, opens in new tab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative">Say hello</span>
                    <ArrowRightIcon className="relative transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </CTAButton>
              )}
            </CardContent>
          </Card>

          {/* Socials */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="xl"
                className="duration-150"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={`${label}, opens in new tab`}
                >
                  <Icon aria-hidden="true" focusable="false" />
                  <span className="sr-only sm:not-sr-only" aria-hidden="true">
                    {label}
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
