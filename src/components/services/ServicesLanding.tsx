"use client";

/**
 * ServicesLanding — full-screen services showcase
 *
 * Shares the same visual DNA as HomeLanding:
 *   AuroraBackground → paper grid → bloom orbs → centered content.
 *
 * The SiteNavbar is rendered by layout.tsx so it is NOT imported here.
 */

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { IconSelector } from "./IconSelector";

export default function ServicesLanding() {
  return (
    <AuroraBackground
      showRadialGradient
      className="h-[100dvh] w-screen overflow-hidden !bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Paper grid texture */}
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Warm bloom — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-45 blur-3xl"
      />

      {/* Cool bloom — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-14%] left-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-45 blur-3xl"
      />

      {/* Main content — vertically and horizontally centered */}
      <div className="relative flex h-full flex-col items-center justify-center gap-10 px-6 sm:gap-12">

        {/* Eyebrow + Title */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
            What we create
          </p>
          <h1 className="font-display text-[2.2rem] leading-[0.9] tracking-[-0.03em] text-[var(--foreground)] sm:text-[2.8rem] md:text-[3.4rem]">
            Work that moves people.
          </h1>
        </motion.div>

        {/* Icon selector with description */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
        >
          <IconSelector />
        </motion.div>

      </div>
    </AuroraBackground>
  );
}
