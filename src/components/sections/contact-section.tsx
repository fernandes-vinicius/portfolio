"use client";

import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRightIcon, TrendingUpIcon } from "@/components/icons";
import {
  Section,
  SectionContainer,
  SectionContent,
} from "@/components/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CTAButton } from "../cta-button";
import { Button } from "../ui/button";

const socials = [
  { Icon: TrendingUpIcon, label: "GitHub", href: "https://github.com" },
  { Icon: TrendingUpIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: TrendingUpIcon, label: "Twitter / X", href: "https://twitter.com" },
];

const channels = [
  {
    Icon: Mail,
    label: "Email",
    href: "mailto:viniciusfernandes@email.com",
    sub: "Best for project inquiries",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/5511999990000",
    sub: "Quick conversations",
  },
];

export function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="contact">
      {/* Top separator */}
      <div
        className="-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.06) 70%, transparent 100%)",
        }}
      />

      <SectionContainer className="max-w-4xl">
        <SectionContent ref={ref}>
          <Card className="relative overflow-hidden p-10 text-center md:p-16">
            {/* Gradient top edge */}
            <div
              className="absolute top-0 right-0 left-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #3b82f6 30%, #7c3aed 70%, transparent 100%)",
                opacity: 0.5,
              }}
            />

            {/* Subtle top glow */}
            <div
              className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2"
              style={{
                width: 400,
                height: 160,
                background:
                  "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />

            <CardContent className="relative flex flex-col items-center gap-6 p-0!">
              {/* Label */}
              <p
                className="font-semibold text-xs uppercase tracking-widest"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Get in touch
              </p>

              {/* Heading */}
              <CardTitle className="font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] tracking-tighter">
                <h2>
                  Let's build something{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #a855f7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    great
                  </span>
                </h2>
              </CardTitle>

              <CardDescription className="max-w-md font-normal text-base leading-[1.8]">
                {/* Subtext */}
                <p>
                  Whether you have a project in mind, need a frontend architect,
                  or just want to connect — I'm always open.
                </p>
              </CardDescription>

              <CTAButton
                asChild
                className="group relative flex gap-2 overflow-hidden"
              >
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">Say hello</span>
                  <ArrowRightIcon
                    size={14}
                    className="relative transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </CTAButton>
            </CardContent>
          </Card>

          <div className="mt-6 flex items-center justify-center gap-3">
            {/* Socials */}
            {socials.map(({ Icon, label, href }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="xl"
                className="duration-150"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon />
                  {label}
                </a>
              </Button>
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
