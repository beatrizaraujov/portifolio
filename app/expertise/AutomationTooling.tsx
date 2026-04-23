import { Settings, FileText, Share2, Activity, Terminal, LayoutDashboard } from "lucide-react";

export default function AutomationTooling() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.02]">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
          <div className="space-y-8">
            <span className="text-[#C0C1FF] uppercase tracking-[0.4em] text-[10px] font-black block">
              03 Efficiency & Strategy
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
              Otimizando a <br />
              <span className="text-zinc-500">engrenagem técnica.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-md leading-relaxed font-medium pb-2">
            Na ponte entre o código e a operação, desenvolvo fluxos que eliminam ruídos 
            e aceleram a entrega de valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-7 group relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#C0C1FF]/10 flex items-center justify-center text-[#C0C1FF]">
                  <Settings size={24} className="group-hover:rotate-90 transition-transform duration-700" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">Arquitetura de Processos</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                    Especialista em traduzir necessidades de negócio em documentação técnica 
                    rigorosa, garantindo que cada sprint seja executada com clareza absoluta.
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <FileText size={16} />, text: "Documentação de Specs" },
                  { icon: <Share2 size={16} />, text: "Intermediação Ágil" },
                  { icon: <Activity size={16} />, text: "Otimização de Workflows" },
                  { icon: <Settings size={16} />, text: "Padronização Operacional" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-zinc-500 group-hover:text-zinc-300 transition-colors text-sm font-semibold uppercase tracking-wider">
                    <span className="text-[#C0C1FF]">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C0C1FF]/5 blur-[100px] rounded-full group-hover:bg-[#C0C1FF]/10 transition-colors duration-700" />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#C0C1FF]/30 transition-all duration-500 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <LayoutDashboard className="text-zinc-600 group-hover:text-[#C0C1FF] transition-colors" size={32} />
                <h4 className="text-xl font-bold text-white">Dashboards de Análise</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Criação de interfaces para monitoramento de dados operacionais e 
                  identificação de gargalos em tempo real.
                </p>
              </div>
            </div>

            <div className="group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#C0C1FF]/30 transition-all duration-500 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <Terminal className="text-zinc-600 group-hover:text-[#C0C1FF] transition-colors" size={32} />
                <h4 className="text-xl font-bold text-white">Troubleshooting Avançado</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Resolução ágil de falhas técnicas e manutenção preventiva, 
                  focando na continuidade crítica das operações.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}