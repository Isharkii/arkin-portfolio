"use client";

import { motion } from "framer-motion";

const profiles = [
  {
    id: "github",
    label: "GitHub",
    handle: "Isharkii",
    description: "Source code, open-source projects, and personal experiments.",
    url: "https://github.com/Isharkii",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "arkin-sharma-8b359b327",
    description: "Professional background, experience, and career updates.",
    url: "https://www.linkedin.com/in/arkin-sharma-8b359b327/",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0ea5e9 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "leetcode",
    label: "LeetCode",
    handle: "Isharkii",
    description: "Algorithm practice, problem-solving, and competitive programming.",
    url: "https://leetcode.com/u/Isharkii/",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 60%, #ea580c 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function ConnectLanding() {
  return (
    <div className="min-h-screen w-full">
      <div className="relative z-10 mx-auto w-full max-w-[700px] px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-8 md:py-[120px]">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.05, ease: "easeOut" }}
          className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
        >
          Find me online
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
        >
          Connect
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
          className="mt-8 h-px w-full bg-[var(--line)]"
        />

        <div className="mt-10 flex flex-col gap-4 pb-16">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.24 + i * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-[var(--line)] transition-opacity duration-150 hover:opacity-80"
            >
              <div className="flex items-center gap-4 px-6 py-5" style={{ background: profile.gradient }}>
                <div className="text-white">{profile.icon}</div>
                <div>
                  <h2 className="font-display text-[clamp(1.1rem,1.8vw,1.4rem)] leading-none tracking-[-0.03em] text-white">
                    {profile.label}
                  </h2>
                  <p className="font-ui mt-1 text-[11px] tracking-[0.08em] text-white/70">
                    @{profile.handle}
                  </p>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-white/70 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="bg-[var(--surface-soft)] px-6 py-4">
                <p className="font-ui text-[13px] leading-[1.65] text-[var(--muted)]">
                  {profile.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
}
