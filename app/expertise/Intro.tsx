export default function Intro() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/6 blur-[140px]"
      />

      <div className="shell relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Sobre</p>

          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-[-0.03em] md:text-6xl">
            Da análise de operações ao desenvolvimento de software.
          </h1>

          <p className="mt-8 text-lg leading-relaxed md:text-xl">
            Antes de atuar com front-end, trabalhei diretamente com processos e
            dados operacionais. Essa vivência evidenciou que a maior parte dos
            problemas não é de natureza técnica: é uma informação que chega no
            momento errado ou uma decisão que a interface não torna evidente.
            Hoje desenvolvo a partir dessa perspectiva.
          </p>
        </div>
      </div>
    </section>
  );
}
