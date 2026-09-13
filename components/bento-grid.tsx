"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import {
  metrics,
  skills,
  skillCategories,
  achievements,
  education,
  type SkillCategory,
} from "@/lib/portfolio-data";

export function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filteredSkills =
    activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="stats" className="relative px-6 sm:px-10 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)]">
            Numbers and the stack behind them
          </h2>
          <p className="mt-3 text-[var(--color-ink-muted)] max-w-xl">
            Competitive-programming reps, the toolkit they're built on, and where the credentials come from.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
          {/* Metrics — 4 small tiles */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-panel rounded-[var(--radius-card)] p-5 flex flex-col justify-between"
            >
              <span className="font-mono text-2xl sm:text-3xl text-[var(--color-ink)]">{m.value}</span>
              <div>
                <p className="text-sm font-medium text-[var(--color-ink)] mt-3">{m.label}</p>
                <p className="text-xs text-[var(--color-ink-faint)] mt-0.5">{m.detail}</p>
              </div>
            </motion.div>
          ))}

          {/* Skill chips — wide tile spanning 2 cols on lg */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-[var(--radius-card)] p-6 col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <p className="text-sm font-medium text-[var(--color-ink)]">Core stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(["All", ...skillCategories] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-[var(--radius-chip)] px-3 py-1.5 text-xs transition border ${
                    activeCategory === cat
                      ? "bg-[var(--color-indigo)] border-[var(--color-indigo)] text-white"
                      : "border-white/10 text-[var(--color-ink-muted)] hover:border-white/25"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {filteredSkills.map((s) => (
                <motion.span
                  key={s.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-xs rounded-[var(--radius-chip)] border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[var(--color-ink)]/85"
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Achievements — tall tile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-panel rounded-[var(--radius-card)] p-6 col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
              <Trophy className="h-4 w-4 text-[var(--color-amber)]" />
              Achievements
            </div>
            <ul className="mt-4 flex flex-col gap-4">
              {achievements.map((a) => (
                <li key={a.title}>
                  <p className="text-sm text-[var(--color-ink)]">{a.title}</p>
                  <p className="text-xs text-[var(--color-ink-faint)] mt-1 leading-relaxed">{a.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education — wide tile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="glass-panel rounded-[var(--radius-card)] p-6 col-span-2 lg:col-span-4"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
              <GraduationCap className="h-4 w-4 text-[var(--color-indigo-soft)]" />
              Education
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {education.map((e) => (
                <div key={e.institution} className="rounded-lg border border-white/8 p-4">
                  <p className="text-sm text-[var(--color-ink)]">{e.degree}</p>
                  <p className="text-xs text-[var(--color-ink-muted)] mt-1">{e.institution}</p>
                  <div className="mt-2 flex items-center justify-between font-mono text-xs text-[var(--color-ink-faint)]">
                    <span>{e.duration}</span>
                    <span>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
