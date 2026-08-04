const experiencias = [
  {
    periodo: "2025 — 2026",
    cargo: "Analista de Operações Jr.",
    texto:
      "Analiso dados operacionais e redesenho processos que consumiam tempo produtivo da equipe. Foi nessa função que consolidei o hábito de investigar o propósito antes de propor a solução.",
    atual: true,
  },
  {
    periodo: "2024 — 2025",
    cargo: "Desenvolvimento Web & Suporte de T.I.",
    texto:
      "Desenvolvi interfaces e atuei no atendimento técnico simultaneamente. A rotina de corrigir falhas em produção ensina, com rapidez, a construir sistemas que não falham.",
    atual: false,
  },
];

export default function Trajetoria() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <p className="eyebrow">Trajetória</p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Formação e experiência
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed">
            Sou graduada em Análise e Desenvolvimento de Sistemas. As duas
            experiências abaixo explicam, melhor do que a formação, a maneira
            como abordo um problema.
          </p>
        </div>

        <ol className="relative border-l border-white/10 pl-8">
          {experiencias.map((item) => (
            <li key={item.periodo} className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className={`absolute -left-[2.15rem] top-1.5 size-2.5 rounded-full ring-4 ring-ink-900 ${
                  item.atual ? "bg-accent-400" : "bg-ink-600"
                }`}
              />

              <p className="font-mono text-xs text-faint">{item.periodo}</p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {item.cargo}
              </h3>

              <p className="mt-3 max-w-md leading-relaxed">{item.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
