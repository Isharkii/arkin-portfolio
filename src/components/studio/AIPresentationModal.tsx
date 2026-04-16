"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconClose() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="h-3.5 w-3.5">
      <line x1="3" y1="3" x2="13" y2="13" />
      <line x1="13" y1="3" x2="3"  y2="13" />
    </svg>
  );
}

function IconGenerate() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-full w-full">
      <path d="M14 4L16.5 11.5L24 14L16.5 16.5L14 24L11.5 16.5L4 14L11.5 11.5L14 4Z"
        fill="currentColor" />
      <path d="M22 19L23 22L26 23L23 24L22 27L21 24L18 23L21 22L22 19Z"
        fill="currentColor" opacity="0.55" />
      <path d="M7 3L7.75 5.25L10 6L7.75 6.75L7 9L6.25 6.75L4 6L6.25 5.25L7 3Z"
        fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function IconText() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <rect x="4" y="4" width="20" height="22" rx="3" strokeWidth="1.8" />
      <line x1="8" y1="10" x2="20" y2="10" strokeWidth="1.8" />
      <line x1="8" y1="14" x2="20" y2="14" strokeWidth="1.8" />
      <line x1="8" y1="18" x2="15" y2="18" strokeWidth="1.8" />
    </svg>
  );
}

function IconTemplate() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <rect x="3" y="3"  width="10" height="10" rx="2.5" strokeWidth="1.8" />
      <rect x="15" y="3" width="10" height="10" rx="2.5" strokeWidth="1.8" />
      <rect x="3"  y="15" width="10" height="10" rx="2.5" strokeWidth="1.8" />
      <rect x="15" y="15" width="10" height="10" rx="2.5" strokeWidth="1.8" />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M5 19v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" strokeWidth="1.8" />
      <path d="M19 9L14 4L9 9" strokeWidth="1.8" />
      <line x1="14" y1="4" x2="14" y2="19" strokeWidth="1.8" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

const OPTIONS = [
  {
    id:      "generate",
    title:   "Generate",
    desc:    "Create from a one-line prompt in a few seconds",
    icon:    <IconGenerate />,
    iconBg:  "bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-300",
    hover:   "group-hover:from-violet-500/[0.07] group-hover:to-purple-500/[0.04]",
  },
  {
    id:      "text",
    title:   "Paste in text",
    desc:    "Create from notes, an outline, or existing content",
    icon:    <IconText />,
    iconBg:  "bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300",
    hover:   "group-hover:from-blue-500/[0.07] group-hover:to-cyan-500/[0.04]",
  },
  {
    id:      "template",
    title:   "Create from template",
    desc:    "Create using the structure or layouts from a template",
    icon:    <IconTemplate />,
    iconBg:  "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-300",
    hover:   "group-hover:from-emerald-500/[0.07] group-hover:to-teal-500/[0.04]",
  },
  {
    id:      "import",
    title:   "Import file or URL",
    desc:    "Enhance existing docs, presentations, or webpages",
    icon:    <IconUpload />,
    iconBg:  "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-300",
    hover:   "group-hover:from-amber-500/[0.07] group-hover:to-orange-500/[0.04]",
  },
] as const;

// ── Animation variants ─────────────────────────────────────────────────────────

const cardListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.14 },
  },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 18, scale: 0.97 },
  visible:  { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// ── Component ──────────────────────────────────────────────────────────────────

interface Props {
  isOpen:   boolean;
  onClose:  () => void;
}

export function AIPresentationModal({ isOpen, onClose }: Props) {
  /* ESC to close */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        /* Backdrop — click outside to dismiss */
        <motion.div
          key="ai-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/44 backdrop-blur-[6px]"
        >
          {/* Panel */}
          <motion.div
            key="ai-modal-panel"
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{    opacity: 0, scale: 0.94,  y: 14 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            /* Light mode: very-soft blue→purple gradient.
               Dark mode: deep near-black with a cool purple undertone. */
            className="relative w-full max-w-[1100px] overflow-hidden rounded-[20px] border border-black/[0.08] bg-gradient-to-br from-[#f6f8ff] to-[#faf6ff] p-7 shadow-[0_32px_80px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.6)_inset] dark:border-white/[0.08] dark:from-[#13141b] dark:to-[#18131e] dark:shadow-[0_32px_80px_rgba(0,0,0,0.6)] sm:p-8 md:p-9"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-black/40 transition-colors hover:bg-black/[0.07] hover:text-black/70 dark:text-white/40 dark:hover:bg-white/[0.08] dark:hover:text-white/70"
            >
              <IconClose />
            </button>

            {/* ── Header ── */}
            <div className="mb-6 text-center sm:mb-7 md:mb-8">
              <h2 className="font-display text-[2rem] leading-[0.9] tracking-[-0.03em] text-[var(--foreground)] sm:text-[2.4rem] md:text-[2.8rem]">
                Create with AI
              </h2>
              <p className="font-ui mt-2.5 text-[13px] text-[var(--muted)] sm:text-[14px]">
                How would you like to get started?
              </p>
            </div>

            {/* ── Card grid ── */}
            <motion.div
              variants={cardListVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            >
              {OPTIONS.map((opt) => (
                <motion.button
                  key={opt.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 420, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-black/[0.07] bg-white/86 p-5 text-left shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-shadow duration-200 hover:shadow-[0_14px_36px_rgba(0,0,0,0.13)] dark:border-white/[0.07] dark:bg-white/[0.05]"
                >
                  {/* Per-card colour wash on hover */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-transparent transition-all duration-300 ${opt.hover}`} />

                  {/* Icon chip */}
                  <div className={`relative flex h-11 w-11 items-center justify-center rounded-xl p-2.5 ${opt.iconBg}`}>
                    {opt.icon}
                  </div>

                  {/* Text */}
                  <div className="relative space-y-1.5">
                    <p className="font-ui text-[14px] font-semibold leading-snug text-[var(--foreground)] sm:text-[15px]">
                      {opt.title}
                    </p>
                    <p className="font-ui text-[12px] leading-relaxed text-[var(--muted)] sm:text-[13px]">
                      {opt.desc}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* ── PRO banner ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.38, delay: 0.44, ease: "easeOut" }}
              className="mt-4 flex flex-col gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 p-4 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:p-5 dark:from-blue-950/30 dark:to-violet-950/30"
            >
              <div className="min-w-0">
                <p className="font-ui text-[13px] font-semibold text-[var(--foreground)] sm:text-[14px]">
                  Introducing Studio mode{" "}
                  <span className="text-violet-600 dark:text-violet-400">PRO</span>
                </p>
                <p className="font-ui mt-0.5 text-[12px] leading-relaxed text-[var(--muted)] sm:text-[13px]">
                  Unlock advanced AI layouts, brand kits, and real-time collaboration.
                </p>
              </div>
              <button
                type="button"
                className="font-ui shrink-0 self-start rounded-full bg-[var(--foreground)] px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--background)] transition-opacity hover:opacity-75 sm:self-auto"
              >
                Try Studio mode
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
