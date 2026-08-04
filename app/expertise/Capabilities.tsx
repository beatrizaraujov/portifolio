import { Layers, Database, Gauge } from "lucide-react";

const areas = [
  {
    icon: Layers,
    titulo: "Interfaces web",
    texto:
      "Desenvolvo aplicações em Next.js com estilização em Tailwind. Componentes de responsabilidade única, estado no escopo adequado e uma arquitetura de pastas previsível para qualquer pessoa do time.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    titulo: "Estado e dados",
    texto:
      "Conduzo todo o percurso entre a API e a interface: estados de carregamento, tratamento de falhas e estratégia de cache. TanStack Query atende a maior parte dos casos; a Context API permanece reservada ao que é genuinamente simples.",
    tags: ["TanStack Query", "Zustand", "Context API"],
  },
  {
    icon: Gauge,
    titulo: "Performance",
    texto:
      "Meço antes de otimizar. Monitoro os Core Web Vitals, reduzo o JavaScript enviado ao cliente e adio o carregamento do que não é essencial à primeira interação.",
    tags: ["Web Vitals", "Lighthouse", "Code splitting"],
  },
];

export default function Capabilities() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell">
        <p className="eyebrow">Áreas de atuação</p>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Três frentes que conduzo com autonomia
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {areas.map((area) => {
            const Icone = area.icon;

            return (
              <article
                key={area.titulo}
                className="card flex flex-col gap-5 p-8"
              >
                <Icone size={22} strokeWidth={1.5} className="text-accent-300" />

                <h3 className="text-lg font-semibold tracking-tight">
                  {area.titulo}
                </h3>

                <p className="flex-1 text-sm leading-relaxed">{area.texto}</p>

                <ul className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <li key={tag}>
                      <span className="tag">{tag}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
