import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NoiseTexture } from "@/components/noise-texture";
import { ThemeProvider } from "@/components/theme-provider";
import { fontMono, fontSans } from "@/config/fonts";
import { baseMetadata, siteConfig } from "@/config/seo";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types";

export const metadata = baseMetadata;

export default function RootLayout({ children }: LayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.locale.replace("_", "-"),
        publisher: { "@id": `${siteConfig.url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        sameAs: [
          siteConfig.twitter.startsWith("@")
            ? `https://x.com/${siteConfig.twitter.slice(1)}`
            : `https://x.com/${siteConfig.twitter}`,
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-sans",
      )}
    >
      <GoogleTagManager gtmId={env.GOOGLE_TAG_MANAGER_ID} />

      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <ThemeProvider>
          <div className="min-h-svh">
            <CursorGlow />
            <NoiseTexture />
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
