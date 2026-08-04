const frentes = [
  {
    com: "Com design",
    texto:
      "Sinalizo o custo de implementação antes que o layout seja aprovado e proponho alternativas equivalentes no resultado visual. Entrego então o que foi acordado, com fidelidade ao projeto original.",
  },
  {
    com: "Com produto e negócio",
    texto:
      "Traduzo demandas em escopo mensurável. Quando uma solicitação exige três semanas para resolver uma fração do problema, isso é comunicado antes do início — não na retrospectiva.",
  },
  {
    com: "Com quem vai manter depois",
    texto:
      "Deixo README, nomenclatura coerente e o registro das decisões tomadas. O código pertence ao projeto, e alguém precisará compreendê-lo sem a minha presença.",
  },
];

export default function Colaboracao() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <p className="eyebrow">Colaboração</p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Como colaboro com o time
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed">
            Atuo na intersecção entre o que foi projetado, o que o negócio
            precisa e o que a plataforma comporta. Na prática, isso significa
            antecipar as perguntas difíceis.
          </p>
        </div>

        <dl className="flex flex-col">
          {frentes.map((frente) => (
            <div
              key={frente.com}
              className="border-t border-white/8 py-8 first:border-t-0 first:pt-0"
            >
              <dt className="font-mono text-xs text-accent-300">{frente.com}</dt>
              <dd className="mt-4 max-w-xl leading-relaxed">{frente.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
