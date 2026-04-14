"use client";

/**
 * HomeLanding — single-screen shell
 *
 * AuroraBackground provides the animated gradient backdrop which adapts
 * to light (inverted, subtle) and dark (vivid blue/violet) modes.
 * The paper grid, bloom orbs, navbar and HeroStage sit on top.
 */

import { AuroraBackground } from "@/components/ui/aurora-background";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { HeroStage } from "./HeroStage";

export default function HomeLanding() {
  return (
    <AuroraBackground
      showRadialGradient
      className="h-[100dvh] w-screen overflow-hidden !bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Paper grid texture */}
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Warm bloom — top left */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[-12%] h-[clamp(14rem,30vw,32rem)] w-[clamp(14rem,30vw,32rem)] rounded-full bg-[var(--spot-b)] opacity-50 blur-3xl"
      />

      {/* Cool bloom — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-18%] right-[-8%] h-[clamp(12rem,24vw,26rem)] w-[clamp(12rem,24vw,26rem)] rounded-full bg-[var(--spot-a)] opacity-50 blur-3xl"
      />

      {/* Fixed navigation overlay */}
      <SiteNavbar />

      {/* Hero animation — fills full viewport */}
      <div className="absolute inset-0">
        <HeroStage />
      </div>
    </AuroraBackground>
  );
}
