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
    <footer className="bg-card/50 border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
          
          {/* Esquerda: Chamada para Ação (CTA) */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                Disponível para novos projetos
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-foreground tracking-tight max-w-md">
              Vamos falar sobre a performance do seu sistema.
            </h2>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Se sua stack enfrenta gargalos de latência, cascatas de falha 
              ou custos de infra desproporcionais — eu projeto a solução técnica 
              para escalar com eficiência.
            </p>
          </div>

          {/* Direita: Grid de Contatos */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 w-full md:w-[450px]">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 border border-border rounded-xl bg-background/50 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-accent/10 transition-colors">
                    <Icon
                      size={16}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-0.5">
                      {item.label}
                    </span>
                    <span className="block font-mono text-xs text-foreground truncate group-hover:text-accent transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Barra Inferior (Copyright) */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-muted-foreground">
              VINÍCIUS SILVA // SOFTWARE ENGINEER
            </span>
            <div className="hidden sm:block h-3 w-px bg-border/60" />
            <span className="hidden sm:block font-mono text-[10px] text-muted-foreground/60 uppercase">
              Stack: Node.js · TypeScript · Go · Cloud
            </span>
          </div>
          
          <span className="font-mono text-[10px] text-muted-foreground/60">
            {new Date().getFullYear()} © SYSTEM_NOMAD_PROTOCOL
          </span>
        </div>
      </div>
    </footer>
  )
}
