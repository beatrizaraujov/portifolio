const principios = [
  {
    titulo: "Contexto antes do código",
    texto:
      "Toda implementação começa pela compreensão do problema de negócio. Entender o objetivo, o usuário e as restrições evita construir a solução correta para a pergunta errada.",
  },
  {
    titulo: "Integrações resilientes",
    texto:
      "Dados de terceiros atrasam, chegam incompletos ou simplesmente falham. Trato erros, sinalizo estados de carregamento e valido o contrato antes de qualquer informação chegar à interface.",
  },
  {
    titulo: "Usabilidade autoexplicativa",
    texto:
      "Uma boa interface dispensa treinamento. Fluxos curtos, hierarquia visual clara e rótulos objetivos: a informação em primeiro plano, o ornamento em segundo.",
  },
  {
    titulo: "Código preparado para manutenção",
    texto:
      "Nomenclatura que descreve intenção, componentes de responsabilidade única e uma arquitetura previsível. Escrevo pensando em quem dará continuidade — inclusive eu mesma.",
  },
];

export default function Principios() {
  return (
    <section className="section border-t border-white/5">
      <div className="shell">
        <p className="eyebrow">Princípios de trabalho</p>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Quatro princípios que orientam cada entrega
        </h2>

        <ol className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principios.map((item, indice) => (
            <li key={item.titulo} className="flex gap-6">
              <span
                aria-hidden
                className="shrink-0 font-mono text-sm text-accent-400/70"
              >
                {String(indice + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.titulo}
                </h3>
                <p className="mt-3 leading-relaxed">{item.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
