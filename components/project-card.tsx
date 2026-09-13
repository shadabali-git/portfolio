"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";
import { ProjectDrawer } from "@/components/project-drawer";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="glass-panel group rounded-[var(--radius-card)] p-6 text-left flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-[var(--color-ink)]">{project.name}</h3>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-ink-faint)] transition group-hover:text-[var(--color-indigo-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="mt-2.5 text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] rounded-[var(--radius-chip)] border border-white/10 px-2 py-1 text-[var(--color-ink-faint)]"
          >
            {t}
          </span>
        ))}
      </div>

      {project.github && (
        <div className="mt-4 flex items-center gap-1.5 text-xs text-[var(--color-ink-faint)]">
          <Github className="h-3.5 w-3.5" />
          source available
        </div>
      )}
    </motion.button>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section id="projects" className="relative px-6 sm:px-10 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)]">
            Things that shipped
          </h2>
          <p className="mt-3 text-[var(--color-ink-muted)] max-w-xl">
            Open any card for the full write-up, stack, and links. From production APIs to weekend builds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onOpen={(proj) => {
                setActive(proj);
                setDrawerOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <ProjectDrawer project={active} open={drawerOpen} onOpenChange={setDrawerOpen} />
    </section>
  );
}
