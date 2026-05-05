export function VisionSection() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="border-b border-[var(--border)] max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
          01 / Visão
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Layout Visual Suggestion:
          Bloco de texto em largura máxima ~720px, centralizado à esquerda,
          com linha de acento vertical (border-left azul) e tipografia grande.
          No lado direito (md+), um pequeno painel de diagnóstico estilo terminal
          exibindo os pontos de dor como bullet list em fonte mono. */}

      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        {/* Main statement */}
        <div className="max-w-2xl">
          <h2
            id="vision-heading"
            className="text-2xl md:text-3xl font-sans font-medium text-[var(--foreground)] text-pretty leading-relaxed"
          >
            O problema que o sistema resolve
          </h2>
          <div className="mt-6 pl-5 border-l-2 border-[var(--accent)] space-y-4">
            <p className="text-[var(--muted-foreground)] text-base leading-relaxed font-sans">
              Sistemas distribuídos falham de maneiras previsíveis: contenção de locks em camadas de I/O
              síncrono, propagação descontrolada de falhas por ausência de circuit-breaking, e gargalos
              de throughput causados por acoplamento rígido entre produtores e consumidores de mensagens.
            </p>
            <p className="text-[var(--muted-foreground)] text-base leading-relaxed font-sans">
              O foco é projetar e refatorar essas superfícies de falha — convertendo sistemas com latência
              p99 degradada e disponibilidade inconsistente em arquiteturas observáveis, resilientes e
              horizontalmente escaláveis, sem sacrificar a corretude dos dados em trade-offs de consistência.
            </p>
            <p className="text-[var(--muted-foreground)] text-base leading-relaxed font-sans">
              Cada decisão arquitetural é justificada por restrições mensuráveis de SLO, não por preferência
              tecnológica — nenhum componente é adicionado ao sistema sem que seu modo de falha e
              seu impacto no erro de estado global sejam explicitamente modelados.
            </p>
          </div>
        </div>

        {/* Terminal diagnostics panel */}
        <aside
          aria-label="Diagnóstico técnico"
          className="w-full md:w-72 shrink-0 border border-[var(--border)] rounded-lg overflow-hidden"
        >
          <div className="bg-[var(--secondary)] px-4 py-2 flex items-center gap-2 border-b border-[var(--border)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.75_0.20_85)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.19_145)]" />
            <span className="ml-2 font-mono text-xs text-[var(--muted-foreground)]">
              pain_points.sh
            </span>
          </div>
          <div className="p-4 font-mono text-xs leading-6 bg-[var(--card)] space-y-1">
            <p className="text-[var(--muted-foreground)]">
              <span className="text-[var(--accent)]">$</span> diagnose --system
            </p>
            <div className="mt-2 space-y-2 text-[var(--muted-foreground)]">
              {[
                { key: "latency_p99", val: "850ms → 210ms" },
                { key: "lock_contention", val: "40 workers" },
                { key: "availability", val: "99.5% → 99.95%" },
                { key: "throughput_gain", val: "+340%" },
                { key: "infra_cost", val: "−62%" },
              ].map(({ key, val }) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-[oklch(0.55_0_0)]">{key}</span>
                  <span className="text-[var(--foreground)]">{val}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[var(--accent)]">✓ diagnostic complete</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
