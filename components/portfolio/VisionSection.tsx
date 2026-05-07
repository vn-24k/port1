export function VisionSection() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="border-b border-border max-w-6xl mx-auto px-6 py-16 md:py-28"
    >
      {/* Rótulo da Seção */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-[10px] sm:text-xs text-accent tracking-[0.2em] uppercase">
          01 / Visão
        </span>
        <div className="flex-1 h-px bg-border/60" />
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">
        {/* Declaração Principal */}
        <div className="max-w-2xl">
          <h2
            id="vision-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-[1.15]"
          >
            Engenharia focada no <br className="hidden md:block" />
            <span className="text-accent">comportamento do sistema</span> sob carga.
          </h2>
          
          <div className="mt-10 pl-6 border-l-2 border-accent/40 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Sistemas distribuídos falham de maneiras previsíveis: contenção de locks em camadas de I/O
              síncrono, propagação descontrolada de falhas por ausência de circuit-breaking e gargalos
              causados por acoplamento rígido.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              O foco é projetar e refatorar essas superfícies de falha — convertendo latência p99 degradada 
              em arquiteturas observáveis e horizontalmente escaláveis, sem sacrificar a corretude dos dados.
            </p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-medium italic">
              "Cada decisão é justificada por restrições mensuráveis de SLO, não por preferência tecnológica."
            </p>
          </div>
        </div>

        {/* Terminal de Diagnóstico */}
        <aside
          aria-label="Diagnóstico técnico"
          className="w-full shrink-0 border border-border rounded-xl overflow-hidden shadow-2xl shadow-accent/5 bg-card"
        >
          {/* Header do Terminal */}
          <div className="bg-secondary/50 px-4 py-3 flex items-center justify-between border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground tracking-tight">
              diagnose_system.sh
            </span>
          </div>

          {/* Conteúdo do Terminal */}
          <div className="p-5 font-mono text-[11px] leading-relaxed bg-card/80 backdrop-blur-sm">
            <div className="flex gap-2 mb-4">
              <span className="text-accent">❯</span>
              <span className="text-foreground">run analysis --target=production</span>
            </div>
            
            <div className="space-y-3">
              {[
                { label: "LATENCY_P99", value: "850ms → 210ms", color: "text-emerald-500" },
                { label: "AVAILABILITY", value: "99.5% → 99.95%", color: "text-emerald-500" },
                { label: "LOCK_CONTENTION", value: "DECREASED_70%", color: "text-accent" },
                { label: "THROUGHPUT", value: "+340% GAIN", color: "text-emerald-500" },
                { label: "INFRA_COST", value: "-62% OPTIMIZED", color: "text-amber-500" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-muted-foreground/60 text-[9px] uppercase tracking-tighter">
                    {stat.label}
                  </span>
                  <span className={`font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-accent animate-pulse">■</span>
              <span className="text-[9px] text-muted-foreground">STATUS: OPTIMIZED</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
