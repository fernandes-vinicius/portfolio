import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { CursorGlow } from "@/shared/components/effects/cursor-glow";
import { NoiseTexture } from "@/shared/components/effects/noise-texture";
import { Footer } from "@/shared/components/layout/footer";
import { Header } from "@/shared/components/layout/header";
import { StructuredData } from "@/shared/components/structured-data";
import { fontMono, fontSans } from "@/shared/config/fonts";
import { baseMetadata } from "@/shared/config/seo";
import { env } from "@/shared/lib/env";
import { buildSiteJsonLd } from "@/shared/lib/json-ld";
import { cn } from "@/shared/lib/utils";

export const metadata = baseMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <StructuredData data={buildSiteJsonLd()} />
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
