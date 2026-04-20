"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";
type NavPanel = "contact" | null;

const storageKey = "pitchworx-theme";

function applyTheme(nextTheme: ThemeMode) {
  document.documentElement.dataset.theme = nextTheme;
}

function ThemeIcon({ theme }: { theme: ThemeMode }) {
  if (theme === "dark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46" />
    </svg>
  );
}

export function SiteNavbar() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<NavPanel>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const nextTheme: ThemeMode =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : mediaQuery.matches ? "dark" : "light";
    applyTheme(nextTheme);
    setTheme(nextTheme);
    setMounted(true);

    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem(storageKey)) return;
      const systemTheme: ThemeMode = event.matches ? "dark" : "light";
      applyTheme(systemTheme);
      setTheme(systemTheme);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); setActivePanel(null); }
    };
    mediaQuery.addEventListener("change", handlePreferenceChange);
    window.addEventListener("keydown", handleEscape);
    return () => {
      mediaQuery.removeEventListener("change", handlePreferenceChange);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  const togglePanel = (panel: Exclude<NavPanel, null>) => {
    setActivePanel((current) => (current === panel ? null : panel));
    setMenuOpen(false);
  };

  const navLinkClass = "font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center transition-opacity duration-200 hover:opacity-75">
          <span className="font-display text-[1.4rem] font-semibold tracking-tight text-[var(--foreground)] sm:text-[1.6rem] md:text-[1.8rem]">
            Arkin
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 md:flex lg:gap-4 xl:gap-5">
          <Link href="/projects" className={navLinkClass}>Projects</Link>
          <Link href="/connect" className={navLinkClass}>Connect</Link>
          <button
            type="button"
            onClick={() => togglePanel("contact")}
            aria-expanded={activePanel === "contact"}
            className={navLinkClass}
          >
            Contact
          </button>
          <Link href="/about" className={navLinkClass}>About</Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] shadow-[0_12px_30px_rgba(18,18,18,0.06)] backdrop-blur-md transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
          >
            <ThemeIcon theme={theme} />
            <span>{mounted ? theme : "Theme"}</span>
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] shadow-[0_12px_30px_rgba(18,18,18,0.06)] backdrop-blur-md transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            type="button"
            onClick={() => { setMenuOpen((o) => !o); setActivePanel(null); }}
            className="pointer-events-auto font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Contact panel */}
      <AnimatePresence>
        {activePanel === "contact" && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mx-auto mt-1 w-[min(92vw,22rem)] rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_20px_60px_rgba(18,18,18,0.18)] backdrop-blur-xl"
          >
            <p className="font-ui text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
              Get in touch
            </p>
            <h2 className="font-display mt-3 text-2xl leading-[0.92] tracking-[-0.04em] text-[var(--foreground)]">
              Let&apos;s build something.
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="mailto:arkin2005@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 transition-opacity hover:opacity-80"
              >
                <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Email</span>
                <span className="font-ui text-[13px] text-[var(--foreground)]">arkin2005@gmail.com</span>
              </a>
              <a
                href="tel:+919910024492"
                className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 transition-opacity hover:opacity-80"
              >
                <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Phone</span>
                <span className="font-ui text-[13px] text-[var(--foreground)]">+91 9910024492</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mx-5 rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_20px_60px_rgba(18,18,18,0.18)] backdrop-blur-xl sm:mx-8 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <Link href="/projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/connect" className={navLinkClass} onClick={() => setMenuOpen(false)}>Connect</Link>
              <button type="button" onClick={() => togglePanel("contact")} className={`${navLinkClass} text-left`}>Contact</button>
              <Link href="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</Link>
            </div>
            <AnimatePresence>
              {activePanel === "contact" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 flex flex-col gap-2 overflow-hidden"
                >
                  <a href="mailto:arkin2005@gmail.com" className="font-ui text-[12px] text-[var(--foreground)]">arkin2005@gmail.com</a>
                  <a href="tel:+919910024492" className="font-ui text-[12px] text-[var(--foreground)]">+91 9910024492</a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
