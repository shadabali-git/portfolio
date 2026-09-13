"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectDrawer({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-[var(--color-base-raised)] border-l border-white/10 p-8 overflow-y-auto thin-scroll"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between gap-4">
                  <Dialog.Title className="text-2xl font-medium text-[var(--color-ink)] leading-snug">
                    {project.name}
                  </Dialog.Title>
                  <Dialog.Close className="rounded-full p-1.5 hover:bg-white/10 transition shrink-0">
                    <X className="h-4 w-4 text-[var(--color-ink-muted)]" />
                  </Dialog.Close>
                </div>

                {project.metric && (
                  <p className="mt-3 font-mono text-xs text-[var(--color-emerald-soft)]">
                    {project.metric}
                  </p>
                )}

                <Dialog.Description className="mt-5 text-sm text-[var(--color-ink)]/80 leading-relaxed">
                  {project.longDescription}
                </Dialog.Description>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs rounded-[var(--radius-chip)] border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[var(--color-ink)]/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  {(project.live || project.demo) && (
                    <a
                      href={project.live ?? project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-indigo)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-indigo-soft)] transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open live demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-4 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-white/[0.05] transition"
                    >
                      <Github className="h-4 w-4" />
                      View source
                    </a>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
