"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { identity } from "@/lib/portfolio-data";
import { TerminalWidget } from "@/components/terminal-widget";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 px-6 sm:px-10">
      <div className="ambient-glow" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[var(--color-ink-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-emerald)] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-emerald)]" />
            </span>
            {identity.status}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.08] tracking-tight text-[var(--color-ink)]"
          >
            {identity.name}, {identity.role}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-[var(--color-ink-muted)] leading-relaxed"
          >
            {identity.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-indigo)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-indigo-soft)]"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-white/[0.05]"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-10 text-sm font-mono text-[var(--color-ink-faint)]">
            {identity.location} · press <kbd className="rounded border border-white/15 px-1.5 py-0.5">⌘</kbd>
            <kbd className="ml-1 rounded border border-white/15 px-1.5 py-0.5">K</kbd> to jump anywhere
          </motion.p>
        </div>

        <motion.div variants={item} className="flex justify-center lg:justify-end">
          <TerminalWidget />
        </motion.div>
      </motion.div>
    </section>
  );
}
