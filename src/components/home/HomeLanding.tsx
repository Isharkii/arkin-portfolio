"use client";

/**
 * HomeLanding — single-screen shell
 *
 * Renders the full-viewport stage: background layers, fixed navbar,
 * and the HeroStage animation. No scrollable content — the animation
 * IS the experience (see AI_CONTEXT.md §4).
 */

import { SiteNavbar } from "@/components/navigation/site-navbar";
import { HeroStage } from "./HeroStage";

export default function HomeLanding() {
  return (
    <section className="relative isolate h-[100dvh] w-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* Paper grid texture */}
      <div aria-hidden className="bg-paper-grid absolute inset-0 opacity-55" />

      {/* Warm bloom — top left */}
      <div
        aria-hidden
        className="absolute left-[-10%] top-[-12%] h-[32rem] w-[32rem] rounded-full bg-[var(--spot-b)] opacity-70 blur-3xl"
      />

      {/* Cool bloom — bottom right */}
      <div
        aria-hidden
        className="absolute bottom-[-18%] right-[-8%] h-[26rem] w-[26rem] rounded-full bg-[var(--spot-a)] opacity-70 blur-3xl"
      />

      {/* Fixed navigation overlay */}
      <SiteNavbar />

      {/* Hero animation — fills full viewport */}
      <div className="absolute inset-0">
        <HeroStage />
      </div>
    </section>
  );
}
