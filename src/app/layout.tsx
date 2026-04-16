import "./globals.css";

import { ThemeProvider } from "@/components/common/theme-provider";
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
