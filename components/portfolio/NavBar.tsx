"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "Visão", href: "#vision" },
  { label: "Princípios", href: "#principles" },
  { label: "Execução", href: "#execution" },
  { label: "Contato", href: "#contact" },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      aria-label="Navegação principal"
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-sm border-[var(--border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest hidden sm:block">
          VS
        </span>
        <ul className="flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-1.5 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 rounded hover:bg-[var(--secondary)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

