import { Geist_Mono, Inter, Montserrat } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
