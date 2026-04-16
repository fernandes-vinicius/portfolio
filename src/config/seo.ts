import type { Metadata } from "next";

export const siteConfig = {
  name: "Vinicius Fernandes",
  title: "Vinicius Fernandes — Software Engineer",
  description:
    "Software engineer specializing in building modern web applications with a focus on performance, accessibility, and great user experiences.",
  url: "https://viniciusfernandes.dev",
  locale: "en_US",
  twitter: "@viniciusf",
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};
