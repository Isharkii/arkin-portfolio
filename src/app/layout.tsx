import type { Metadata } from "next";
import { Halant } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { GlobalBackground } from "@/components/ui/global-background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arkin Sharma — AI/ML Engineer",
  description: "AI/ML Engineer building scalable backend systems and intelligent pipelines.",
};

/**
 * Runs before React hydrates — reads localStorage and applies data-theme to
 * <html> so the correct theme is set on first paint with zero flicker.
 * Falls back to system preference if no stored value exists.
 */
const themeInitScript = `(function(){try{var s=localStorage.getItem('pitchworx-theme');var t=s==='dark'||s==='light'?s:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No-flicker theme init — must be synchronous and before body renders */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${halant.variable} antialiased`}
      >
        {/* Navbar lives here — outside template.tsx — so it never
            participates in page-to-page slide transitions. */}
        <GlobalBackground />
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
