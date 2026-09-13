"use client";

import { useEffect, useState } from "react";
import { Command } from "lucide-react";
import { identity } from "@/lib/portfolio-data";

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-30 flex justify-center px-4">
      <div
        className={`flex items-center gap-6 rounded-full px-5 py-2.5 transition-all ${
          scrolled ? "glass-panel shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : "border border-transparent"
        }`}
      >
        <a href="#home" className="text-sm font-medium text-[var(--color-ink)]">
          {identity.name.split(" ")[0]}
        </a>
        <nav className="hidden sm:flex items-center gap-5">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() =>
            document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
          }
          className="flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-xs text-[var(--color-ink-faint)] hover:border-white/25 transition"
        >
          <Command className="h-3 w-3" />
          <span className="hidden sm:inline">K</span>
        </button>
      </div>
    </header>
  );
}
