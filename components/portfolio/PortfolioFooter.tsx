import { Github, Linkedin, Mail, Phone } from "lucide-react"

const contactItems = [
  {
    label: "Email",
    value: "imports.vclb@gmail.com",
    href: "mailto:imports.vclb@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp / Telefone",
    value: "+55 11 91089-6158",
    href: "tel:+5511910896158",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "viniciusilva-dev",
    href: "https://www.linkedin.com/in/viniciusilva-dev",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "vn-24k",
    href: "https://github.com/vn-24k",
    icon: Github,
  },
]

export function PortfolioFooter() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: CTA */}
          <div className="space-y-4">
            <h2 className="text-xl font-sans font-semibold text-[var(--foreground)] text-pretty">
              Vamos falar sobre o seu sistema.
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-sm font-sans">
              Se o seu stack enfrenta problemas de latência, gargalos de throughput, cascatas de falha
              ou custo de infra desproporcional ao volume — é exatamente o tipo de problema que
              esta engenharia resolve.
            </p>
          </div>

          {/* Right: Contact grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 p-4 border border-[var(--border)] rounded-lg bg-[var(--background)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-dim)] transition-all duration-150 group"
                >
                  <Icon
                    size={15}
                    className="mt-0.5 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors duration-150 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-150">
                      {item.value}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            Vinícius Silva · Software Engineer
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            {new Date().getFullYear()} · Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}

