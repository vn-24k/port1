"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "Visão", href: "#vision" },
  { label: "Princípios", href: "#principles" },
  { label: "Execução", href: "#execution" },
  { label: "Contato", href: "#contact" },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Usando 20px para uma transição mais imediata ao iniciar o scroll
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      aria-label="Navegação principal"
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-0"
          : "bg-transparent border-transparent py-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Monograma */}
        <a 
          href="#" 
          className="font-mono text-xs font-bold tracking-tighter text-foreground hover:text-accent transition-colors"
        >
          <span className="text-accent">/</span>VS_
        </a>

        {/* Links de Navegação */}
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-1.5 font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground hover:bg-secondary/50 rounded-md transition-all duration-200"
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
