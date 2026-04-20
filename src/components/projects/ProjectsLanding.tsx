"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "scraper",
    title: "Multi-threaded Web Scraper",
    eyebrow: "Systems · Concurrency",
    problem: "Scraping large-scale datasets required high fault tolerance and true concurrency.",
    solution: "Async scraper with circuit breakers, retry logic, and Redis-backed deduplication.",
    tech: ["Python", "asyncio", "Redis", "Circuit Breakers"],
    metric: "99.5% reliability",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
  },
  {
    id: "rl",
    title: "RL Training Framework",
    eyebrow: "Reinforcement Learning",
    problem: "No unified framework for rapid experimentation with custom RL environments.",
    solution: "Gym-compatible RL framework with modular policy networks and replay buffers.",
    tech: ["PyTorch", "OpenAI Gym", "TensorFlow", "NumPy"],
    metric: "Custom gym env",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #4a1c96 60%, #7b2ff7 100%)",
  },
  {
    id: "rebee",
    title: "LLM Resume Summarizer",
    eyebrow: "REBEE.AI · NLP",
    problem: "Rule-based parsers missed contextual resume information, yielding low accuracy.",
    solution: "BERT-based NLP pipeline with structured extraction layers and FastAPI serving.",
    tech: ["BERT", "HuggingFace", "spaCy", "FastAPI"],
    metric: "92% accuracy",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 60%, #ea580c 100%)",
  },
  {
    id: "pitchworx",
    title: "Competitor Benchmarking Engine",
    eyebrow: "PitchWorx · LLM",
    problem: "LLM-generated structured outputs had 18% malformation rate causing failures.",
    solution: "Multi-stage validation pipeline with Pydantic schemas and prompt engineering.",
    tech: ["FastAPI", "LangChain", "Pydantic", "OpenAI"],
    metric: "18% → 2% errors",
    gradient: "linear-gradient(135deg, #4a0e3a 0%, #8b1a6b 60%, #c2185b 100%)",
  },
  {
    id: "network",
    title: "Network Diagnostics Lab",
    eyebrow: "Systems · Networking",
    problem: "Debugging packet loss and DNS failures required tedious manual toolchain setup.",
    solution: "Automated diagnostic toolkit for packet capture, DNS trace, and route analysis.",
    tech: ["Python", "Scapy", "Wireshark", "Linux"],
    metric: "Full-stack debugger",
    gradient: "linear-gradient(135deg, #052e16 0%, #166534 60%, #16a34a 100%)",
  },
  {
    id: "api",
    title: "Scalable API Platform",
    eyebrow: "Backend · Infrastructure",
    problem: "High-volume traffic required <100ms p99 latency under sustained load.",
    solution: "FastAPI microservices with Redis caching, Nginx load balancing, connection pooling.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Nginx"],
    metric: "1M+ req/month · <100ms",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0ea5e9 100%)",
  },
];

export default function ProjectsLanding() {
  return (
    <div className="min-h-screen w-full bg-[var(--background)]">
      <div aria-hidden className="pointer-events-none fixed left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none fixed bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />
      <div aria-hidden className="bg-paper-grid pointer-events-none fixed inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1060px] px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-8 md:py-[120px]">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
        >
          Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
          className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
        >
          Selected Projects
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
          className="mt-8 h-px w-full bg-[var(--line)]"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34 + i * 0.07, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-[var(--line)]"
            >
              {/* Gradient header */}
              <div className="p-5" style={{ background: project.gradient }}>
                <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">
                  {project.eyebrow}
                </p>
                <h2 className="font-display mt-2 text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.05] tracking-[-0.03em] text-white">
                  {project.title}
                </h2>
                <span className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 font-ui text-[10px] uppercase tracking-[0.18em] text-white">
                  {project.metric}
                </span>
              </div>

              {/* Content */}
              <div className="bg-[var(--surface-soft)] p-5">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Problem</p>
                    <p className="font-ui mt-1 text-[12px] leading-[1.65] text-[var(--muted)]">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Solution</p>
                    <p className="font-ui mt-1 text-[12px] leading-[1.65] text-[var(--muted)]">{project.solution}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-[6px]">
                  {project.tech.map((t) => (
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
