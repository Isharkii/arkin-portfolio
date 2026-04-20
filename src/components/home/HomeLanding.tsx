"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroStage } from "./HeroStage";
import { SegmentedToggle, type ToggleTab } from "./SegmentedToggle";
import type { ProjectCardData } from "./project-card";

export default function HomeLanding() {
  const [hoveredProject, setHoveredProject] = useState<ProjectCardData | null>(null);
  const [activeTab,      setActiveTab]      = useState<ToggleTab>("Work");
  const [showOverlay,    setShowOverlay]    = useState(false);

  const handleHoveredProjectChange = useCallback(
    (project: ProjectCardData | null) => setHoveredProject(project),
    []
  );
  const handlePhase3 = useCallback(() => setShowOverlay(true), []);

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

      {/* Layer 2 — card arc */}
      <div className="absolute inset-0">
        <HeroStage
          onHoveredProjectChange={handleHoveredProjectChange}
          onPhase3={handlePhase3}
        />
      </div>

      {/*
        Layer 3a — Info text, anchored just below the arc's lowest point.

        The plain outer div owns the static CSS centering (left:50% + translateX(-50%)).
        Framer Motion never touches this div, so the centering never drifts.

        Arc geometry: edge cards sit at y=0 from viewport center (50vh).
        Card half-height ≈ clamp(7.5rem,11.5vw,12.5rem) * (5/4) / 2
                         ≈ clamp(4.7rem,7.2vw,7.8rem)
        We add a small gap so text sits just clear of the lowest card.
      */}
      <div
        style={{
          position: "fixed",
          top: "calc(50vh + clamp(4.8rem, 7.5vw, 8rem))",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              key="info-text"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: 4, transition: { duration: 0.14 } }}
              transition={{ opacity: { duration: 0.4, ease: "easeOut" }, y: { type: "spring", stiffness: 120, damping: 18 } }}
              className="flex flex-col items-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredProject?.id ?? "default"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{    opacity: 0, y: -5 }}
                  transition={{ duration: 0.18 }}
                  className="text-center"
                >
                  {hoveredProject ? (
                    <>
                      <p
                        className="font-display text-[clamp(0.95rem,1.4vw,1.1rem)] leading-none tracking-[-0.03em]"
                        style={{ color: "var(--foreground)" }}
                      >
                        {hoveredProject.title}
                      </p>
                      <p
                        className="font-ui mt-1 text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {hoveredProject.metric} · {hoveredProject.eyebrow}
                      </p>
                    </>
                  ) : (
                    <p
                      className="font-ui text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "var(--muted)", opacity: 0.45 }}
                    >
                      Hover a card to explore
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*
        Layer 3b — Toggle, locked at viewport bottom center.

        Same pattern: plain div owns centering, motion.div only animates opacity/y.
        x is never touched by Framer Motion → position is always exactly viewport-center.
      */}
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
        }}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              key="toggle"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: 8, transition: { duration: 0.14 } }}
              transition={{ opacity: { duration: 0.4, delay: 0.08, ease: "easeOut" }, y: { type: "spring", stiffness: 120, damping: 18, delay: 0.08 } }}
            >
              <SegmentedToggle activeTab={activeTab} onChange={setActiveTab} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AuroraBackground>
  );
}
