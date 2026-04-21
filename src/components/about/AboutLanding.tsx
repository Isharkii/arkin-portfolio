"use client";

import { motion } from "framer-motion";
import { AuroraBackgroundFixed } from "@/components/ui/aurora-background";

const stats = [
  { value: "1M+",   label: "Requests / month" },
  { value: "92%",   label: "NLP accuracy"      },
  { value: "18→2%", label: "LLM error rate"    },
  { value: "7.92",  label: "CGPA / 10"          },
];

export default function AboutLanding() {
  return (
    <div className="min-h-screen w-full">
      <AuroraBackgroundFixed showRadialGradient />
      <div aria-hidden className="pointer-events-none fixed left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none fixed bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />
      <div aria-hidden className="bg-paper-grid pointer-events-none fixed inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[860px] px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-8 md:py-[120px]">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.05, ease: "easeOut" }}
          className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
        >
          About
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
        >
          AI · ML Engineer
          <br />
          <em>building things that scale.</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
          className="mt-8 h-px w-full bg-[var(--line)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.24, ease: "easeOut" }}
          className="font-ui mt-8 max-w-[600px] text-[clamp(13px,1.1vw,16px)] leading-[1.75] text-[var(--muted)]"
        >
          I&apos;m Arkin Sharma — an AI/ML engineer specialising in scalable backend
          systems and intelligent pipelines. I build production-grade NLP systems,
          LLM pipelines, and high-throughput APIs. Currently finishing my B.Tech in
          AI/ML at Manipal University Jaipur (May 2026).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.32, ease: "easeOut" }}
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-[clamp(1.4rem,2.5vw,2.4rem)] leading-none tracking-[-0.03em] text-[var(--foreground)]">
                {stat.value}
              </span>
              <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="mt-12 h-px w-full bg-[var(--line)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.46, ease: "easeOut" }}
          className="mt-10 pb-16"
        >
          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">Education</p>
          <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-5">
            <h3 className="font-display text-[clamp(1.1rem,1.8vw,1.5rem)] leading-none tracking-[-0.03em] text-[var(--foreground)]">
              Manipal University Jaipur
            </h3>
            <p className="font-ui mt-2 text-[12px] leading-[1.7] text-[var(--muted)]">
              B.Tech — Artificial Intelligence & Machine Learning · May 2026 · CGPA 7.92/10
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
