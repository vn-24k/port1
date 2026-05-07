const principles = [
  {
    index: "P1",
    title: "Observabilidade antes de otimização",
    commitment:
      "Nenhuma otimização de latência ou throughput é realizada sem instrumentação prévia de traces distribuídos, métricas de RED (Rate, Errors, Duration) e rastreamento de causalidade entre serviços.",
    rationale:
      "Otimizações cegas geram acoplamento acidental entre componentes. Toda intervenção deve ser precedida por evidência empírica de onde o sistema se deforma sob carga — não por hipóteses.",
    tags: ["OpenTelemetry", "Distributed Tracing", "SLO/SLI", "RED Metrics"],
  },
  {
    index: "P2",
    title: "Consistência eventual como padrão, forte como exceção",
    commitment:
      "Arquiteturas geo-distribuídas partem do pressuposto de consistência eventual (BASE) para maximizar disponibilidade e tolerância a partições. Consistência forte (ACID) é aplicada apenas onde a integridade transacional é invariante de negócio demonstrável.",
    rationale:
      "Forçar consistência forte em operações que tolerariam divergência temporária penaliza disponibilidade desnecessariamente — violando o Teorema CAP sem ganho proporcional para o usuário final.",
    tags: ["CAP Theorem", "CRDTs", "Saga Pattern", "Event Sourcing"],
  },
  {
    index: "P3",
    title: "Falha é primeiro cidadão do design",
    commitment:
      "Cada componente do sistema é projetado com seu modo de falha explicitamente documentado: circuit-breakers com thresholds calibrados por SLO, bulkheads para isolamento de pool de threads, e dead-letter queues com semântica de retry idempotente.",
    rationale:
      "Sistemas resilientes não evitam falhas — eles as contêm. A ausência de limites de isolamento transforma falhas pontuais em cascatas que consomem toda a capacidade operacional do cluster.",
    tags: ["Circuit Breaker", "Bulkhead", "Idempotency", "DLQ"],
  },
]

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="border-b border-[var(--border)] bg-[var(--card)]"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
            02 / Princípios de Engenharia
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Layout Visual Suggestion:
            Três cartões em grid de colunas (lg:grid-cols-3), cada um com
            número de princípio em fonte mono grande como elemento decorativo
            de fundo (opacity-5), título, parágrafo de compromisso, parágrafo
            de raciocínio e pills de tags técnicas na base. */}

        <h2 id="principles-heading" className="sr-only">
          Princípios de Engenharia
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p) => (
            <article
              key={p.index}
              className="relative flex flex-col gap-5 border border-[var(--border)] rounded-lg p-7 bg-[var(--background)] overflow-hidden hover:border-[var(--accent-border)] transition-colors duration-200 group"
            >
              {/* Index watermark */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 font-mono text-6xl font-bold text-[var(--foreground)] opacity-[0.04] select-none group-hover:opacity-[0.07] transition-opacity duration-300 leading-none"
              >
                {p.index}
              </span>

              {/* Index badge */}
              <span className="font-mono text-xs text-[var(--accent)] tracking-widest">
                {p.index}
              </span>

              {/* Title */}
              <h3 className="text-base font-sans font-semibold text-[var(--foreground)] text-pretty leading-snug">
                {p.title}
              </h3>

              {/* Commitment */}
              <div className="flex-1 space-y-3">
                <p className="text-sm text-[var(--foreground)] leading-relaxed font-sans">
                  {p.commitment}
                </p>
                <div className="h-px bg-[var(--border)]" />
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed font-sans italic">
                  {p.rationale}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded font-mono text-[10px] text-[var(--muted-foreground)] border border-[var(--border)] bg-[var(--secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}