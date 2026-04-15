"use client";

/**
 * StudioLanding — gooey folder view
 *
 * Layout contract:
 *  - Outer shell carries pt offset = navbar height + breathing gap so
 *    nothing ever hides behind the fixed navbar (z-40).
 *  - Close (×) button sits at top-left of the safe zone, z-50, uses
 *    useRouter so pointer events are guaranteed.
 *  - Gooey folder: filter layer is in normal flow (sets height);
 *    tab labels are position:absolute on top — no fragile negative margins.
 *  - Content is centered in the remaining space, pulled slightly above
 *    dead-center with pb-[10%].
 */

import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { GooeyFilter } from "@/components/ui/gooey-filter";
import { useScreenSize } from "@/hooks/use-screen-size";

// ─── Tab data ──────────────────────────────────────────────────────────────────

const TABS = [
  {
    id:    "custom",
    label: "Custom",
    files: [
      { name: "brand-identity-v2.pdf",  meta: "Brand strategy"  },
      { name: "pitch-deck-final.pptx",  meta: "Investor deck"   },
      { name: "campaign-brief.doc",     meta: "Q2 campaign"     },
      { name: "style-guide.pdf",        meta: "Visual system"   },
    ],
  },
  {
    id:    "ai",
    label: "AI",
    files: [
      { name: "generated-concepts.md",  meta: "AI ideation"     },
      { name: "smart-copy-drafts.md",   meta: "AI copywriting"  },
      { name: "auto-layouts.fig",       meta: "AI layout"       },
      { name: "variation-set.json",     meta: "AI variants"     },
    ],
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function StudioLanding() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const paramTab     = searchParams.get("tab") as TabId | null;

  const [activeIndex, setActiveIndex] = useState(paramTab === "ai" ? 1 : 0);
  const screenSize = useScreenSize();

  const activeTab = TABS[activeIndex];

  return (
    <AuroraBackground
      showRadialGradient
      className="h-[100dvh] w-screen overflow-hidden !bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Paper grid */}
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Bloom — top left */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl"
      />
      {/* Bloom — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl"
      />

      <GooeyFilter id="studio-goo" strength={screenSize.lessThan("md") ? 8 : 14} />

      {/*
        ── Shell ──────────────────────────────────────────────────────────────
        pt = navbar height + breathing gap:
          mobile  (logo 55px + py-5×2 40px = 95px)  + 16px → 111px ≈ pt-28
          sm      (logo 65px + 40px = 105px)          + 16px → 121px ≈ pt-[124px]
          md+     (logo 80px + 40px = 120px)          + 20px → 140px ≈ pt-36

        px = safe side margins:
          mobile 16px / sm 24px / md 40px / lg 64px
      */}
      <div className="relative flex h-full flex-col pt-28 sm:pt-[124px] md:pt-36 px-4 sm:px-6 md:px-10 lg:px-16">

        {/* ── Close button ── below navbar, left-aligned, z-50 ─────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0   }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="flex items-center"
          style={{ position: "relative", zIndex: 50 }}
        >
          <button
            type="button"
            onClick={() => router.push("/")}
            aria-label="Close and return to home"
            style={{ position: "relative", zIndex: 50, pointerEvents: "auto" }}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/90"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              className="h-[14px] w-[14px] text-black/55 transition-colors group-hover:text-black/85"
            >
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3"  y2="13" />
            </svg>
          </button>
        </motion.div>

        {/* ── Main content — centered, pulled slightly above dead-center ─────── */}
        <div className="flex flex-1 items-center justify-center pb-[10%]">
          <div className="w-full max-w-[560px] sm:max-w-[620px] md:max-w-[680px] space-y-6 sm:space-y-8">

            {/* Heading block */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
                Studio
              </p>
              <h1 className="font-display text-[2.2rem] leading-[0.9] tracking-[-0.03em] text-[var(--foreground)] sm:text-[2.6rem] md:text-[3rem]">
                {paramTab === "ai" ? "AI Assisted" : "Custom Built"}
              </h1>
            </motion.div>

            {/* ── Gooey folder ─────────────────────────────────────────────────
                Structure:
                  [relative wrapper]
                    [filter div — normal flow, sets height]
                      [tab background row]
                      [content panel]
                    [tab label row — absolute over tab backgrounds, no filter]
            */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.42, delay: 0.18, ease: "easeOut" }}
              className="relative"
            >
              {/* Filter layer — in normal flow so the outer div grows with it */}
              <div style={{ filter: "url(#studio-goo)" }}>

                {/* Tab background slots */}
                <div className="flex w-full">
                  {TABS.map((tab, index) => (
                    <div key={tab.id} className="relative h-10 flex-1 sm:h-12">
                      {activeIndex === index && (
                        <motion.div
                          layoutId="folder-tab-bg"
                          className="absolute inset-0 bg-[var(--surface-soft)]"
                          transition={{ type: "spring", bounce: 0, duration: 0.36 }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Content panel */}
                <div className="h-[200px] w-full overflow-hidden bg-[var(--surface-soft)] sm:h-[240px] md:h-[260px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 36,  filter: "blur(8px)"  }}
                      animate={{ opacity: 1, y: 0,   filter: "blur(0px)"  }}
                      exit={{    opacity: 0, y: -36,  filter: "blur(8px)"  }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="px-5 pt-5 pb-4 sm:px-7 sm:pt-6"
                    >
                      <ul>
                        {activeTab.files.map((file) => (
                          <li
                            key={file.name}
                            className="flex items-center justify-between border-b border-[var(--line)] py-2.5"
                          >
                            <span className="font-ui text-[13px] text-[var(--foreground)] sm:text-[14px]">
                              {file.name}
                            </span>
                            <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                              {file.meta}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Tab label row — absolute at top of wrapper, above filter layer.
                  Text is never filtered so it stays crisp at all times. */}
              <div className="absolute left-0 right-0 top-0 z-10 flex h-10 sm:h-12">
                {TABS.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex flex-1 cursor-pointer items-center justify-center"
                  >
                    <span
                      className={`font-ui text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 sm:text-[12px] ${
                        activeIndex === index
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
