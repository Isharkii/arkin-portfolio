"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const projects = [
  {
    id: "scraper",
    title: "Multi-threaded Web Scraper",
    eyebrow: "Systems · Concurrency",
    problem: "Scraping large-scale web datasets with high fault tolerance and concurrency.",
    solution:
      "Built a multi-threaded async scraper with circuit breakers, retry logic, and Redis-backed deduplication.",
    tech: ["Python", "asyncio", "Redis", "Circuit Breakers", "BeautifulSoup"],
    metric: "99.5% reliability",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
  },
  {
    id: "rl",
    title: "RL Training Framework",
    eyebrow: "Reinforcement Learning",
    problem: "No unified framework for rapid experimentation with custom RL environments.",
    solution:
      "Designed a gym-compatible RL framework with modular policy networks, replay buffers, and training loops.",
    tech: ["PyTorch", "OpenAI Gym", "TensorFlow", "NumPy", "Matplotlib"],
    metric: "Custom gym-compatible env",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #4a1c96 60%, #7b2ff7 100%)",
  },
  {
    id: "rebee",
    title: "LLM Resume Summarizer",
    eyebrow: "REBEE.AI · NLP",
    problem:
      "Resume parsing had low accuracy — rule-based systems missed contextual information.",
    solution:
      "Deployed a BERT-based NLP pipeline with structured extraction layers and FastAPI serving.",
    tech: ["BERT", "HuggingFace", "spaCy", "FastAPI", "Transformers"],
    metric: "92% extraction accuracy",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 60%, #ea580c 100%)",
  },
  {
    id: "pitchworx",
    title: "Competitor Benchmarking Engine",
    eyebrow: "PitchWorx · LLM",
    problem:
      "LLM-generated structured outputs had 18% malformation rate causing downstream failures.",
    solution:
      "Built a multi-stage validation pipeline with Pydantic schemas, prompt engineering, and retry guards.",
    tech: ["FastAPI", "LangChain", "Pydantic", "OpenAI API", "PostgreSQL"],
    metric: "18% → 2% error rate",
    gradient: "linear-gradient(135deg, #4a0e3a 0%, #8b1a6b 60%, #c2185b 100%)",
  },
  {
    id: "network",
    title: "Network Diagnostics Lab",
    eyebrow: "Systems · Networking",
    problem:
      "Debugging packet loss, DNS failures, and routing issues required manual toolchain setup.",
    solution:
      "Built an automated diagnostic toolkit for packet capture, DNS trace, latency mapping, and route analysis.",
    tech: ["Python", "Scapy", "Wireshark", "Linux", "TCP/IP", "DNS"],
    metric: "Full-stack network debugger",
    gradient: "linear-gradient(135deg, #052e16 0%, #166534 60%, #16a34a 100%)",
  },
  {
    id: "api",
    title: "Scalable API Platform",
    eyebrow: "Backend · Infrastructure",
    problem:
      "Processing high-volume API traffic with <100ms p99 latency under sustained load.",
    solution:
      "Engineered FastAPI microservices with Redis caching, Nginx load balancing, and Postgres connection pooling.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Nginx", "Pydantic"],
    metric: "1M+ requests/month · <100ms",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0ea5e9 100%)",
  },
];

export default function ProjectsLanding() {
  return (
    <AuroraBackground
      showRadialGradient
      className="!h-auto min-h-[100dvh] w-screen !bg-[var(--background)] text-[var(--foreground)]"
    >
      <div aria-hidden className="bg-paper-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />

      <div className="relative w-full px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-16 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1060px]">

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

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.34 + i * 0.07, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[20px] border border-[var(--line)] bg-white/60 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(18,18,18,0.14)]"
              >
                {/* Gradient accent bar */}
                <div
                  className="h-[5px] w-full"
                  style={{ background: project.gradient }}
                />

                <div className="p-5">
                  <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {project.eyebrow}
                  </p>
                  <h2 className="font-display mt-2 text-[clamp(1.1rem,1.6vw,1.35rem)] leading-[1.0] tracking-[-0.03em] text-[var(--foreground)]">
                    {project.title}
                  </h2>

                  {/* Metric badge */}
                  <div
                    className="mt-3 inline-block rounded-full px-3 py-1"
                    style={{ background: project.gradient, opacity: 0.9 }}
                  >
                    <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-white">
                      {project.metric}
                    </span>
                  </div>

                  <div className="mt-4 h-px bg-[var(--line)]" />

                  <div className="mt-4 flex flex-col gap-3">
                    <div>
                      <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] opacity-60">
                        Problem
                      </p>
                      <p className="font-ui mt-1 text-[12px] leading-[1.65] text-[var(--muted)]">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] opacity-60">
                        Solution
                      </p>
                      <p className="font-ui mt-1 text-[12px] leading-[1.65] text-[var(--muted)]">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-[6px]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line)] px-[10px] py-[4px] font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]"
                      >
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
    </AuroraBackground>
  );
}
