"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const experience = [
  {
    company: "REBEE.AI",
    role: "Backend & AI/ML Engineer",
    period: "2025",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
    points: [
      { label: "What", text: "Built a transformer-based NLP pipeline to summarise and extract structured data from resumes at scale." },
      { label: "How", text: "Fine-tuned BERT with spaCy NER layers, served via FastAPI with Redis caching for sub-50ms response times." },
      { label: "Impact", text: "Achieved 92% extraction accuracy across diverse resume formats, deployed to production." },
    ],
    tech: ["BERT", "spaCy", "FastAPI", "Redis", "HuggingFace", "Python"],
  },
  {
    company: "PitchWorx",
    role: "Backend & LLM Engineer",
    period: "2026",
    gradient: "linear-gradient(135deg, #4a0e3a 0%, #c2185b 100%)",
    points: [
      { label: "What", text: "Engineered a competitor benchmarking engine using LLMs to generate structured analysis outputs." },
      { label: "How", text: "Built multi-stage LLM validation with Pydantic schemas, prompt engineering, and retry guards. FastAPI microservices handling 1M+ requests/month." },
      { label: "Impact", text: "Reduced malformed LLM output rate from 18% to 2%. Sustained <100ms p99 latency under full load." },
    ],
    tech: ["FastAPI", "LangChain", "Pydantic", "PostgreSQL", "Redis", "Docker"],
  },
];

export default function WorkLanding() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full">
      {/* Right arrow — Skills */}
      <div className="fixed right-8 top-1/2 z-40 -translate-y-1/2">
        <motion.button
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.32, ease: "easeOut" }}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => router.push("/skills")}
          className="group flex flex-col items-center gap-[7px]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] backdrop-blur-md shadow-sm transition-all duration-200 group-hover:border-[var(--foreground)]/20 group-hover:shadow-md">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--foreground)]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </div>
          <span className="font-ui text-[9px] uppercase tracking-[0.24em] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--foreground)]">
            Skills
          </span>
        </motion.button>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[860px] px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-8 md:py-[120px]">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.05, ease: "easeOut" }}
          className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
        >
          Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
        >
          Work
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
          className="mt-8 h-px w-full bg-[var(--line)]"
        />

        <div className="mt-10 flex flex-col gap-6 pb-16">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.24 + i * 0.1, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-[var(--line)]"
            >
              <div className="px-6 py-5" style={{ background: exp.gradient }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-none tracking-[-0.03em] text-white">
                      {exp.company}
                    </h2>
                    <p className="font-ui mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                      {exp.role}
                    </p>
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-ui text-[11px] uppercase tracking-[0.18em] text-white">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="bg-[var(--surface-soft)] px-6 py-5">
                <div className="flex flex-col gap-4">
                  {exp.points.map((point) => (
                    <div key={point.label}>
                      <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                        {point.label}
                      </span>
                      <p className="font-ui mt-1 text-[13px] leading-[1.7] text-[var(--foreground)]">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="rounded-full border border-[var(--line)] px-[10px] py-[4px] font-ui text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
