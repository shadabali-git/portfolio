"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES: { prompt?: boolean; text: string; color?: string }[] = [
  { prompt: true, text: "curl -s api.docnish.in/v1/status" },
  { text: '{ "service": "docnish-core", "status": "healthy" }', color: "var(--color-emerald-soft)" },
  { prompt: true, text: "GET /auth/otp/verify · rate-limit: redis" },
  { text: "429 throttled after 5 attempts / 10min", color: "var(--color-amber)" },
  { prompt: true, text: "role.check(agent) → RBAC" },
  { text: "granted: [read:docs, write:appointments]", color: "var(--color-indigo-soft)" },
  { prompt: true, text: "leetcode --solved --lang=cpp" },
  { text: "650+ problems solved", color: "var(--color-emerald-soft)" },
];

export function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const delay = LINES[visibleLines]?.prompt ? 550 : 350;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="glass-panel rounded-[var(--radius-card)] overflow-hidden w-full max-w-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-[var(--color-ink-faint)]">
          shadab@systems — zsh
        </span>
      </div>
      <div className="p-4 font-mono text-[13px] leading-relaxed h-64 thin-scroll overflow-y-auto">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-1.5"
          >
            {line.prompt ? (
              <span>
                <span className="text-[var(--color-indigo-soft)]">❯</span>{" "}
                <span className="text-[var(--color-ink)]">{line.text}</span>
              </span>
            ) : (
              <span style={{ color: line.color ?? "var(--color-ink-muted)" }} className="pl-4 block">
                {line.text}
              </span>
            )}
          </motion.div>
        ))}
        {visibleLines < LINES.length && (
          <span className="inline-block w-2 h-3.5 bg-[var(--color-ink-muted)] animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}
