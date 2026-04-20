"use client";

/**
 * HeroStage — 3-phase animated card gallery
 *
 * Phase 1 (0 → 700ms)   Lead card (Arkin photo) springs in from below.
 * Phase 2 (700 → 1400ms) Editorial pause at center.
 * Phase 3 (1400ms → ∞)  Card fades; 7-card arc fans out.
 *                        Center card = Arkin photo with dynamic text.
 *                        Hovering a project card updates the center card text
 *                        and shows tech stack below it.
 */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { getArcStyle } from "./arc-layout";
import { ProjectCard, type ProjectCardData } from "./project-card";
import { SegmentedToggle, type ToggleTab } from "./SegmentedToggle";

// ─── Data ──────────────────────────────────────────────────────────────────────

const centerCard: ProjectCardData = {
  id: "center",
  title: "Arkin Sharma",
  eyebrow: "AI · ML Engineer",
  metric: "Building scalable ML systems",
  image: "/arkin_photo.jpg",
  alt: "Arkin Sharma — AI/ML Engineer",
};

const projectCards: ProjectCardData[] = [
  {
    id: "scraper",
    title: "Web Scraper",
    eyebrow: "Concurrency · Python",
    metric: "99.5% reliability",
    tech: "Python · asyncio · Redis · Circuit Breakers",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
    alt: "Multi-threaded Web Scraper project",
  },
  {
    id: "rl",
    title: "RL Framework",
    eyebrow: "Reinforcement Learning",
    metric: "Custom gym-compatible env",
    tech: "PyTorch · OpenAI Gym · TensorFlow · NumPy",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #4a1c96 60%, #7b2ff7 100%)",
    alt: "RL Framework project",
  },
  {
    id: "rebee",
    title: "NLP Pipeline",
    eyebrow: "REBEE.AI · NLP",
    metric: "92% extraction accuracy",
    tech: "BERT · spaCy · FastAPI · Transformers · HuggingFace",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 60%, #ea580c 100%)",
    alt: "NLP Resume Summarization — REBEE.AI",
  },
  {
    id: "pitchworx",
    title: "LLM Pipeline",
    eyebrow: "PitchWorx · Backend",
    metric: "18% → 2% error rate",
    tech: "FastAPI · LangChain · Prompt Engineering · Pydantic",
    gradient: "linear-gradient(135deg, #4a0e3a 0%, #8b1a6b 60%, #c2185b 100%)",
    alt: "LLM Pipeline — PitchWorx",
  },
  {
    id: "network",
    title: "Network Lab",
    eyebrow: "Diagnostics · Systems",
    metric: "DNS + packet analysis",
    tech: "Python · Scapy · Wireshark · Linux · TCP/IP",
    gradient: "linear-gradient(135deg, #052e16 0%, #166534 60%, #16a34a 100%)",
    alt: "Network Diagnostics Lab project",
  },
  {
    id: "api",
    title: "API Platform",
    eyebrow: "Backend · Scale",
    metric: "1M+ requests/month · <100ms",
    tech: "FastAPI · PostgreSQL · Redis · Docker · Nginx",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0ea5e9 100%)",
    alt: "Scalable API Platform project",
  },
];

// 7 cards total: 3 projects · center (Arkin) · 3 projects
const galleryProjects: ProjectCardData[] = [
  ...projectCards.slice(0, 3),
  centerCard,
  ...projectCards.slice(3),
];

const TOTAL        = galleryProjects.length; // 7
const CENTER_INDEX = Math.floor(TOTAL / 2);  // 3

// ─── Spring configs ────────────────────────────────────────────────────────────

const springEntry    = { type: "spring", stiffness: 90,  damping: 22 } as const;
const springGallery  = { type: "spring", stiffness: 100, damping: 20 } as const;
const springParallax = { type: "spring", stiffness: 60,  damping: 20 } as const;

// ─── Component ─────────────────────────────────────────────────────────────────

type Phase = 1 | 2 | 3;

export function HeroStage() {
  const [phase,      setPhase]      = useState<Phase>(1);
  const [hoveredId,  setHoveredId]  = useState<string | null>(null);
  const [swipeIndex, setSwipeIndex] = useState<number | null>(null);
  const [mouse,      setMouse]      = useState({ x: 0, y: 0 });
  const [activeTab,  setActiveTab]  = useState<ToggleTab>("Work");
  const reduceMotion = useReducedMotion();

  const activeId = hoveredId ?? (swipeIndex !== null ? galleryProjects[swipeIndex].id : null);

  // Project hovered (excludes center card) — drives center card dynamic text
  const hoveredProject =
    activeId && activeId !== "center"
      ? galleryProjects.find((p) => p.id === activeId)
      : null;

  // ── Phase sequencing ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (reduceMotion) { setPhase(3); return; }
    const t1 = window.setTimeout(() => setPhase(2), 700);
    const t2 = window.setTimeout(() => setPhase(3), 1400);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [reduceMotion]);

  // ── Mouse parallax (desktop) ──────────────────────────────────────────────────
  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) =>
      setMouse({
        x: (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2),
        y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
      });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  // ── Swipe handler (mobile) ────────────────────────────────────────────────────
  function handleArcSwipe(_: unknown, info: { offset: { x: number } }) {
    if (Math.abs(info.offset.x) < 40) return;
    setSwipeIndex((prev) => {
      const current = prev ?? CENTER_INDEX;
      if (info.offset.x < 0) return Math.max(current - 1, 0);
      return Math.min(current + 1, TOTAL - 1);
    });
  }

  return (
    <div className="relative h-full w-full">

      {/* ── Phase 1 & 2: Lead card (Arkin photo) ───────────────────────────────── */}
      <AnimatePresence>
        {phase !== 3 && (
          <motion.div
            key="lead-card"
            initial={{ y: "100vh", scale: 0.88, rotate: -4, opacity: 0.96 }}
            animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.72, opacity: 0, transition: { duration: 0.2 } }}
            transition={springEntry}
            style={{ willChange: "transform", zIndex: 20 }}
            className="absolute left-1/2 top-1/2"
          >
            <div style={{ transform: "translate(-50%, -50%)" }}>
              <ProjectCard project={centerCard} isCenter priority />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Phase 3: Arc gallery ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {phase === 3 && (
          <>
            {/* Invisible drag surface for mobile swipe */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.04}
              dragMomentum={false}
              onDragEnd={handleArcSwipe}
              className="absolute inset-0 z-30 touch-pan-y md:pointer-events-none"
              aria-hidden
            />

            {galleryProjects.map((project, index) => {
              const arc      = getArcStyle(index, TOTAL);
              const isCenter = index === CENTER_INDEX;
              const isActive = activeId === project.id;
              // Center card never blurs — it displays the hovered project info
              const isBlurred = activeId !== null && !isActive && !isCenter;

              const depth = 1 - Math.abs(index - CENTER_INDEX) / TOTAL;
              const pX = reduceMotion ? 0 : mouse.x * 6 * depth;
              const pY = reduceMotion ? 0 : mouse.y * 4 * depth;

              return (
                <motion.div
                  key={project.id}
                  initial={{ x: 0, y: 0, rotate: 0, scale: 0.6, opacity: 0 }}
                  animate={{
                    x: arc.x,
                    y: arc.y,
                    rotate: arc.rotate,
                    scale: arc.scale,
                    opacity: 1,
                  }}
                  exit={{
                    x: 0, y: 0, rotate: 0, scale: 0.6, opacity: 0,
                    transition: { duration: 0.16 },
                  }}
                  transition={{
                    ...springGallery,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  style={{
                    willChange: "transform",
                    zIndex: isActive ? 30 : arc.zIndex,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    pointerEvents: "none",
                  }}
                >
                  {/* Float oscillation */}
                  <motion.div
                    animate={reduceMotion ? {} : { y: [0, -10, 0] }}
                    transition={{
                      duration: 2.6 + index * 0.22,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.35,
                    }}
                    style={{ willChange: "transform", pointerEvents: "none" }}
                  >
                    <div style={{ transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
                      {/* Parallax + hover scale + sibling blur */}
                      <motion.div
                        animate={{
                          x: pX,
                          y: pY,
                          scale: isActive ? 1.05 : 1,
                          filter: isBlurred ? "blur(3px)" : "blur(0px)",
                        }}
                        transition={{
                          x: springParallax,
                          y: springParallax,
                          scale:  { type: "spring", stiffness: 300, damping: 20 },
                          filter: { duration: 0.2 },
                        }}
                        style={{ willChange: "transform", pointerEvents: "auto" }}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <ProjectCard project={project} isCenter={isCenter} />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Info strip + toggle — stacked, floats below the arc */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.16 } }}
              transition={{
                opacity: { duration: 0.4, delay: reduceMotion ? 0 : 0.55 },
                y: { type: "spring", stiffness: 120, damping: 18, delay: reduceMotion ? 0 : 0.55 },
              }}
              className="absolute bottom-[12%] sm:bottom-[14%] flex flex-col items-center gap-3"
              style={{ left: "50%", transform: "translateX(-50%)", zIndex: 35 }}
            >
              {/* Project info strip — changes on hover */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredProject?.id ?? "default"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-center"
                  style={{ minHeight: "2.5rem" }}
                >
                  {hoveredProject ? (
                    <>
                      <p className="font-display text-[clamp(0.95rem,1.4vw,1.15rem)] leading-none tracking-[-0.03em]" style={{ color: "var(--foreground)" }}>
                        {hoveredProject.title}
                      </p>
                      <p className="font-ui mt-1 text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                        {hoveredProject.metric} · {hoveredProject.eyebrow}
                      </p>
                    </>
                  ) : (
                    <p className="font-ui text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--muted)", opacity: 0.45 }}>
                      Hover a card to explore
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              <SegmentedToggle activeTab={activeTab} onChange={setActiveTab} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
