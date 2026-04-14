# PitchWorx — AI Context File
# Read this before touching any code. It is the source of truth.

---

## 1. What this project is

A **single-screen, animation-first landing page** for PitchWorx.

- Built with: Next.js 14 (App Router), Tailwind CSS, Framer Motion
- The animation IS the product — not a wrapper around content
- Inspired by: ChronicleHQ, Apple landing pages, high-end portfolio sites
- No vertical scrolling. Everything happens within `100dvh`.

---

## 2. Current file structure (canonical)

```
src/
  app/
    layout.tsx          # Root layout — fonts, no-flicker theme script
    page.tsx            # Entry → renders <HomeLanding />
    globals.css         # CSS variables, typography utilities, paper grid
  components/
    home/
      HomeLanding.tsx   # Single-screen shell: background, SiteNavbar, HeroStage
      HeroStage.tsx     # 3-phase animated card gallery (THE hero animation)
      ProjectCard.tsx   # Pure presentational card component
      arc-layout.ts     # Utility: getArcStyle(index, total) → arc positions
      index.ts          # Barrel: exports HomeLanding only
    navigation/
      site-navbar.tsx   # Fixed top navbar: logo, nav actions, theme toggle
```

### Critical rules
- **One implementation only.** No lowercase/duplicate variants.
- **PascalCase** for all component files.
- **No dead code**, no unused files, no unused exports.
- `index.ts` exports only `HomeLanding` — nothing else needs barrel access.

---

## 3. Hero animation system (DO NOT break this)

`HeroStage.tsx` runs a 3-phase sequence:

### Phase 1 — Entry (0 → ~1200ms)
- Lead card starts at `y: 100vh, scale: 0.88, rotate: -4`
- Spring with slight overshoot: `stiffness: 110, damping: 10`
- Animates to center, fills frame

### Phase 2 — Pause (~1200ms → ~2200ms)
- Lead card rests at center — intentional ~800ms editorial hold
- Nothing changes visually

### Phase 3 — Arc expansion (~2200ms → ∞)
- Lead card fades + scales down and exits via `AnimatePresence`
- 7 gallery cards fan out from center using `getArcStyle(index, 7)`
- Stagger delay: `index * 0.06s` for spreading feel
- Mouse parallax: slow-follow spring, depth-based per card
- Hover: hovered card `scale: 1.05`, siblings `filter: blur(3px)`

### Accessibility
- `useReducedMotion()` → skips to phase 3 immediately, no stagger, no parallax

---

## 4. Arc layout utility (`arc-layout.ts`)

`getArcStyle(index, total)` returns `{ x, y, rotate, scale, zIndex }`:

| Property | Range         | Logic                                     |
|----------|---------------|-------------------------------------------|
| `x`      | −28vw … +28vw | Linear, vw units (responsive)             |
| `y`      | parabolic     | `(t² − 1) × 10vh` — center up, edges neutral |
| `rotate` | −12° … +12°   | Linear from `t × 12`                      |
| `scale`  | 0.94 … 1.0    | `1 − |t| × 0.06`                         |
| `zIndex` | 1 … 10        | Center on top                             |

`t` = normalised position: `(index − mid) / mid` → −1 … +1

**Do not change spread or parabola constants without checking mobile layout.**
At 28vw spread, edge cards at 375px viewport width are close to the edge.

---

## 5. Theme system

- CSS variables on `:root` and `html[data-theme="dark"]` in `globals.css`
- `layout.tsx` has an inline `<script>` that runs before React hydrates:
  reads `localStorage.getItem('pitchworx-theme')`, falls back to
  `prefers-color-scheme`, sets `document.documentElement.dataset.theme`
- `SiteNavbar` handles toggle: writes to `localStorage`, calls `applyTheme()`
- **No flicker.** Do not move or remove the inline script in `layout.tsx`.

Color tokens available in Tailwind via `var()`:
- `--background`, `--foreground`, `--muted`, `--line`
- `--surface`, `--surface-strong`, `--surface-soft`, `--surface-soft-alt`
- `--spot-a` (cool), `--spot-b` (warm)
- `--grid-line` (for the paper grid)

---

## 6. Design system

### Typography
- `font-ui` class → Geist Sans (UI labels, nav, captions)
- `font-display` class → Halant (display/card titles)

### Spacing
- 4px/8px grid. Use Tailwind scale.

### Cards (`ProjectCard`)
- Rounded: `rounded-[20px]`
- Backdrop blur + frosted glass: `bg-white/84 backdrop-blur-xl`
- Shadow: `shadow-[0_22px_60px_rgba(18,18,18,0.18)]`
- Hover shadow elevation via CSS transition (not Framer Motion)
- Scale on hover handled by parent motion wrapper in `HeroStage`

### Performance
- `style={{ willChange: "transform" }}` on every animated card wrapper
- GPU-friendly: only transform + opacity + filter animated
- No layout-triggering properties in animations

---

## 7. SiteNavbar behaviour

- `position: fixed`, `z-index: 40`, full width, pointer-events managed
- Logo top-left: "PitchWorx" → links to "/"
- Desktop nav (hidden on mobile): Get Started, Pricing, Contact, About, Login, Theme toggle
- Mobile: hamburger "Menu/Close" + theme toggle
- Panels (Pricing, About, Login) slide in below nav via `AnimatePresence`
- Theme toggle persists to `localStorage` key `'pitchworx-theme'`

---

## 8. What NOT to do

- **No scrolling sections** — this is not a multi-section site
- **No text hero / split-column layout** — animation fills the whole screen
- **No duplicate component files** — one canonical file per component
- **No lowercase filenames** for components — PascalCase only
- **No CSS `overflow: hidden` on `html` or `body`** — causes mobile clipping
  (overflow is handled at the `<section>` level in `HomeLanding.tsx`)
- **Do not remove `suppressHydrationWarning`** from `<html>` — needed for theme
- **Do not remove the inline theme script** in `layout.tsx` — causes flicker
- **Do not add `home.data.ts` back** — data lives directly in component files
- **Do not change arc spread > 28vw** without testing on 375px viewport

---

## 9. Adding new content / extending the project

### To add a new project card to the gallery
1. Add the image to `/placeholder_images/` (or a future `/public/images/`)
2. Import the image in `HeroStage.tsx`
3. Add an entry to `galleryProjects[]`
4. Update `TOTAL` if you change the count
5. `getArcStyle` adapts automatically to any `total`

### To add a new nav panel (e.g. "Portfolio")
1. Add a key to `NavPanel` union type in `site-navbar.tsx`
2. Add copy to `panelCopy` object
3. Add a `<NavAction>` button in the desktop and mobile nav sections

### To add a new page
1. Create `src/app/[slug]/page.tsx`
2. The fixed `SiteNavbar` is not included automatically — render it in the new layout or page

---

## 10. Mental model

> This is not a website. It is an interactive product demo — a motion-driven
> experience. Think of every frame like a campaign still: sculpted type,
> restrained movement, and a conversion path that feels editorial.

When in doubt: **simplicity + premium feel > features**.
