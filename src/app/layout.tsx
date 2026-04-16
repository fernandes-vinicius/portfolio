import "./globals.css";

import { CursorGlow } from "@/components/cursor-glow";
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
      {/* React 19 hoists these to <head> automatically */}
      <link rel="preconnect" href="https://cdn.sanity.io" />
      <link rel="dns-prefetch" href="https://cdn.sanity.io" />

      <body>
        <ThemeProvider>
          <div className="min-h-svh">
            <CursorGlow />
            <NoiseTexture />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
