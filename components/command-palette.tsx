"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { commandItems } from "@/lib/portfolio-data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const groups = Array.from(new Set(commandItems.map((c) => c.group)));

  const go = (href: string, external?: boolean) => {
    setOpen(false);
    if (external) {
      window.open(href, "_blank", "noreferrer");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg glass-panel rounded-[var(--radius-card)] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
          >
            <Command label="Command palette" className="bg-transparent">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Search className="h-4 w-4 text-[var(--color-ink-faint)]" />
                <Command.Input
                  autoFocus
                  placeholder="Jump to a section, project, or profile..."
                  className="w-full bg-transparent py-0.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none"
                />
                <kbd className="hidden sm:block rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-mono text-[var(--color-ink-faint)]">
                  esc
                </kbd>
              </div>
              <Command.List className="max-h-80 overflow-y-auto thin-scroll p-2">
                <Command.Empty className="py-8 text-center text-sm text-[var(--color-ink-faint)]">
                  No matches.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="px-2 py-1 text-xs text-[var(--color-ink-faint)] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2"
                  >
                    {commandItems
                      .filter((c) => c.group === group)
                      .map((c) => (
                        <Command.Item
                          key={c.id}
                          value={`${c.group} ${c.label}`}
                          onSelect={() => go(c.href, c.external)}
                          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-[var(--color-ink)] cursor-pointer data-[selected=true]:bg-white/[0.07]"
                        >
                          {c.label}
                        </Command.Item>
                      ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
