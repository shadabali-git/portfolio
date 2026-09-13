"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/portfolio-data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative px-6 sm:px-10 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)]">
            Where the work happened
          </h2>
          <p className="mt-3 text-[var(--color-ink-muted)] max-w-xl">
            Three roles, one throughline: building the API and auth layer that other teams build on top of.
          </p>
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {experience.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    entry.current
                      ? "bg-[var(--color-emerald)] border-[var(--color-emerald)]"
                      : "bg-[var(--color-base)] border-white/25"
                  }`}
                />

                <div className="glass-panel rounded-[var(--radius-card)] p-6 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-medium text-[var(--color-ink)]">
                      {entry.role}
                    </h3>
                    <span className="font-mono text-xs text-[var(--color-ink-faint)]">
                      {entry.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                    {entry.company} · {entry.location}
                    {entry.current && (
                      <span className="ml-2 rounded-full bg-[var(--color-emerald)]/10 px-2 py-0.5 text-xs text-[var(--color-emerald-soft)]">
                        current
                      </span>
                    )}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2.5">
                    {entry.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-[var(--color-ink)]/85 leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-indigo-soft)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
