import { BarChart3, Bug } from "lucide-react";

const habitos = [
  "Requisitos documentados antes da primeira linha de código",
  "Validação do escopo com quem solicitou, sem suposições",
  "Decisões técnicas registradas, não apenas acordadas verbalmente",
  "Processos repetíveis no lugar de esforço individual pontual",
];

const complementos = [
  {
    icon: BarChart3,
    titulo: "Dados aplicados à decisão",
    texto:
      "Desenvolvi painéis para equipes que precisavam decidir com rapidez. O desafio raramente está no gráfico — está em definir o que não deve ocupar a tela.",
  },
  {
    icon: Bug,
    titulo: "Diagnóstico e correção",
    texto:
      "A passagem pelo suporte técnico consolidou um método de investigação: reproduzir, isolar, corrigir e documentar para que a falha não retorne.",
  },
];

export default function AlemDoCodigo() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell">
        <p className="eyebrow">Diferenciais</p>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          O que acompanha a entrega técnica
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <article className="card flex flex-col justify-between gap-10 p-8 md:p-10">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Gestão de processo e documentação
              </h3>

              <p className="mt-5 max-w-lg leading-relaxed">
                Minha origem na área operacional tornou documentação e fluxo
                parte natural do trabalho. Redijo requisitos legíveis, valido o
                entendimento antes da implementação e registro a justificativa
                de cada decisão técnica — para que ninguém precise deduzi-la
                depois.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {habitos.map((habito) => (
                <li key={habito} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="text-accent-400">
                    —
                  </span>
                  {habito}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-5">
            {complementos.map((item) => {
              const Icone = item.icon;

              return (
                <article key={item.titulo} className="card p-8">
                  <Icone
                    size={22}
                    strokeWidth={1.5}
                    className="text-accent-300"
                  />

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed">{item.texto}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
