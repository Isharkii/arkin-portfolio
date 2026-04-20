"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const experience = [
  {
    role: "Backend & AI/ML Engineer",
    company: "REBEE.AI",
    period: "2024",
    points: [
      "Built transformer-based NLP summarization pipeline",
      "Achieved 92% extraction accuracy across resume datasets",
      "Deployed production FastAPI services with Redis caching",
    ],
  },
  {
    role: "Backend & LLM Engineer",
    company: "PitchWorx",
    period: "2024–2025",
    points: [
      "Engineered LLM output validation pipeline",
      "Reduced malformed outputs from 18% → 2%",
      "Optimised FastAPI microservices for 1M+ requests/month",
    ],
  },
];

const skillGroups = [
  {
    label: "AI / ML Systems",
    skills: "PyTorch · TensorFlow · HuggingFace · LangChain · RAG · Prompt Engineering",
  },
  {
    label: "Backend & APIs",
    skills: "FastAPI · Node.js · Express · REST · API Integration",
  },
  {
    label: "Data & NLP",
    skills: "pandas · NumPy · spaCy · NLTK · BERT · GPT",
  },
  {
    label: "Databases",
    skills: "PostgreSQL · MySQL · MongoDB · Redis · Elasticsearch",
  },
  {
    label: "Frontend",
    skills: "React · Next.js · TypeScript · Tailwind CSS",
  },
  {
    label: "Systems & CS",
    skills: "Distributed Systems · OS · Networking · Cryptography",
  },
];

const stats = [
  { value: "1M+",   label: "Requests / month" },
  { value: "92%",   label: "NLP accuracy"      },
  { value: "18→2%", label: "LLM error rate"    },
  { value: "7.92",  label: "CGPA / 10"          },
];

export default function AboutLanding() {
  return (
    <AuroraBackground
      showRadialGradient
      className="!h-auto min-h-[100dvh] w-screen md:!h-auto !bg-[var(--background)] text-[var(--foreground)]"
    >
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />

      <div className="relative w-full px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-16 md:py-[120px]">
        <div className="mx-auto w-full max-w-[860px]">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
          >
            About
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
            className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
          >
            AI · ML Engineer
            <br />
            <em>building things that scale.</em>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
            className="mt-8 h-px w-full bg-[var(--line)]"
          />

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
            className="font-ui mt-8 max-w-[600px] text-[clamp(13px,1.1vw,16px)] leading-[1.75] text-[var(--muted)]"
          >
            I&apos;m Arkin Sharma — an AI/ML engineer specialising in scalable backend
            systems and intelligent pipelines. I build production-grade NLP systems,
            LLM pipelines, and high-throughput APIs at the intersection of ML and
            infrastructure. Currently finishing my B.Tech in AI/ML at Manipal University
            Jaipur (May 2026).
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44, ease: "easeOut" }}
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-0"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.48 + i * 0.07, ease: "easeOut" }}
                className="flex flex-col gap-1"
              >
                <span className="font-display text-[clamp(1.4rem,2.5vw,2.4rem)] leading-none tracking-[-0.03em] text-[var(--foreground)]">
                  {stat.value}
                </span>
                <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-12 h-px w-full bg-[var(--line)]"
          />

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.66, ease: "easeOut" }}
            className="mt-10"
          >
            <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
              Experience
            </p>
            <div className="mt-6 flex flex-col gap-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.72 + i * 0.1, ease: "easeOut" }}
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-[clamp(1.1rem,1.8vw,1.5rem)] leading-none tracking-[-0.03em] text-[var(--foreground)]">
                      {exp.company}
                    </h3>
                    <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-ui mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {exp.role}
                  </p>
                  <ul className="mt-3 flex flex-col gap-[6px]">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="font-ui flex items-start gap-2 text-[clamp(12px,1vw,14px)] leading-[1.65] text-[var(--muted)]"
                      >
                        <span className="mt-[0.45em] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--muted)] opacity-50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="mt-12 h-px w-full bg-[var(--line)]"
          />

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.96, ease: "easeOut" }}
            className="mt-10 pb-16"
          >
            <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
              Skills
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 1.0 + i * 0.07, ease: "easeOut" }}
                  className="rounded-2xl border border-[var(--line)] bg-white/40 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--foreground)]">
                    {group.label}
                  </p>
                  <p className="font-ui mt-2 text-[12px] leading-[1.7] text-[var(--muted)]">
                    {group.skills}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.44, ease: "easeOut" }}
              className="mt-6 rounded-2xl border border-[var(--line)] bg-white/40 px-5 py-4 backdrop-blur-sm"
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--foreground)]">
                Education
              </p>
              <p className="font-display mt-2 text-[clamp(1rem,1.6vw,1.3rem)] leading-none tracking-[-0.02em] text-[var(--foreground)]">
                Manipal University Jaipur
              </p>
              <p className="font-ui mt-1 text-[12px] leading-[1.6] text-[var(--muted)]">
                B.Tech — Artificial Intelligence & Machine Learning · May 2026 · CGPA 7.92/10
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </AuroraBackground>
  );
}
