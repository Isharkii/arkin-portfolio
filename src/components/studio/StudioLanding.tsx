"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { GooeyFilter } from "@/components/ui/gooey-filter";
import { useScreenSize } from "@/hooks/use-screen-size";

// ─── Icons ─────────────────────────────────────────────────────────────────────

function IconGlobe() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>;
}
function IconPlay() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><circle cx="12" cy="12" r="10" /><polygon points="10 8 17 12 10 16 10 8" fill="currentColor" stroke="none" /></svg>;
}
function IconSlides() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="2" y="6" width="14" height="11" rx="1.5" /><path d="M6 6V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2" /><line x1="5" y1="11" x2="12" y2="11" /><line x1="5" y1="14" x2="9" y2="14" /></svg>;
}
function IconDiamond() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M2 9h20M12 3l4 6-4 13-4-13 4-6z" /></svg>;
}
function IconShare() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>;
}
function IconSparkles() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z" /><path d="M19 1l.5 1.5L21 3l-1.5.5L19 5l-.5-1.5L17 3l1.5-.5L19 1z" /></svg>;
}
function IconCpu() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="7" y="7" width="10" height="10" rx="1" /><line x1="9" y1="7" x2="9" y2="4" /><line x1="12" y1="7" x2="12" y2="4" /><line x1="15" y1="7" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="17" /><line x1="12" y1="20" x2="12" y2="17" /><line x1="15" y1="20" x2="15" y2="17" /><line x1="7" y1="9" x2="4" y2="9" /><line x1="7" y1="12" x2="4" y2="12" /><line x1="7" y1="15" x2="4" y2="15" /><line x1="20" y1="9" x2="17" y2="9" /><line x1="20" y1="12" x2="17" y2="12" /><line x1="20" y1="15" x2="17" y2="15" /></svg>;
}
function IconWand() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><line x1="3" y1="21" x2="14" y2="10" /><path d="M14 10l2-2 4-1-1 4-2 2-3-3z" /><line x1="6" y1="4" x2="6" y2="6" /><line x1="18" y1="14" x2="18" y2="16" /><line x1="5" y1="11" x2="3" y2="13" /><line x1="19" y1="5" x2="17" y2="7" /></svg>;
}
function IconEye() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
}
function IconLayers() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}

// ─── Presentation option icons ─────────────────────────────────────────────────

function IconGenerate() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="h-full w-full">
      <path d="M14 4L16.5 11.5L24 14L16.5 16.5L14 24L11.5 16.5L4 14L11.5 11.5L14 4Z" fill="currentColor" />
      <path d="M22 19L23 22L26 23L23 24L22 27L21 24L18 23L21 22L22 19Z" fill="currentColor" opacity="0.55" />
      <path d="M7 3L7.75 5.25L10 6L7.75 6.75L7 9L6.25 6.75L4 6L6.25 5.25L7 3Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
function IconPasteText() {
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
      <rect x="3"  y="3"  width="10" height="10" rx="2.5" strokeWidth="1.8" />
      <rect x="15" y="3"  width="10" height="10" rx="2.5" strokeWidth="1.8" />
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

// ─── Presentation option cards ─────────────────────────────────────────────────

const PRESENTATION_OPTIONS = [
  {
    id:     "generate",
    title:  "Generate",
    desc:   "Create from a one-line prompt in a few seconds",
    icon:   <IconGenerate />,
    iconBg: "bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-300",
  },
  {
    id:     "text",
    title:  "Paste in text",
    desc:   "Create from notes, an outline, or existing content",
    icon:   <IconPasteText />,
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300",
  },
  {
    id:     "template",
    title:  "Create from template",
    desc:   "Create using the structure or layouts from a template",
    icon:   <IconTemplate />,
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-300",
  },
  {
    id:     "import",
    title:  "Import file or URL",
    desc:   "Enhance existing docs, presentations, or webpages",
    icon:   <IconUpload />,
    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-300",
  },
] as const;

const PRESENTATION_SUB_TABS = [
  { id: "generate", label: "Generate"            },
  { id: "text",     label: "Paste in text"        },
  { id: "template", label: "Create from template" },
  { id: "import",   label: "Import file or URL"   },
] as const;

const presentationCardVariants = {
  hidden:  { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const presentationListVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
};

function AIPresentationCards({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <motion.div
      variants={presentationListVariants}
      initial="hidden"
      animate="visible"
      className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4"
    >
      {PRESENTATION_OPTIONS.map((opt) => (
        <motion.button
          key={opt.id}
          variants={presentationCardVariants}
          whileHover={{
            y: -5,
            scale: 1.02,
            transition: { type: "spring", stiffness: 420, damping: 22 },
          }}
          whileTap={{ scale: 0.97 }}
          type="button"
          onClick={() => onSelect(opt.id)}
          className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--background)]/80 p-4 text-left shadow-[0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] dark:bg-white/[0.05]"
        >
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl p-2 ${opt.iconBg}`}>
            {opt.icon}
          </div>
          <div className="space-y-1">
            <p className="font-display text-[13px] font-semibold leading-snug text-[var(--foreground)] sm:text-[14px]">
              {opt.title}
            </p>
            <p className="font-ui text-[11px] leading-relaxed text-[var(--muted)] sm:text-[12px]">
              {opt.desc}
            </p>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

// ─── Generate chatbox ──────────────────────────────────────────────────────────

const THEMES = [
  { value: "default",    label: "Default"    },
  { value: "modern",     label: "Modern"     },
  { value: "minimalist", label: "Minimalist" },
  { value: "corporate",  label: "Corporate"  },
  { value: "creative",   label: "Creative"   },
  { value: "dark",       label: "Dark"       },
  { value: "light",      label: "Light"      },
];

function IconFile() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6L9 2z" />
      <polyline points="9 2 9 6 13 6" />
    </svg>
  );
}

function GenerateChatbox() {
  const [prompt, setPrompt]     = useState("");
  const [files, setFiles]       = useState<File[]>([]);
  const [theme, setTheme]       = useState("default");
  const fileInputRef            = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">

      {/* Textarea */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your presentation…"
        rows={5}
        className="font-ui w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--background)]/70 px-4 py-3.5 text-[13px] leading-relaxed text-[var(--foreground)] placeholder:text-[var(--muted)]/45 backdrop-blur-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-400/25 min-h-[120px] sm:text-[14px]"
      />

      {/* Attached file chips */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((f, i) => (
            <span
              key={i}
              className="font-ui inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--background)]/60 px-2.5 py-1 text-[11px] text-[var(--muted)]"
            >
              <span className="h-3 w-3 shrink-0"><IconFile /></span>
              <span className="max-w-[120px] truncate">{f.name}</span>
              <button
                type="button"
                onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                className="ml-0.5 text-[var(--muted)]/60 hover:text-[var(--foreground)]"
                aria-label="Remove file"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center gap-2.5">

        {/* + attach files */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Attach files"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--background)]/60 text-[var(--muted)] backdrop-blur-sm transition-colors hover:border-blue-400/40 hover:text-[var(--foreground)]"
        >
          <svg viewBox="0 0 16 16" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="sr-only"
          onChange={(e) => {
            setFiles((prev) => [...prev, ...Array.from(e.target.files ?? [])]);
            e.target.value = "";
          }}
        />

        {/* Theme selector */}
        <div className="relative">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="font-ui appearance-none rounded-xl border border-[var(--line)] bg-[var(--background)]/60 py-1.5 pl-3 pr-7 text-[11px] text-[var(--foreground)] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400/25 sm:text-[12px]"
          >
            {THEMES.map((t) => (
              <option key={t.value} value={t.value}>
                Theme: {t.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--muted)]/60">
            <svg viewBox="0 0 10 6" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </div>
        </div>

        {/* Generate */}
        <button
          type="button"
          className="font-ui shrink-0 rounded-xl bg-blue-500 px-5 py-2 text-[12px] font-medium text-white transition-colors duration-200 hover:bg-emerald-500 sm:px-6 sm:text-[13px]"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const SERVICES = [
  { id: "website",      label: "Website",          icon: <IconGlobe />   },
  { id: "video",        label: "Video",             icon: <IconPlay />    },
  { id: "presentation", label: "Presentation",      icon: <IconSlides />  },
  { id: "logo",         label: "Logo",              icon: <IconDiamond /> },
  { id: "social",       label: "Social Media Post", icon: <IconShare />   },
] as const;

const AI_SERVICES = [
  { id: "website",      label: "Website",          icon: <IconSparkles /> },
  { id: "video",        label: "Video",             icon: <IconCpu />      },
  { id: "presentation", label: "Presentation",      icon: <IconWand />     },
  { id: "logo",         label: "Logo",              icon: <IconEye />      },
  { id: "social",       label: "Social Media Post", icon: <IconLayers />   },
] as const;

type ServiceId = "website" | "video" | "presentation" | "logo" | "social";
type TabId     = "custom" | "ai";

const CONTENT: Record<TabId, Record<ServiceId, { heading: string; lines: [string, string] }>> = {
  custom: {
    website:      { heading: "Website",          lines: ["Crafted from the ground up with tailored UX, storytelling, and performance-driven design.", "Built to reflect your brand, not a template."] },
    video:        { heading: "Video",             lines: ["High-impact visuals, storytelling, and editing designed to captivate your audience.", "Every frame is intentional and brand-aligned."] },
    presentation: { heading: "Presentation",      lines: ["Strategically designed decks that communicate ideas with clarity and persuasion.", "Perfect for pitches, reports, and storytelling."] },
    logo:         { heading: "Logo",              lines: ["Unique, research-driven logos crafted to define your brand identity.", "Built for long-term recognition and versatility."] },
    social:       { heading: "Social Media Post", lines: ["Visually compelling posts designed to engage, convert, and stay on-brand.", "Tailored for your audience and platform."] },
  },
  ai: {
    website:      { heading: "Website",          lines: ["Generate fast, structured websites using intelligent layouts and content suggestions.", "Optimized instantly for speed, clarity, and conversion."] },
    video:        { heading: "Video",             lines: ["Quickly generate engaging videos with automated scripts, visuals, and transitions.", "Ideal for rapid content production at scale."] },
    presentation: { heading: "Presentation",      lines: ["Instantly generate structured presentations with smart content flow and layouts.", "From idea to deck in minutes."] },
    logo:         { heading: "Logo",              lines: ["Generate multiple logo concepts instantly based on your style and inputs.", "Fast, flexible, and easy to iterate."] },
    social:       { heading: "Social Media Post", lines: ["Auto-generate scroll-stopping posts with smart captions and visuals.", "Consistent content, created in seconds."] },
  },
};

const TABS: { id: TabId; label: string }[] = [
  { id: "custom", label: "Custom" },
  { id: "ai",     label: "AI"     },
];

const SERVICE_TABS: { id: ServiceId; label: string }[] = [
  { id: "website",      label: "Website"      },
  { id: "video",        label: "Video"        },
  { id: "presentation", label: "Presentation" },
  { id: "logo",         label: "Logo"         },
  { id: "social",       label: "Social"       },
];

// ─── Preview content ───────────────────────────────────────────────────────────

function WebsitePreviews() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {[0, 1, 2].map((i) => (
        <div key={i} className="aspect-[3/2] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--background)]/50">
          <div className="flex h-4 items-center gap-1 border-b border-[var(--line)] px-2.5">
            {[0,1,2].map(j => <span key={j} className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]/30" />)}
          </div>
          <div className="space-y-1.5 p-2.5">
            <div className="h-2 w-4/5 rounded bg-[var(--muted)]/25" />
            <div className="h-1.5 w-3/5 rounded bg-[var(--muted)]/15" />
            <div className={`mt-1.5 rounded bg-[var(--muted)]/10 ${i === 1 ? "h-8" : "h-10"}`} />
            {i === 0 && <div className="flex gap-1"><div className="h-4 w-1/2 rounded bg-[var(--muted)]/10" /><div className="h-4 flex-1 rounded bg-[var(--muted)]/10" /></div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoPreviews() {
  const tints = ["bg-[var(--spot-a)]/40", "bg-[var(--spot-b)]/40", "bg-[var(--muted)]/20"];
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {tints.map((tint, i) => (
        <div key={i} className={`aspect-video overflow-hidden rounded-xl border border-[var(--line)] relative ${tint}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--foreground)]/20 bg-[var(--background)]/40 backdrop-blur-sm">
              <svg viewBox="0 0 12 12" className="ml-0.5 h-4 w-4 text-[var(--foreground)]/70" fill="currentColor">
                <polygon points="3 2 10 6 3 10" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-2 pb-1.5">
            <div className="h-1.5 w-2/3 rounded bg-[var(--foreground)]/20" />
          </div>
        </div>
      ))}
    </div>
  );
}

function PresentationPreviews() {
  const accents = ["bg-[var(--spot-b)]", "bg-[var(--spot-a)]", "bg-[var(--muted)]/40"];
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {accents.map((accent, i) => (
        <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--background)]/50">
          <div className={`h-[35%] w-full ${accent} flex items-end px-3 pb-2`}>
            <div className="space-y-1">
              <div className="h-2 w-16 rounded bg-[var(--background)]/60" />
              <div className="h-1.5 w-10 rounded bg-[var(--background)]/40" />
            </div>
          </div>
          <div className="space-y-1.5 p-3">
            {[0,1,2].map(j => (
              <div key={j} className={`h-1.5 rounded bg-[var(--muted)]/20 ${j === 0 ? "w-full" : j === 1 ? "w-4/5" : "w-3/5"}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LogoPreviews() {
  const shapes = [
    <circle key="a" cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />,
    <path key="b" d="M20 8 L32 26 L8 26 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    <><rect key="c1" x="10" y="10" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" /><rect key="c2" x="16" y="16" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /></>,
    <path key="d" d="M20 8 L28 20 L20 32 L12 20 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    <><circle key="e1" cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2" /><circle key="e2" cx="20" cy="20" r="6" fill="currentColor" opacity="0.3" /></>,
    <path key="f" d="M10 20 Q15 8 20 20 Q25 32 30 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
  ];
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {shapes.map((shape, i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--background)]/50 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="h-[55%] w-[55%] text-[var(--foreground)]/60">
            {shape}
          </svg>
        </div>
      ))}
    </div>
  );
}

function SocialPreviews() {
  const configs = [
    { from: "from-[var(--spot-b)]/60", to: "to-[var(--spot-a)]/40" },
    { from: "from-[var(--spot-a)]/50", to: "to-[var(--muted)]/30"  },
    { from: "from-[var(--muted)]/30",  to: "to-[var(--spot-b)]/50" },
  ];
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
      {configs.map((c, i) => (
        <div key={i} className={`w-[28%] max-w-[140px] aspect-[9/16] overflow-hidden rounded-xl border border-[var(--line)] bg-gradient-to-b ${c.from} ${c.to} flex flex-col justify-between p-2 sm:p-3`}>
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-[var(--background)]/40" />
            <div className="h-1.5 w-10 rounded bg-[var(--background)]/40" />
          </div>
          <div className="space-y-1.5 rounded-lg bg-[var(--background)]/20 p-2">
            <div className="h-1.5 w-4/5 rounded bg-[var(--background)]/50" />
            <div className="h-1.5 w-3/5 rounded bg-[var(--background)]/35" />
          </div>
        </div>
      ))}
    </div>
  );
}

const PREVIEWS: Record<ServiceId, React.ReactNode> = {
  website:      <WebsitePreviews />,
  video:        <VideoPreviews />,
  presentation: <PresentationPreviews />,
  logo:         <LogoPreviews />,
  social:       <SocialPreviews />,
};

// ─── Slide variants ────────────────────────────────────────────────────────────

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "102%" : "-102%",
    opacity: 0.85,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 240, damping: 28 },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-102%" : "102%",
    opacity: 0.85,
    transition: { type: "spring", stiffness: 240, damping: 28 },
  }),
};

// ─── Component ─────────────────────────────────────────────────────────────────

export default function StudioLanding() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const paramTab     = searchParams.get("tab") as TabId | null;

  const [activeIndex,    setActiveIndex]    = useState<0 | 1>(paramTab === "ai" ? 1 : 0);
  const [hoveredId,      setHoveredId]      = useState<ServiceId | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);
  const [activeDetailTab, setActiveDetailTab] = useState<ServiceId>("website");
  const [slideDir,       setSlideDir]       = useState<1 | -1>(1);
  const [activePresentationTab, setActivePresentationTab] = useState<string | null>(null);
  const screenSize = useScreenSize();

  const activeTabId = TABS[activeIndex].id;
  const activeLogos = activeTabId === "ai" ? AI_SERVICES : SERVICES;
  const hoverContent = hoveredId ? CONTENT[activeTabId][hoveredId] : null;

  function openDetail(service: ServiceId) {
    setSlideDir(1);
    setActiveDetailTab(service);
    setHoveredId(null);
    setSelectedService(service);
  }

  function closeDetail() {
    setSlideDir(-1);
    setSelectedService(null);
  }

  // X button: close sub-view → detail → main → home
  function handleClose() {
    if (activePresentationTab) { setSlideDir(-1); setActivePresentationTab(null); }
    else if (selectedService) closeDetail();
    else router.push("/");
  }

  return (
    <AuroraBackground
      showRadialGradient
      className={`w-screen !bg-[var(--background)] text-[var(--foreground)] ${
        activePresentationTab !== null
          ? "!h-auto min-h-[100dvh] overflow-y-auto overflow-x-hidden"
          : "h-[100dvh] overflow-hidden"
      }`}
    >
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />

      <GooeyFilter id="studio-goo" strength={screenSize.lessThan("md") ? 8 : 14} />

      {/* Shell */}
      <div className={`relative flex flex-col pt-[100px] sm:pt-[112px] md:pt-[128px] px-5 sm:px-6 md:px-[60px] ${
        activePresentationTab !== null ? "pb-20" : "h-full"
      }`}>

        {/* Close / Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0   }}
          transition={{ duration: 0.26, ease: "easeOut" }}
          style={{ position: "relative", zIndex: 50 }}
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label={selectedService ? "Back to services" : "Close"}
            style={{ position: "relative", zIndex: 50, pointerEvents: "auto" }}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/90"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="h-[14px] w-[14px] text-black/55 transition-colors group-hover:text-black/85">
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3"  y2="13" />
            </svg>
          </button>
        </motion.div>

        {/* Folder container */}
        <div className={activePresentationTab !== null
          ? "mt-6 sm:mt-8 flex flex-col items-center gap-8 sm:gap-10"
          : "flex flex-1 items-center justify-center pb-[10%]"
        }>
          <motion.div
            layout
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ layout: { type: "spring", stiffness: 260, damping: 28 }, duration: 0.44, delay: 0.1, ease: "easeOut" }}
            /* overflow-hidden clips the horizontal slide */
            className={`relative w-[92vw] max-w-[1160px] overflow-hidden ${
              activePresentationTab !== null
                ? "h-[clamp(22rem,62vh,42rem)]"
                : "h-[clamp(17rem,52vh,34rem)]"
            }`}
          >
            <AnimatePresence custom={slideDir} mode="wait" initial={false}>

              {/* ── MAIN VIEW ── */}
              {selectedService === null && (
                <motion.div
                  key="main"
                  custom={slideDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Gooey filter — background colour blocks only, never receives pointer events */}
                  <div style={{ filter: "url(#studio-goo)", pointerEvents: "none" }} className="flex h-full flex-col">
                    <div className="flex w-full shrink-0">
                      {TABS.map((tab, index) => (
                        <div key={tab.id} className="relative h-12 flex-1 sm:h-14 md:h-16">
                          {activeIndex === index && (
                            <motion.div
                              layoutId="folder-tab-bg"
                              className="absolute inset-0 bg-[var(--folder-bg)]"
                              transition={{ type: "spring", bounce: 0, duration: 0.36 }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 w-full bg-[var(--folder-bg)]" />
                  </div>

                  {/* Logo + text content overlay (unfiltered) */}
                  <div className="absolute left-0 right-0 bottom-0 top-12 sm:top-14 md:top-16 z-20 flex flex-col items-center justify-between px-6 sm:px-10 md:px-14 py-5 sm:py-7 md:py-9">

                    {/* Logo row */}
                    <div className="flex w-full items-center justify-center gap-3 sm:gap-5 md:gap-8">
                      {activeLogos.map((service) => {
                        const isHovered = hoveredId === service.id;
                        const isBlurred = hoveredId !== null && !isHovered;
                        return (
                          <motion.div
                            key={service.id + activeTabId}
                            initial={{ opacity: 0, scale: 0.82 }}
                            animate={{
                              opacity: isBlurred ? 0.28 : 1,
                              scale:   isHovered ? 1.13 : 1,
                              filter:  isBlurred ? "blur(3px)" : "blur(0px)",
                            }}
                            transition={{
                              opacity: { duration: 0.18 },
                              scale:   { type: "spring", stiffness: 380, damping: 22 },
                              filter:  { duration: 0.18 },
                            }}
                            whileTap={{ scale: 0.94 }}
                            onMouseEnter={() => setHoveredId(service.id as ServiceId)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => openDetail(service.id as ServiceId)}
                            className="flex cursor-pointer items-center justify-center rounded-2xl border border-black/[0.12] dark:border-white/20 bg-[var(--background)]/50 backdrop-blur-sm h-[clamp(2.8rem,4.2vw,4.5rem)] w-[clamp(2.8rem,4.2vw,4.5rem)]"
                          >
                            <div className="h-[clamp(1.1rem,1.7vw,1.85rem)] w-[clamp(1.1rem,1.7vw,1.85rem)] text-[var(--foreground)]/75">
                              {service.icon}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Hover text */}
                    <div className="flex w-full flex-1 items-center justify-center pt-6 sm:pt-8">
                      <div className="max-w-[520px] sm:max-w-[580px] md:max-w-[640px] text-center">
                        <AnimatePresence mode="wait">
                          {hoverContent ? (
                            <motion.div
                              key={`${hoveredId}-${activeTabId}`}
                              initial={{ opacity: 0, y: 14 }}
                              animate={{ opacity: 1, y: 0  }}
                              exit={{    opacity: 0, y: -10 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="space-y-3 sm:space-y-4"
                            >
                              <h2 className="font-display text-[1.9rem] leading-[0.9] tracking-[-0.02em] text-[var(--foreground)] sm:text-[2.3rem] md:text-[2.7rem]">
                                {hoverContent.heading}
                              </h2>
                              <p className="font-ui text-[13px] leading-relaxed text-[var(--muted)] sm:text-[14px] md:text-[15px]">
                                {hoverContent.lines[0]}
                              </p>
                              <p className="font-ui text-[12px] leading-relaxed text-[var(--muted)]/65 sm:text-[13px]">
                                {hoverContent.lines[1]}
                              </p>
                            </motion.div>
                          ) : (
                            <motion.p
                              key="idle"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{    opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="font-ui text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]/40"
                            >
                              Hover to explore · Click to open
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Tab labels */}
                  <div className="absolute left-0 right-0 top-0 z-10 flex h-12 sm:h-14 md:h-16">
                    {TABS.map((tab, index) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => { setActiveIndex(index as 0 | 1); setHoveredId(null); }}
                        className="flex flex-1 cursor-pointer items-center justify-center"
                      >
                        <span className={`font-ui text-[12px] uppercase tracking-[0.22em] transition-colors duration-200 sm:text-[13px] md:text-[14px] ${activeIndex === index ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}>
                          {tab.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── DETAIL VIEW ── */}
              {selectedService !== null && activePresentationTab === null && (
                <motion.div
                  key="detail"
                  custom={slideDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Gooey filter layer — background colour blocks only, never receives pointer events */}
                  <div style={{ filter: "url(#studio-goo)", pointerEvents: "none" }} className="flex h-full flex-col">
                    <div className="flex w-full shrink-0">
                      {SERVICE_TABS.map((tab) => (
                        <div key={tab.id} className="relative h-12 flex-1 sm:h-14 md:h-16">
                          {activeDetailTab === tab.id && (
                            <motion.div
                              layoutId="detail-tab-bg"
                              className="absolute inset-0 bg-[var(--folder-bg)]"
                              transition={{ type: "spring", bounce: 0, duration: 0.36 }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 w-full bg-[var(--folder-bg)]" />
                  </div>

                  {/* Tab labels overlay — sits on top, unfiltered */}
                  <div className="absolute left-0 right-0 top-0 z-10 flex h-12 sm:h-14 md:h-16">
                    {SERVICE_TABS.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveDetailTab(tab.id)}
                        className="flex flex-1 cursor-pointer items-center justify-center"
                      >
                        <span className={`font-ui text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 sm:text-[11px] md:text-[12px] ${
                          activeDetailTab === tab.id
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted)]"
                        }`}>
                          {tab.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Content overlay — unfiltered, always above gooey layer */}
                  <div className="absolute left-0 right-0 bottom-0 top-12 sm:top-14 md:top-16 z-20 flex flex-col">
                    {/* Custom / AI mini toggle — top-right of content area */}
                    <div className="flex justify-end px-5 sm:px-7 md:px-9 pt-4 sm:pt-5">
                      <div className="flex items-center gap-[3px] rounded-full border border-[var(--line)] bg-[var(--background)]/40 p-[3px] backdrop-blur-sm">
                        {TABS.map((tab, i) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveIndex(i as 0 | 1)}
                            className={`rounded-full px-3 py-1 font-ui text-[9px] uppercase tracking-[0.18em] transition-colors duration-200 sm:text-[10px] ${
                              activeIndex === i
                                ? "bg-[var(--foreground)] text-[var(--background)]"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preview content */}
                    <div className="flex flex-1 items-center justify-center p-5 sm:p-7 md:p-9">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeDetailTab + activeTabId}
                          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                          animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                          exit={{    opacity: 0, y: -10, filter: "blur(6px)" }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="w-full"
                        >
                          {activeTabId === "ai" && activeDetailTab === "presentation"
                            ? <AIPresentationCards onSelect={(id) => { setSlideDir(1); setActivePresentationTab(id); }} />
                            : PREVIEWS[activeDetailTab]
                          }
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── PRESENTATION SUB VIEW ── */}
              {activePresentationTab !== null && (
                <motion.div
                  key="presentation-sub"
                  custom={slideDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Gooey filter layer */}
                  <div style={{ filter: "url(#studio-goo)", pointerEvents: "none" }} className="flex h-full flex-col">
                    <div className="flex w-full shrink-0">
                      {PRESENTATION_SUB_TABS.map((tab) => (
                        <div key={tab.id} className="relative h-12 flex-1 sm:h-14 md:h-16">
                          {activePresentationTab === tab.id && (
                            <motion.div
                              layoutId="presentation-sub-tab-bg"
                              className="absolute inset-0 bg-[var(--folder-bg)]"
                              transition={{ type: "spring", bounce: 0, duration: 0.36 }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 w-full bg-[var(--folder-bg)]" />
                  </div>

                  {/* Tab labels overlay */}
                  <div className="absolute left-0 right-0 top-0 z-10 flex h-12 sm:h-14 md:h-16">
                    {PRESENTATION_SUB_TABS.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActivePresentationTab(tab.id)}
                        className="flex flex-1 cursor-pointer items-center justify-center px-1"
                      >
                        <span className={`font-ui text-[7px] uppercase tracking-[0.08em] transition-colors duration-200 sm:text-[8px] sm:tracking-[0.12em] md:text-[9px] md:tracking-[0.16em] text-center leading-tight ${
                          activePresentationTab === tab.id
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted)]"
                        }`}>
                          {tab.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="absolute left-0 right-0 bottom-0 top-12 sm:top-14 md:top-16 z-20 overflow-y-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePresentationTab ?? "empty"}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{    opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      >
                        {activePresentationTab === "generate" && <GenerateChatbox />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>

          {/* Generated slides — rendered below the folder, dynamically grows */}
          {activePresentationTab !== null && (
            <div className="w-full max-w-[1160px]">
              {/* Slide previews will be injected here by the API integration */}
            </div>
          )}
        </div>
      </div>
    </AuroraBackground>
  );
}
