/**
 * arc-layout.ts
 *
 * Utility for computing card positions in a horizontal arc gallery.
 *
 * Distribution model (7 cards, indices 0–6):
 *   X:       −28vw … 0 … +28vw  (linear, responsive vw units)
 *   Y:       parabolic — center is elevated, edges drop to baseline
 *   Rotate:  −12deg … 0 … +12deg
 *   Scale:   center = 1.0, edges = 0.94 (center card appears dominant)
 *   zIndex:  center = 10, edges = 1
 */

export type ArcCardStyle = {
  x: string;      // translateX in vw — responsive
  y: string;      // translateY in vh — parabolic lift
  rotate: number; // degrees
  scale: number;  // 0.94 → 1.0
  zIndex: number; // 1 → 10
};

/**
 * Returns transform values for a card at `index` within an arc of `total` cards.
 *
 * @param index  0-based card index
 * @param total  Total number of cards (e.g. 7)
 */
export function getArcStyle(index: number, total: number): ArcCardStyle {
  const mid = (total - 1) / 2;          // 3.0 for 7 cards
  const t = (index - mid) / mid;         // normalised: −1 … +1

  // Horizontal spread: vw-based so it scales with viewport, but capped at
  // ±480px so cards don't drift too far apart on ultrawide screens (2560px+).
  // min()/max() picks the less extreme value depending on sign of t.
  const spreadVw = t * 28;
  const spreadPx = t * 480;
  const x = t > 0
    ? `min(${spreadVw}vw, ${spreadPx}px)`
    : t < 0
      ? `max(${spreadVw}vw, ${spreadPx}px)`
      : "0px";

  // Linear rotation: −12deg at left edge, 0 at center, +12deg at right edge
  const rotate = t * 12;

  // Parabolic Y: f(t) = (t² − 1) × maxLift
  //   f(0)  = −maxLift  → center card lifts up
  //   f(±1) = 0         → edge cards stay at baseline
  const maxLift = 10; // vh
  const y = `${(t * t - 1) * maxLift}vh`;

  // Center card slightly larger; edges subtly smaller
  const scale = 1 - Math.abs(t) * 0.06;

  // z-index: center on top, edges at back
  const zIndex = Math.max(1, Math.round((1 - Math.abs(t)) * 10));

  return { x, y, rotate, scale, zIndex };
}
