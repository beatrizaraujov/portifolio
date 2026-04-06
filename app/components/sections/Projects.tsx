import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-[#7B7BFF] uppercase font-black tracking-[0.3em] text-[11px]">
              Portfólio
            </span>
            <h3 className="text-[#E5E2E1] text-4xl md:text-7xl font-bold mt-6">
              Projetos selecionados
            </h3>
          </div>
          <span className="hidden lg:block text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium pb-4">
            Scroll to explore — 01/04
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
          <div className="order-2 lg:order-1 flex flex-col">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Next.js
              </span>
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Tailwind CSS
              </span>
            </div>
            <h4 className="text-[#E5E2E1] text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Nexus Analytics Platform
            </h4>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl">
              Redesenho completo da interface de análise de dados para uma
              fintech, focando em visualização clara de métricas complexas.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <span className="text-[#7B7BFF] uppercase font-black tracking-widest text-[10px] block mb-3">
                  Problema
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Baixa retenção devido à complexidade visual dos dados.
                </p>
              </div>
              <div>
                <span className="text-[#7B7BFF] uppercase font-black tracking-widest text-[10px] block mb-3">
                  Resultado
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Aumento de 24% no tempo de permanência na plataforma.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative w-full aspect-square rounded-[32px] overflow-hidden bg-[#1A1A1A]">
            <Image
              src="/agroclimate-hero.png" 
              alt="Dashboard AgroClimate"
              fill
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            />
          </div>
       </div>
      </div>
    </section>
  );
}