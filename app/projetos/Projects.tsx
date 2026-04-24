import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 font-inter">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-[#C0C1FF] uppercase font-black tracking-[0.3em] text-[11px]">
              Portfólio
            </span>
            <h3 className="text-[#E5E2E1] text-4xl md:text-7xl font-bold mt-6 tracking-tight">
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

            <h4 className="text-white text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              AgroClimate Intelligence
            </h4>

            <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed">
              Dashboard para visualização de dados agrícolas e ambientais a partir de APIs públicas.
              Os dados são organizados em gráficos para facilitar leitura e análise.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm text-zinc-400 border-t border-white/10 pt-8">
              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Problema
                </span>
                Dados disponíveis, mas difíceis de interpretar.
              </div>

              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Solução
                </span>
                Organização dos dados em dashboard visual.
              </div>

              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Técnica
                </span>
                Next.js para performance e carregamento eficiente.
              </div>

              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Resultado
                </span>
                Melhor interpretação dos dados através de visualização estruturada.
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a 
                href="https://github.com/beatrizaraujov/AgroClimate-Intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C0C1FF] text-black text-[11px] font-black uppercase px-8 py-4 rounded-xl hover:brightness-110 transition-all tracking-widest"
              >
                Ver Código no GitHub
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50">
            <Image
              src="/agroclimate-hero.png"
              alt="Dashboard AgroClimate"
              width={1200}
              height={800}
              className="w-full object-cover opacity-90"
            />
          </div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative w-full max-w-[400px] mx-auto aspect-[9/19] border border-white/5 rounded-[32px] overflow-hidden bg-zinc-900/30">
            <Image
              src="/finanly.png"
              alt="Finanly App Interface"
              fill
              className="object-contain p-4"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="tag">React</span>
              <span className="tag">Supabase</span>
              <span className="tag">Mobile</span>
            </div>

            <h4 className="text-white text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Finanly — Gestão Financeira
            </h4>

            <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed">
              Aplicação mobile para controle financeiro de autônomos, com registro de entradas,
              saídas e visualização do fluxo de caixa.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm text-zinc-400 border-t border-white/10 pt-8">
              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Problema
                </span>
                Falta de organização financeira no dia a dia.
              </div>

              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Solução
                </span>
                Interface simples para controle pelo celular.
              </div>

              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Técnica
                </span>
                Supabase para persistência de dados.
              </div>

              <div>
                <span className="text-[#C0C1FF] text-[10px] uppercase font-bold block mb-2 tracking-widest">
                  Resultado
                </span>
                Fluxo financeiro organizado em uma interface mobile acessível.
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a 
                href="https://github.com/beatrizaraujov/Finanly"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C0C1FF] text-black text-[11px] font-black uppercase px-8 py-4 rounded-xl hover:brightness-110 transition-all tracking-widest"
              >
                Ver Código no GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}