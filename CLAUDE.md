# PitchWorx — Claude Code Instructions

Read `AI_CONTEXT.md` first. This file is a quick-reference for Claude Code.

---

## Project identity

Single-screen, animation-first landing page. The 3-phase card gallery in
`HeroStage.tsx` is the entire experience. Do not add scroll, sections, or
content-heavy layouts.

---

## Canonical component tree

```
page.tsx
└── HomeLanding.tsx        ← full-screen shell (background + navbar + stage)
    ├── SiteNavbar         ← fixed overlay, theme toggle, nav panels
    └── HeroStage.tsx      ← 3-phase card animation (THE product)
        ├── arc-layout.ts  ← getArcStyle(index, total) positioning utility
        └── ProjectCard    ← pure presentational card
```

---

## Before making any change

1. Confirm the file you are editing is in the canonical tree above.
2. Never create a second version of any component (no lowercase duplicates).
3. Never add scrollable content, text heroes, or split-column layouts.
4. Run `npm run build` mentally — check for unused imports before saving.

---

## Animation rules (do not break)

- Phase 1 → 2 timer: 1200ms
- Phase 2 → 3 timer: 2200ms
- Entry spring: `stiffness: 110, damping: 10` (slight overshoot)
- Gallery spring: `stiffness: 120, damping: 14`
- `useReducedMotion()` → skip to phase 3, no stagger, no parallax
- `willChange: "transform"` on every animated wrapper
- Arc spread: 28vw max (mobile-safe)

---

## Theme rules (do not break)

- `localStorage` key: `'pitchworx-theme'`
- Theme applied via `document.documentElement.dataset.theme`
- Inline `<script>` in `layout.tsx` prevents flicker — do not remove it
- CSS variables defined in `globals.css` under `:root` and `[data-theme="dark"]`

---

## Naming conventions

| What            | Convention       |
|-----------------|------------------|
| Component files | PascalCase.tsx   |
| Utility files   | kebab-case.ts    |
| CSS classes     | Tailwind only    |
| Font classes     | `font-ui`, `font-display` |
| CSS variables   | `--kebab-case`   |

---

## What already exists (do not recreate)

- `getArcStyle()` in `arc-layout.ts` — use this for all arc positioning
- Theme toggle logic — fully implemented in `SiteNavbar`
- Nav panel system — About / Pricing / Login already wired
- `prefers-reduced-motion` — already handled in `HeroStage`
- No-flicker theme init — already in `layout.tsx`

---

## Common mistakes to avoid

- Adding `overflow: hidden` to `html` or `body` (breaks mobile)
- Removing `suppressHydrationWarning` from `<html>` (theme flicker)
- Creating `home-landing.tsx` or `hero-stage.tsx` (lowercase duplicates)
- Importing from `home.data.ts` (deleted — data lives in components)
- Using `position: fixed` for anything other than `SiteNavbar`
- Animating `width`, `height`, or `margin` (use transform only)
