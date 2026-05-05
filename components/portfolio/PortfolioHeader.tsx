"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/vn-24k",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/viniciusilva-dev",
    icon: Linkedin,
  },
  {
    label: "imports.vclb@gmail.com",
    href: "mailto:imports.vclb@gmail.com",
    icon: Mail,
  },
  {
    label: "+55 11 91089-6158",
    href: "tel:+5511910896158",
    icon: Phone,
  },
]

export function PortfolioHeader() {
  return (
    <header className="relative border-b border-[var(--border)] bg-[var(--background)]">
      {/* Top bar */}
      <div className="border-b border-[var(--border-subtle)] px-6 py-2 flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest uppercase">
          portfolio.vinicius-silva.dev
        </span>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          v1.0.0
        </span>
      </div>

      {/* Main header content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col gap-6">
          {/* Status pill */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] text-xs font-mono text-[var(--accent)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Disponível para oportunidades
            </span>
          </div>

          {/* Name */}
          <div>
            <h1 className="text-4xl md:text-6xl font-sans font-semibold tracking-tight text-[var(--foreground)] text-balance leading-none">
              Vinícius Silva
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--accent)]" />
              <p className="font-mono text-sm text-[var(--accent)] tracking-wider uppercase">
                Software Engineer · Systems Architecture
              </p>
            </div>
          </div>

          {/* Contact links */}
          <nav aria-label="Contact links" className="flex flex-wrap gap-4 mt-2">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 group"
                >
                  <Icon
                    size={13}
                    className="text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors duration-150"
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

