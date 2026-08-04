export default function ProcessIntro() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/6 blur-[140px]"
      />

      <div className="shell relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Processo</p>

          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-[-0.03em] md:text-6xl">
            Como conduzo um projeto do início à entrega
          </h1>

          <p className="mt-8 text-lg leading-relaxed md:text-xl">
            Meu processo não depende de nomenclatura elaborada nem de cerimônias
            extensas. É uma sequência consistente de etapas que reduz retrabalho
            e sustenta a previsibilidade da entrega, organizada em quatro fases.
          </p>
        </div>
      </div>
    </section>
  );
}
