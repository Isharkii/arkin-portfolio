"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const skillGroups = [
  {
    label: "AI / ML Systems",
    skills: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "RAG", "Prompt Engineering"],
    gradient: "linear-gradient(135deg, #2d1b69 0%, #7b2ff7 100%)",
  },
  {
    label: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "Express", "REST", "API Integration", "Microservices"],
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)",
  },
  {
    label: "Data & NLP",
    skills: ["pandas", "NumPy", "spaCy", "NLTK", "BERT", "GPT", "Transformers"],
    gradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    gradient: "linear-gradient(135deg, #052e16 0%, #16a34a 100%)",
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
  },
  {
    label: "Systems & CS",
    skills: ["Distributed Systems", "OS", "Networking", "Cryptography", "Docker", "Linux"],
    gradient: "linear-gradient(135deg, #4a0e3a 0%, #c2185b 100%)",
  },
];

export default function SkillsLanding() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full">
      {/* Left arrow — Work */}
      <div className="fixed left-8 top-1/2 z-40 -translate-y-1/2">
        <motion.button
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.55, ease: "easeOut" }}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => router.push("/work")}
          className="group flex flex-col items-center gap-[7px]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] backdrop-blur-md shadow-sm transition-all duration-200 group-hover:border-[var(--foreground)]/20 group-hover:shadow-md">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--foreground)]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 8H3M7 4L3 8l4 4" />
            </svg>
          </div>
          <span className="font-ui text-[9px] uppercase tracking-[0.24em] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--foreground)]">
            Work
          </span>
        </motion.button>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[860px] px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-8 md:py-[120px]">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
        >
          Stack
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
          className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
        >
          Skills
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
          className="mt-8 h-px w-full bg-[var(--line)]"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.34 + i * 0.08, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-[var(--line)]"
            >
              <div className="px-5 py-4" style={{ background: group.gradient }}>
                <h2 className="font-display text-[clamp(1rem,1.5vw,1.2rem)] leading-none tracking-[-0.03em] text-white">
                  {group.label}
                </h2>
              </div>
              <div className="bg-[var(--surface-soft)] px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--line)] px-[10px] py-[5px] font-ui text-[11px] tracking-[0.08em] text-[var(--foreground)]"
                    >
                      {skill}
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
