const etapas = [
  {
    titulo: "Descoberta",
    texto:
      "Defino o que precisa ser resolvido e para quem, antes de qualquer discussão sobre tecnologia. A etapa se encerra com o escopo documentado e acordado — inclusive o que ficará de fora.",
  },
  {
    titulo: "Arquitetura",
    texto:
      "Determino a origem dos dados, seu percurso e onde serão persistidos. Revisar essa estrutura agora custa uma fração do que custaria na terceira semana de implementação.",
  },
  {
    titulo: "Implementação",
    texto:
      "Entrego incrementos funcionais de ponta a ponta, em vez de partes isoladas que só se integram ao final. Isso permite validar, testar e corrigir a direção com antecedência.",
  },
  {
    titulo: "Refinamento",
    texto:
      "O uso real revela o que nenhuma previsão alcança. Retomo então o que apresenta lentidão, o fluxo que gera dúvida e o cenário que não havia sido mapeado.",
  },
];

export default function Etapas() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell">
        <ol className="grid gap-px overflow-hidden rounded-panel border border-white/8 bg-white/8 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, indice) => (
            <li
              key={etapa.titulo}
              className="flex flex-col gap-5 bg-ink-900 p-8 transition-colors hover:bg-ink-850 md:p-10"
            >
              <span
                aria-hidden
                className="font-mono text-sm text-accent-400/70"
              >
                {String(indice + 1).padStart(2, "0")}
              </span>

              <h2 className="text-2xl font-semibold tracking-tight">
                {etapa.titulo}
              </h2>

              <p className="text-sm leading-relaxed">{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
