import { ContactChannelCard } from "@/features/contact/components/contact-channel-card";
import type { ContactSocialLink } from "@/features/contact/types/contact-types";
import { getSocialIcon } from "@/features/contact/utils/get-social-icon";
import { CTAButton } from "@/shared/components/cta-button";
import { GradientTopEdge } from "@/shared/components/effects/gradient-top-edge";
import {
  ArrowRightIcon,
  MailIcon,
  MessageCircleIcon,
} from "@/shared/components/icons";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDivider,
  SectionTagline,
} from "@/shared/components/section";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/shared/components/ui/card";

const WHATSAPP_GREETING =
  "Hi! I just saw your website and would like to talk 🙂";

type ContactSectionProps = {
  email?: string | null;
  phone?: string | null;
  socialLinks: ContactSocialLink[];
};

export function ContactSection(props: ContactSectionProps) {
  const { email, phone, socialLinks } = props;

  // Each channel depends only on its own field, so a missing email never
  // breaks the WhatsApp CTA (and vice versa).
  // wa.me only accepts digits (no "+", spaces or dashes).
  const whatsappNumber = phone?.replace(/\D/g, "");
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_GREETING)}`
    : null;

  const channels = [
    email && {
      Icon: MailIcon,
      label: "Email",
      href: `mailto:${email}`,
      sub: "Best for project inquiries",
      external: false,
    },
    whatsappHref && {
      Icon: MessageCircleIcon,
      label: "WhatsApp",
      href: whatsappHref,
      sub: "Quick conversations",
      external: true,
    },
  ].filter((channel) => !!channel);

  const socials = socialLinks.map(({ platform, label, url }) => ({
    Icon: getSocialIcon(platform),
    label: label ?? platform,
    href: url,
  }));

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <SectionDivider />

      <SectionContainer className="max-w-4xl">
        <SectionContent>
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

              {whatsappHref && (
                <CTAButton asChild>
                  <a
                    href={whatsappHref}
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
