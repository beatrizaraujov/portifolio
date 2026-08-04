const ferramentas = [
  {
    grupo: "Interface",
    itens: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    grupo: "Dados",
    itens: ["TanStack Query", "Supabase", "APIs REST", "Context API"],
  },
  {
    grupo: "Infra",
    itens: ["Git", "Figma", "Vercel", "n8n"],
  },
];

export default function Tech() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div>
          <p className="eyebrow">Stack</p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Tecnologias que utilizo
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed">
            A escolha de cada ferramenta responde ao contexto do projeto, não à
            tendência do momento. Estas são as que domino hoje e cuja adoção
            consigo justificar tecnicamente.
          </p>
        </div>

        <dl className="flex flex-col">
          {ferramentas.map((linha) => (
            <div
              key={linha.grupo}
              className="flex flex-col gap-4 border-t border-white/8 py-7 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <dt className="font-mono text-xs text-faint sm:w-24 sm:shrink-0">
                {linha.grupo}
              </dt>

              <dd className="flex flex-wrap gap-x-6 gap-y-3">
                {linha.itens.map((item) => (
                  <span
                    key={item}
                    className="text-lg font-medium text-chalk md:text-xl"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
