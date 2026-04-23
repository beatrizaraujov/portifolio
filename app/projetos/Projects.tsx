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
            01 / 02
          </span>
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-32">
          
    
          <div className="flex flex-col lg:sticky lg:top-24">
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="tag">Next.js</span>
              <span className="tag">Tailwind</span>
              <span className="tag">API</span>
            </div>

            <h4 className="text-white text-4xl lg:text-5xl font-bold mb-6">
              AgroClimate Intelligence
            </h4>

            <p className="text-zinc-400 text-lg mb-10 max-w-xl">
              Dashboard para visualização de dados agrícolas e ambientais a partir de APIs públicas.
              Os dados são organizados em gráficos para facilitar leitura e análise.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm text-zinc-400 border-t border-white/10 pt-8">
              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Problema
                </span>
                Dados disponíveis, mas difíceis de interpretar.
              </div>

              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Solução
                </span>
                Organização dos dados em dashboard visual.
              </div>

              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Técnica
                </span>
                Next.js para performance e carregamento eficiente.
              </div>

              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Resultado
                </span>
                Leitura mais rápida e clara das informações.
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#C0C1FF] text-black text-xs font-bold px-6 py-3 rounded-xl">
                Ver projeto
              </button>
              <button className="border border-white/10 text-white text-xs font-bold px-6 py-3 rounded-xl">
                Código
              </button>
            </div>

          </div>

          <div className="rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/agroclimate-hero.png"
              alt="Dashboard"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="relative w-full max-w-[400px] mx-auto aspect-[9/19] border border-white/5 rounded-3xl overflow-hidden">
            <Image
              src="/finanly.png"
              alt="Finanly"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="tag">React</span>
              <span className="tag">Supabase</span>
              <span className="tag">Mobile</span>
            </div>

            <h4 className="text-white text-4xl lg:text-5xl font-bold mb-6">
              Finanly — Gestão Financeira
            </h4>

            <p className="text-zinc-400 text-lg mb-10 max-w-xl">
              Aplicação mobile para controle financeiro de autônomos, com registro de entradas,
              saídas e visualização do fluxo de caixa.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm text-zinc-400 border-t border-white/10 pt-8">
              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Problema
                </span>
                Falta de organização financeira no dia a dia.
              </div>

              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Solução
                </span>
                Interface simples para controle pelo celular.
              </div>

              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Técnica
                </span>
                Supabase para dados em tempo real.
              </div>

              <div>
                <span className="text-[#7B7BFF] text-[10px] uppercase font-bold block mb-2">
                  Resultado
                </span>
                Centralização das informações financeiras.
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#C0C1FF] text-black text-xs font-bold px-6 py-3 rounded-xl">
                Ver projeto
              </button>
              <button className="border border-white/10 text-white text-xs font-bold px-6 py-3 rounded-xl">
                Código
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}