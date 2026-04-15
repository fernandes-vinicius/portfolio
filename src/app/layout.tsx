import "./globals.css";

import { ThemeProvider } from "@/components/common/theme-provider";
import { fontHeading, fontMono, fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
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
