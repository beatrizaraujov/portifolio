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
            Scroll to explore — 01/02
          </span>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start group mb-32">
          <div className="order-2 lg:order-1 flex flex-col lg:sticky lg:top-24">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Next.js
              </span>
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Tailwind CSS
              </span>
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                MapBiomas API
              </span>
            </div>
            <h4 className="text-[#E5E2E1] text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              AgroClimate Intelligence
            </h4>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl">
              Dashboard interativo projetado para conectar dados agrícolas e impacto ambiental. 
              O foco é transformar bases públicas complexas em insights visuais claros para apoiar decisões conscientes sobre sustentabilidade e economia.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <span className="text-[#7B7BFF] uppercase font-black tracking-widest text-[10px] block mb-3">
                  Inquietação
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Dados vitais sobre produção global dispersos em bases pouco acessíveis.
                </p>
              </div>
              <div>
                <span className="text-[#7B7BFF] uppercase font-black tracking-widest text-[10px] block mb-3">
                  Proposta
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Conectar impacto ambiental e análise de tendências em um único lugar.
                </p>
              </div>
            </div>
          </div>

          
          <div className="order-1 lg:order-2 w-full rounded-[32px] overflow-hidden bg-[#1A1A1A] border border-white/5 shadow-2xl">
            <Image
              src="/agroclimate-hero.png" 
              alt="Dashboard AgroClimate Completo"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              priority
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
          <div className="order-1 lg:order-1 relative w-full lg:max-w-[400px] mx-auto aspect-[9/19] rounded-[40px] overflow-hidden bg-[#0B0B0B] border-[8px] border-[#1A1A1A] shadow-2xl shadow-black/50">
            <Image
              src="/finanly.png" 
              alt="Interface Finanly Mobile Completa"
              fill
              className="object-contain transition-transform duration-1000 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="order-2 lg:order-2 flex flex-col">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                React 19
              </span>
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Supabase
              </span>
              <span className="text-[11px] font-semibold text-[#C0C1FF] bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Mobile-First
              </span>
            </div>
            <h4 className="text-[#E5E2E1] text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Finanly — Gestão Financeira
            </h4>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl">
              Aplicação mobile-first criada para simplificar a organização de fluxo de caixa e encomendas para autônomos, 
              priorizando a usabilidade direta pelo celular no dia a dia.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <span className="text-[#7B7BFF] uppercase font-black tracking-widest text-[10px] block mb-3">
                  Problema
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Desorganização financeira de prestadores que operam direto pelo celular.
                </p>
              </div>
              <div>
                <span className="text-[#7B7BFF] uppercase font-black tracking-widest text-[10px] block mb-3">
                  Resultado
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Centralização de dados e insights financeiros em tempo real com backend sólido.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}