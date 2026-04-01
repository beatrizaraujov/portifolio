export default function Hero() {
  return (
    <section className="w-full min-h-screen pt-32 pb-20 px-6 md:px-10 flex flex-col items-start justify-center bg-[#0B0B0B]">
      <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
        <div className="relative flex items-center justify-center w-2 h-2">
          <span className="w-full h-full rounded-full bg-[#7B7BFF]"></span>
          <span className="absolute inset-0 w-full h-full rounded-full bg-[#7B7BFF] animate-ping"></span>
        </div>
        <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
          Disponível para novos projetos
        </span>
      </div>
  </section>
  );
}