import { identity, socialLinks } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative px-6 sm:px-10 py-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)]">
              Let's build something reliable.
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)] max-w-md">
              Open to backend-leaning full-stack roles and select freelance systems work.
            </p>
          </div>
          <div className="flex flex-col gap-1 font-mono text-sm">
            <a href={`mailto:${identity.email}`} className="text-[var(--color-ink)] hover:text-[var(--color-indigo-soft)] transition">
              {identity.email}
            </a>
            <a href={`tel:${identity.phone}`} className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition">
              {identity.phone}
            </a>
            <span className="text-[var(--color-ink-faint)]">{identity.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-8 border-t border-white/8">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] transition"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--color-ink-faint)]">
          © {new Date().getFullYear()} {identity.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
