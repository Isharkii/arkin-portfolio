"use client";

/**
 * template.tsx — re-mounts on every navigation in the App Router,
 * which gives Framer Motion a fresh element to animate each time.
 *
 * New pages slide in from the right (direction: ←) with a spring.
 * The navbar lives in layout.tsx (outside this wrapper) so it
 * stays perfectly still while page content transitions.
 */

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // The outer div clips the off-screen translate so no scrollbar
    // appears during the slide-in. body already has overflow-x:hidden
    // but the extra clip here keeps things tidy at the component level.
    <div style={{ overflowX: "hidden" }}>
      <motion.div
        initial={{ x: "100%", opacity: 0.88 }}
        animate={{ x: 0,      opacity: 1 }}
        transition={{
          type:     "spring",
          stiffness: 120,
          damping:   22,
          mass:      0.9,
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
