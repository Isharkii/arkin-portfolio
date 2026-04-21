"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackgroundFixed } from "@/components/ui/aurora-background";

const inputClass =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 font-ui text-[13px] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none transition-colors duration-150 focus:border-[var(--muted)] focus:bg-[var(--surface)]";

export default function ContactLanding() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Arkin,\n\n${message}\n\n— ${name}`;
    const url = `mailto:arkin2005@gmail.com?subject=${encodeURIComponent(subject || "Hello from your portfolio")}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen w-full">
      <AuroraBackgroundFixed showRadialGradient />
      <div aria-hidden className="pointer-events-none fixed left-[-8%] top-[-10%] h-[clamp(12rem,26vw,28rem)] w-[clamp(12rem,26vw,28rem)] rounded-full bg-[var(--spot-b)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none fixed bottom-[-12%] right-[-6%] h-[clamp(10rem,20vw,22rem)] w-[clamp(10rem,20vw,22rem)] rounded-full bg-[var(--spot-a)] opacity-40 blur-3xl" />
      <div aria-hidden className="bg-paper-grid pointer-events-none fixed inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[700px] px-6 py-[100px] sm:px-10 sm:py-[110px] md:px-8 md:py-[120px]">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.05, ease: "easeOut" }}
          className="font-ui text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]"
        >
          Get in touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="font-display mt-4 text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.88] tracking-[-0.03em] text-[var(--foreground)]"
        >
          Let&apos;s build something.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
          className="mt-8 h-px w-full bg-[var(--line)]"
        />

        {/* Direct contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24, ease: "easeOut" }}
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <a
            href="mailto:arkin2005@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4 transition-opacity duration-150 hover:opacity-75"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 text-[var(--muted)]" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Email</p>
              <p className="font-ui mt-0.5 truncate text-[12px] text-[var(--foreground)]">arkin2005@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+919910024492"
            className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4 transition-opacity duration-150 hover:opacity-75"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 text-[var(--muted)]" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.87 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.99 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Phone</p>
              <p className="font-ui mt-0.5 text-[12px] text-[var(--foreground)]">+91 9910024492</p>
            </div>
          </a>
        </motion.div>

        {/* Email compose form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.32, ease: "easeOut" }}
          className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)]"
        >
          <div className="border-b border-[var(--line)] px-5 py-4" style={{ background: "linear-gradient(135deg, #1a1035 0%, #2d1b69 60%, #4a1c96 100%)" }}>
            <p className="font-ui text-[10px] uppercase tracking-[0.26em] text-white/70">Send a message</p>
            <p className="font-display mt-1 text-[clamp(1rem,1.6vw,1.2rem)] leading-snug tracking-[-0.02em] text-white">
              Opens in your email client
            </p>
          </div>

          <form onSubmit={handleSend} className="flex flex-col gap-3 bg-[var(--surface-soft)] p-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Collaboration opportunity"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Arkin, I'd love to work together on..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--surface-contrast)] transition-opacity duration-150 hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Send via email
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
