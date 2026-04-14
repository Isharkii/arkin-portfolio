import type { Metadata } from "next";
import { Halant } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PitchWorx",
  description: "Motion-first presentation design studio.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${halant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
