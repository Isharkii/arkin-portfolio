"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// ─── Icons ─────────────────────────────────────────────────────────────────────
// All icons use currentColor stroke so they automatically
// invert when the parent container flips to the active state.

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <rect x="2" y="4" width="20" height="15" rx="2" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <circle cx="6" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <line x1="7" y1="13" x2="17" y2="13" />
      <line x1="7" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 17 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DecksIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <rect x="1" y="7" width="16" height="12" rx="2" />
      <path d="M5 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />
      <line x1="5" y1="12" x2="13" y2="12" />
      <line x1="5" y1="15" x2="10" y2="15" />
    </svg>
  );
}

function BrandingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M12 2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 16.2l-5.6 3 1.1-6.2L3 8.6l6.2-.9L12 2z" />
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <circle cx="18" cy="5"  r="2.5" />
      <circle cx="6"  cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <line x1="8.4"  y1="10.9" x2="15.6" y2="6.1" />
      <line x1="8.4"  y1="13.1" x2="15.6" y2="17.9" />
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const services = [
  {
    id:          "website",
    label:       "Websites",
    description: "Bespoke digital experiences built from the ground up — fast, responsive, and architecturally sound.",
    icon:        <WebsiteIcon />,
  },
  {
    id:          "video",
    label:       "Video",
    description: "Motion-led stories that hold attention and communicate your brand's essence in every frame.",
    icon:        <VideoIcon />,
  },
  {
    id:          "decks",
    label:       "Decks",
    description: "Pitch decks and slide systems that win rooms — built for absolute clarity and lasting impact.",
    icon:        <DecksIcon />,
  },
  {
    id:          "branding",
    label:       "Branding",
    description: "Identity systems rooted in strategy — marks, palettes, and guidelines built to endure.",
    icon:        <BrandingIcon />,
  },
  {
    id:          "social",
    label:       "Social",
    description: "Scroll-stopping creative assets designed for each platform's native language and rhythm.",
    icon:        <SocialIcon />,
  },
] as const;

type ServiceId = (typeof services)[number]["id"];

// ─── Component ──────────────────────────────────────────────────────────────────

export function IconSelector() {
  const [activeId, setActiveId] = useState<ServiceId>("decks");

  const active = services.find((s) => s.id === activeId)!;

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-10">

      {/* Icon row */}
      <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
        {services.map((service) => {
          const isActive = service.id === activeId;

          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => setActiveId(service.id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="flex cursor-pointer flex-col items-center gap-2.5"
            >
              {/* Icon container — animates fill and shadow on active */}
              <motion.div
                animate={{
                  backgroundColor: isActive
                    ? "var(--foreground)"
                    : "var(--surface)",
                  boxShadow: isActive
                    ? "0 8px 28px rgba(18,18,18,0.22)"
                    : "0 2px 8px rgba(18,18,18,0.06)",
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-black/[0.06] sm:h-[72px] sm:w-[72px] md:h-[80px] md:w-[80px]"
              >
                <motion.div
                  animate={{
                    color: isActive ? "var(--background)" : "var(--foreground)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
                >
                  {service.icon}
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.span
                animate={{
                  color: isActive ? "var(--foreground)" : "var(--muted)",
                }}
                transition={{ duration: 0.2 }}
                className="font-ui text-[9px] uppercase tracking-[0.18em] sm:text-[10px] md:text-[11px]"
              >
                {service.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>

      {/* Description — fades through on selection change */}
      <div className="h-[52px] sm:h-[44px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="font-ui max-w-[380px] text-center text-[13px] leading-relaxed text-[var(--muted)] sm:text-[14px] sm:max-w-[440px]"
          >
            {active.description}
          </motion.p>
        </AnimatePresence>
      </div>

    </div>
  );
}
