import { Rocket, PenTool, LayoutGrid } from "lucide-react";

export default function CollaborationProtocol() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B]">
      
    
      <div className="lg:col-span-6 space-y-12">
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Como eu colaboro
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
            Atuo na interseção entre produto, design e desenvolvimento,
            garantindo que decisões técnicas estejam alinhadas com a experiência
            do usuário e os objetivos do negócio.
          </p>
        </div>

        <div className="space-y-10 border-l border-white/10 pl-8">
          
         
          <div className="space-y-3">
            <span className="text-[#C0C1FF] uppercase tracking-[0.3em] text-[10px] font-black block">
              Com design
            </span>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Avalio viabilidade técnica, proponho ajustes de interface e garanto
              consistência entre o que é projetado e o que é entregue.
            </p>
          </div>

         
          <div className="space-y-3">
            <span className="text-[#C0C1FF] uppercase tracking-[0.3em] text-[10px] font-black block">
              Com produto/negócio
            </span>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Traduzo necessidades de negócio em soluções técnicas claras,
              considerando impacto, prazo e custo de manutenção.
            </p>
          </div>

        </div>
      </div>

     
      <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px]">
        
        <div className="absolute inset-0 bg-[#6366F1]/5 blur-[100px] rounded-full" />
        
        <div className="relative w-64 h-64 border border-white/10 rounded-[2.5rem] flex items-center justify-center">
          
         
          <div className="absolute -top-6 -left-12 bg-[#1A1A1A] border border-white/5 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
            <PenTool size={16} className="text-[#6366F1]" />
            <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest">
              Experiência do usuário
            </span>
          </div>

         
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 bg-[#1A1A1A] border border-white/5 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
            <Rocket size={16} className="text-[#6366F1]" />
            <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest">
              Impacto no negócio
            </span>
          </div>

          <div className="absolute -bottom-6 -right-12 bg-[#1A1A1A] border border-white/5 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
            <LayoutGrid size={16} className="text-[#6366F1]" />
            <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest">
              Arquitetura do sistema
            </span>
          </div>

          <div className="w-48 h-48 border border-[#6366F1]/20 rounded-[2rem] animate-pulse" />
        </div>
      </div>

    </section>
  );
}