"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const demos = [
  {
    id: "llm-validator",
    title: "LLM Output Validator",
    description:
      "Paste any JSON output from an LLM and validate it against a Pydantic schema. Highlights malformed fields and suggests fixes.",
    status: "coming-soon",
    gradient: "linear-gradient(135deg, #4a0e3a 0%, #c2185b 100%)",
  },
  {
    id: "resume-summarizer",
    title: "Resume Summarizer",
    description:
      "Upload a resume and get a structured NLP summary — skills, experience, and key metrics extracted with BERT.",
    status: "coming-soon",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
  },
  {
    id: "api-benchmark",
    title: "API Benchmarking Visualizer",
    description:
      "Run latency benchmarks against any public API endpoint. Visualises p50/p95/p99 distributions in real time.",
    status: "coming-soon",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)",
  },
];

export default function PlaygroundLanding() {
  return (
    <AuroraBackground
      showRadialGradient
      className="!h-auto min-h-[100dvh] w-screen !bg-[var(--background)] text-[var(--foreground)]"
    >
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />

      <div className="relative w-full px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-16 md:py-[120px]">
        <div className="mx-auto w-full max-w-[860px]">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
          >
            Playground
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
            className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
          >
            Interactive Demos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="font-ui mt-5 max-w-[520px] text-[clamp(13px,1.1vw,16px)] leading-[1.75] text-[var(--muted)]"
          >
            Live engineering demos — LLM validation, NLP extraction, and API
            benchmarking tools built from real production work.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
            className="mt-8 h-px w-full bg-[var(--line)]"
          />

          <div className="mt-10 flex flex-col gap-4 pb-16">
            {demos.map((demo, i) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.09, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[20px] border border-[var(--line)] bg-white/60 backdrop-blur-sm"
              >
                {/* Left accent bar */}
                <div
                  className="absolute inset-y-0 left-0 w-[4px]"
                  style={{ background: demo.gradient }}
                />

                <div className="flex items-center justify-between px-6 py-5 pl-8">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-display text-[clamp(1rem,1.5vw,1.25rem)] leading-none tracking-[-0.03em] text-[var(--foreground)]">
                      {demo.title}
                    </h2>
                    <p className="font-ui mt-2 max-w-[520px] text-[12px] leading-[1.65] text-[var(--muted)]">
                      {demo.description}
                    </p>
                  </div>
                  <div className="ml-6 shrink-0">
                    <span className="rounded-full border border-[var(--line)] px-3 py-[5px] font-ui text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      Soon
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </AuroraBackground>
  );
}
