"use client";

import { AuroraBackgroundFixed } from "./aurora-background";

export function GlobalBackground() {
  return (
    <>
      <AuroraBackgroundFixed showRadialGradient />
      <div aria-hidden className="pointer-events-none fixed left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none fixed bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />
      <div aria-hidden className="bg-paper-grid pointer-events-none fixed inset-0 opacity-30" />
    </>
  );
}
