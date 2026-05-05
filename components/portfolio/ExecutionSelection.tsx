const projects = [
  {
    id: "01",
    domain: "Message Queue · Async I/O",
    title: "Refatoração de Pipeline de Consumo de Eventos",
    challenge:
      "Um sistema de processamento de pedidos consumia uma fila de mensagens usando um pool de 40 workers com I/O bloqueador síncrono. Sob picos de 12k req/min, a contenção de locks entre threads elevava a latência p99 para 850ms, com timeouts de ACK causando re-delivery em cascata e duplicação de eventos downstream.",
    decision:
      "Substituição do modelo threading-por-mensagem por um event loop assíncrono com async/await, eliminando a contenção de locks ao serializar o acesso ao estado compartilhado sem bloqueio. O trade-off foi aceitar maior complexidade de rastreamento de erros em corrotinas em troca de throughput previsível e isolamento de falha por partição de tópico.",
    impact: "Latência p99 reduzida de 850ms para 210ms. Taxa de re-delivery caiu de 4.2% para 0.08%. Throughput aumentou 340% sem escalonamento horizontal de infra.",
    metrics: [
      { label: "Latência p99", before: "850ms", after: "210ms" },
      { label: "Re-delivery Rate", before: "4.2%", after: "0.08%" },
      { label: "Throughput", before: "baseline", after: "+340%" },
    ],
    stack: ["Node.js", "RabbitMQ", "async/await", "Prometheus"],
  },
  {
    id: "02",
    domain: "API Gateway · Resiliência",
    title: "Circuit-Breaking em Gateway de Integração com Parceiros Externos",
    challenge:
      "Um gateway de integração B2B com 14 parceiros externos não possuía isolamento de falha entre chamadas de terceiros. A degradação de um único parceiro com timeout de 30s saturava o pool de conexões HTTP, elevando a taxa de erro global do gateway de 0.1% para 38% em cascata — afetando operações sem dependência alguma do parceiro falhando.",
    decision:
      "Implementação de um circuit-breaker por parceiro com estado de CLOSED/OPEN/HALF-OPEN calibrado por SLO individual: threshold de 5 falhas em 10s para abertura, janela de half-open de 15s, e bulkhead de thread-pool isolado por parceiro para conter o blast radius. A decisão de usar bulkheads em vez de rate-limiting puro foi motivada pela necessidade de limitar consumo de memória de conexões abertas, não apenas a taxa de requisições.",
    impact: "Disponibilidade do gateway aumentou de 99.5% para 99.94% em janela de 30 dias. Cascatas de falha eliminadas: falha de parceiro individual limitada a 0.7% do tráfego total. MTTR reduzido de 18min para 45s via auto-recovery do half-open state.",
    metrics: [
      { label: "Disponibilidade", before: "99.50%", after: "99.94%" },
      { label: "Blast Radius", before: "38% de erro global", after: "0.7%" },
      { label: "MTTR", before: "18 min", after: "45 s" },
    ],
    stack: ["TypeScript", "Resilience4j patterns", "Prometheus", "Kubernetes"],
  },
  {
    id: "03",
    domain: "Data Pipeline · Custo",
    title: "Re-arquitetura de Pipeline ETL para Processamento Incremental",
    challenge:
      "Um pipeline ETL de relatórios financeiros re-processava a totalidade do dataset histórico a cada execução diária — 480GB por ciclo — resultando em janela de processamento de 6h, custo de compute de R$4.200/mês e indisponibilidade de relatórios em horário comercial. A causa raiz era ausência de controle de watermark e ausência de particionamento por data nas tabelas de staging.",
    decision:
      "Introdução de watermark timestamp por fonte de dados, particionamento por ingestão-date nas tabelas de staging, e substituição do full-scan por processamento incremental com merge de deltas. O trade-off aceito foi a necessidade de idempotência explícita nas transformações (upsert com chave composta) para garantir corretude em re-runs parciais sem re-processar partições limpas.",
    impact: "Volume processado por ciclo reduzido de 480GB para 12GB médios (−97.5%). Janela de processamento caiu de 6h para 22min. Custo mensal de compute reduzido de R$4.200 para R$1.600 (−62%), com relatórios disponíveis às 06h00 sem downtime.",
    metrics: [
      { label: "Volume/Ciclo", before: "480 GB", after: "12 GB" },
      { label: "Duração do Job", before: "6h", after: "22 min" },
      { label: "Custo Mensal", before: "R$ 4.200", after: "R$ 1.600" },
    ],
    stack: ["Python", "Apache Spark", "dbt", "BigQuery", "Airflow"],
  },
]

export function ExecutionSection() {
  return (
    <section
      id="execution"
      aria-labelledby="execution-heading"
      className="border-b border-[var(--border)] max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
          03 / Execução · Prova de Trabalho
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Layout Visual Suggestion:
          Cartões de projeto em coluna única, cada um com layout interno
          de três linhas horizontais separadas por divisores: [Desafio] →
          seta → [Decisão/Trade-off] → seta → [Impacto]. À direita de cada
          cartão, um mini-painel de métricas com before/after em tabela.
          Numeração de projeto como elemento decorativo estilo timeline. */}

      <h2 id="execution-heading" className="sr-only">
        Execução e Prova de Trabalho
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent-border)] transition-colors duration-200 group"
          >
            {/* Project header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-7 py-5 border-b border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[var(--muted-foreground)] tabular-nums">
                  {project.id}
                </span>
                <div className="h-4 w-px bg-[var(--border)]" />
                <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                  {project.domain}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-mono text-[10px] text-[var(--muted-foreground)] border border-[var(--border)] bg-[var(--secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project body */}
            <div className="grid lg:grid-cols-[1fr_280px] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
              {/* Narrative */}
              <div className="px-7 py-7 space-y-6 bg-[var(--background)]">
                <h3 className="text-lg font-sans font-semibold text-[var(--foreground)] text-pretty leading-snug">
                  {project.title}
                </h3>

                {/* Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest">
                      Desafio Técnico
                    </span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-sans">
                    {project.challenge}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-[var(--border)]">
                  <div className="h-px flex-1 bg-[var(--border)]" />
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="h-px flex-1 bg-[var(--border)]" />
                </div>

                {/* Decision */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[oklch(0.72_0.15_85)] uppercase tracking-widest">
                      Decisão · Trade-off
                    </span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-sans">
                    {project.decision}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-[var(--border)]">
                  <div className="h-px flex-1 bg-[var(--border)]" />
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="h-px flex-1 bg-[var(--border)]" />
                </div>

                {/* Impact */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[oklch(0.65_0.19_145)] uppercase tracking-widest">
                      Impacto Quantificado
                    </span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed font-sans">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Metrics panel */}
              <aside
                aria-label="Métricas do projeto"
                className="px-6 py-7 bg-[var(--card)] flex flex-col gap-5"
              >
                <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest">
                  Métricas
                </span>
                <div className="space-y-4 flex-1">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="space-y-1.5">
                      <span className="block font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider">
                        {m.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-[oklch(0.55_0_0)] line-through decoration-[oklch(0.65_0.22_25)/50]">
                          {m.before}
                        </span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M1 6h10M7 2l4 4-4 4" stroke="oklch(0.65 0.19 145)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-mono text-sm font-semibold text-[oklch(0.65_0.19_145)]">
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
 
