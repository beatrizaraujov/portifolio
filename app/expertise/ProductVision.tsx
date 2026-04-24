import { ShieldCheck, Zap, Award, Briefcase, GraduationCap } from "lucide-react";

export default function ProductVision() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-24 font-[Inter]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        
        <div className="flex flex-col space-y-12 lg:sticky lg:top-24 h-fit">
          
          <div className="space-y-6">
            <span className="text-[#C0C1FF] uppercase tracking-[0.4em] text-[10px] font-bold">
              Produto & Engenharia
            </span>

            <h2 className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] tracking-[-0.03em]">
              Engenharia aplicada <br />
              <span className="text-zinc-600 italic">à experiência digital.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
            Formada em <span className="text-white font-medium">Análise e Desenvolvimento de Sistemas</span>, 
            desenvolvo interfaces unindo clareza visual e viabilidade técnica. 
            Meu foco é transformar requisitos em soluções funcionais, com atenção à performance, 
            organização do código e evolução do sistema ao longo do tempo.
          </p>

          <div className="grid gap-6">
            
            
            <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] hover:border-[#C0C1FF]/20 transition-all duration-500">
              <div className="text-[#C0C1FF] group-hover:scale-110 transition-transform duration-500">
                <Zap size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold tracking-tight text-lg">
                  Performance e Estrutura
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Interfaces construídas com foco em carregamento eficiente, 
                  evitando re-renderizações desnecessárias e mantendo organização 
                  consistente dos componentes.
                </p>
              </div>
            </div>

           
            <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] hover:border-[#C0C1FF]/20 transition-all duration-500">
              <div className="text-[#C0C1FF] group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold tracking-tight text-lg">
                  Consistência e Acessibilidade
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Aplicação de HTML semântico e boas práticas de interface, 
                  garantindo usabilidade, clareza e consistência na experiência do usuário.
                </p>
              </div>
            </div>

          </div>
        </div>

       
        <div className="space-y-20">
          
         
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <Briefcase className="text-zinc-700" size={20} />
              <h3 className="text-zinc-500 uppercase tracking-[0.3em] text-[12px] font-bold">
                Trajetória
              </h3>
            </div>

            <div className="relative ml-2">
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-transparent" />

              
              <div className="group relative pl-10 pb-16">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#C0C1FF] border-[3px] border-[#0B0B0B] z-10 transition-all group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(192,193,255,0.4)]" />
                <div className="space-y-3 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-[11px] text-zinc-600 font-bold uppercase tracking-widest">
                    2025 - 2026
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Analista de Operações Jr.
                  </h4>
                  <p className="text-zinc-500 text-base max-w-md leading-relaxed">
                    Atuação na análise de dados e melhoria de processos internos, 
                    com foco em eficiência operacional e organização de fluxos.
                  </p>
                </div>
              </div>

            
              <div className="group relative pl-10">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-zinc-800 border-[3px] border-[#0B0B0B] z-10 transition-all group-hover:bg-[#C0C1FF] group-hover:scale-125" />
                <div className="space-y-3 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-[11px] text-zinc-600 font-bold uppercase tracking-widest">
                    2024 — 2025
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Desenvolvimento Web & Suporte T.I
                  </h4>
                  <p className="text-zinc-500 text-base max-w-md leading-relaxed">
                    Desenvolvimento de interfaces e suporte técnico, 
                    garantindo estabilidade, manutenção e consistência visual das aplicações.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <Award className="text-zinc-700" size={20} />
              <h3 className="text-zinc-500 uppercase tracking-[0.3em] text-[12px] font-bold">
                Tecnologias & Capacidades
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <GraduationCap className="text-[#C0C1FF]" size={24} strokeWidth={1.5} />,
                  title: "Análise e Desenvolvimento de Sistemas",
                  desc: "Formação concluída",
                },
                {
                  icon: <Zap className="text-[#C0C1FF]" size={24} strokeWidth={1.5} />,
                  title: "Ecossistema React",
                  desc: "Next.js, TypeScript & Tailwind",
                },
                {
                  icon: <ShieldCheck className="text-[#C0C1FF]" size={24} strokeWidth={1.5} />,
                  title: "Boas práticas de código",
                  desc: "Componentização e organização",
                },
                {
                  icon: <Briefcase className="text-[#C0C1FF]" size={24} strokeWidth={1.5} />,
                  title: "Integrações & APIs",
                  desc: "Consumo de dados e automações",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[24px] bg-white/[0.01] border border-white/5 space-y-4 hover:border-[#C0C1FF]/40 hover:bg-white/[0.03] transition-all duration-500"
                >
                  {item.icon}
                  <div>
                    <h5 className="text-white font-semibold text-[15px] tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-zinc-600 text-xs mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}