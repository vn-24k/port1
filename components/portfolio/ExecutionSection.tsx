const projects = [
  {
    id: "01",
    domain: "Message Queue · Async I/O",
    title: "Refatoração de Pipeline de Consumo de Eventos",
    challenge:
      "Um sistema de processamento de pedidos consumia uma fila de mensagens usando um pool de 40 workers com I/O bloqueador síncrono. Sob picos de 12k req/min, a contenção de locks entre threads elevava a latência p99 para 850ms.",
    decision:
      "Substituição do modelo threading-por-mensagem por um event loop assíncrono com async/await, eliminando a contenção de locks ao serializar o acesso ao estado compartilhado sem bloqueio.",
    impact: "Latência p99 reduzida de 850ms para 210ms. Taxa de re-delivery caiu de 4.2% para 0.08%. Throughput aumentou 340% sem escalonamento horizontal.",
    metrics: [
      { label: "Latência p99", before: "850ms", after: "210ms" },
      { label: "Re-delivery Rate", before: "4.2%", after: "0.08%" },
      { label: "Throughput", before: "baseline", after: "+340%" },
    ],
    stack: ["Node.js", "RabbitMQ", "async/await", "Prometheus"],
  },
  // ... demais projetos seguem a mesma estrutura
]

export function ExecutionSection() {
  return (
    <section
      id="execution"
      aria-labelledby="execution-heading"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-b border-border"
    >
      {/* Rótulo da Seção */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-[10px] sm:text-xs text-accent tracking-[0.2em] uppercase">
          03 / Execução · Prova de Trabalho
        </span>
        <div className="flex-1 h-px bg-border/60" />
      </div>

      <h2 id="execution-heading" className="sr-only">
        Execução e Prova de Trabalho
      </h2>

      <div className="space-y-12">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 bg-card/30"
          >
            {/* Header do Projeto */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 border-b border-border bg-card/50">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {project.id}
                </span>
                <div className="h-3 w-px bg-border" />
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider font-semibold">
                  {project.domain}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md font-mono text-[9px] text-muted-foreground border border-border bg-secondary/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid de Conteúdo */}
            <div className="grid lg:grid-cols-[1fr_300px] divide-y lg:divide-y-0 lg:divide-x divide-border">
              {/* Coluna Narrativa */}
              <div className="p-6 sm:p-8 space-y-8 bg-background/50">
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {project.title}
                </h3>

                {/* Grid de Etapas: Desafio -> Decisão -> Impacto */}
                <div className="space-y-6">
                  {/* Desafio */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-accent uppercase tracking-widest">Desafio</span>
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Seta Decorativa */}
                  <div className="flex justify-center py-1">
                    <div className="h-4 w-px bg-gradient-to-b from-border to-transparent" />
                  </div>

                  {/* Decisão */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-amber-500/80 uppercase tracking-widest">Decisão & Trade-off</span>
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      {project.decision}
                    </p>
                  </div>

                  <div className="flex justify-center py-1">
                    <div className="h-4 w-px bg-gradient-to-b from-border to-transparent" />
                  </div>

                  {/* Impacto */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest font-bold">Impacto Final</span>
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna de Métricas */}
              <aside className="p-6 sm:p-8 bg-card/20 flex flex-col gap-6">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Key Performance</span>
                  <p className="text-[10px] text-muted-foreground/60 italic">Before vs. After</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="group/metric p-3 rounded-lg border border-border/40 bg-background/30 hover:border-accent/20 transition-colors">
                      <span className="block font-mono text-[9px] text-muted-foreground uppercase mb-2">
                        {m.label}
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-muted-foreground/50 line-through">
                          {m.before}
                        </span>
                        <svg className="text-accent/40" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-mono text-sm font-bold text-emerald-500">
                          {m.after}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
