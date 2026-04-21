import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NoiseTexture } from "@/components/noise-texture";
import { ThemeProvider } from "@/components/theme-provider";
import { fontMono, fontSans } from "@/config/fonts";
import { baseMetadata } from "@/config/seo";
import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types";

export const metadata = baseMetadata;

export default function RootLayout({ children }: LayoutProps) {
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
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID ?? ""} />

      <body>
        <ThemeProvider>
          <div className="min-h-svh">
            <CursorGlow />
            <NoiseTexture />
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>

        <Script
          src={`https://t.contentsquare.net/uxa/${process.env.HOTJAR_ID ?? ""}.js`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
