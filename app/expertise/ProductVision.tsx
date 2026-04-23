import { ShieldCheck, Zap, Award, Briefcase, GraduationCap } from "lucide-react";

export default function ProductVision() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-24 font-[Inter]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
      
        <div className="flex flex-col space-y-10 lg:sticky lg:top-24 h-fit">
          <div className="space-y-5">
            <span className="text-[#C0C1FF] uppercase tracking-[0.35em] text-[11px] font-semibold">
              Expertise & Resultados
            </span>

            <h2 className="text-4xl md:text-7xl font-semibold text-white leading-[1.05] tracking-[-0.02em]">
              Engenharia por trás <br />
              <span className="text-zinc-500">da experiência digital.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl font-normal">
            Formada em <span className="text-white font-medium">Análise e Desenvolvimento de Sistemas</span>, 
            atuo na interseção entre tecnologia e estratégia para desenvolver interfaces 
            que vão além da estética — entregam performance, clareza e resultado.
          </p>

          <div className="grid gap-6">
            <div className="flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
              <div className="text-[#C0C1FF] group-hover:scale-110 transition-transform">
                <Zap size={26} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Performance e Escalabilidade</h4>
                <p className="text-zinc-500 text-sm">
                  Otimização focada em Core Web Vitals, tempo de carregamento e eficiência estrutural.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
              <div className="text-[#C0C1FF] group-hover:scale-110 transition-transform">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Acessibilidade e Padrões</h4>
                <p className="text-zinc-500 text-sm">
                  Interfaces inclusivas, semânticas e alinhadas às diretrizes modernas da web.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="space-y-14">
          
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase className="text-zinc-600" size={18} />
              <h3 className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold">
                Trajetória
              </h3>
            </div>

            <div className="relative ml-2">
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-zinc-800" />

              <div className="group relative pl-10 pb-12">
                <div className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full bg-[#C0C1FF] border-[3px] border-[#0B0B0B] transition-all group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(192,193,255,0.5)]" />
                
                <div className="space-y-2 group-hover:translate-x-1 transition">
                  <span className="text-[11px] text-zinc-600 uppercase tracking-wide">
                    2025 — Presente
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    Analista de Operações Jr
                  </h4>
                  <p className="text-zinc-500 text-sm max-w-md">
                    Atuação estratégica em operações e análise de dados, com foco na melhoria contínua,
                    otimização de processos e evolução da plataforma.
                  </p>
                </div>
              </div>

              <div className="group relative pl-10">
                <div className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full bg-zinc-800 border-[3px] border-[#0B0B0B] transition-all group-hover:bg-[#C0C1FF] group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(192,193,255,0.5)]" />
                
                <div className="space-y-2 group-hover:translate-x-1 transition">
                  <span className="text-[11px] text-zinc-600 uppercase tracking-wide">
                    2024 — 2025
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    Desenvolvedora Web & Suporte T.I
                  </h4>
                  <p className="text-zinc-500 text-sm max-w-md">
                    Desenvolvimento de interfaces responsivas e manutenção de sistemas,
                    garantindo consistência visual e estabilidade técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Award className="text-zinc-600" size={18} />
              <h3 className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold">
                Formação & Capacitação
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <GraduationCap className="text-[#C0C1FF]" size={22} />,
                  title: "Análise e Desenvolvimento de Sistemas",
                  desc: "Graduação",
                },
                {
                  icon: <Award className="text-[#C0C1FF]" size={22} />,
                  title: "Desenvolvimento Front-end",
                  desc: "React, Next.js, Tailwind",
                },
                {
                  icon: <ShieldCheck className="text-[#C0C1FF]" size={22} />,
                  title: "Acessibilidade Web",
                  desc: "Boas práticas e padrões",
                },
                {
                  icon: <Zap className="text-[#C0C1FF]" size={22} />,
                  title: "Lógica & Algoritmos",
                  desc: "Estruturas e resolução de problemas",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-[#C0C1FF]/30 transition"
                >
                  {item.icon}
                  <div>
                    <h5 className="text-white font-medium text-sm">
                      {item.title}
                    </h5>
                    <p className="text-zinc-600 text-xs">{item.desc}</p>
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