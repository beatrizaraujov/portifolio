import { Target } from "lucide-react";

export default function MethodologyHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#0B0B0B]">
      
      {/* Lado Esquerdo - Narrativa e Título */}
      <div className="lg:col-span-8 space-y-10">
        
        <header className="space-y-6">
          <span className="text-[#C0C1FF] uppercase tracking-[0.4em] text-[10px] font-black block">
            Metodologia
          </span>

          <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.85] text-white">
            Desenvolvimento <br />
            <span className="text-[#6366F1]">orientado a contexto.</span>
          </h1>
        </header>
        
        {/* Ajuste de contraste para zinc-500 para aumentar a profundidade editorial */}
        <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
          Cada projeto exige decisões diferentes. Eu considero contexto de negócio,
          experiência do usuário e manutenção do código para construir soluções
          consistentes e escaláveis.
        </p>

      </div>
      
      {/* Lado Direito - Card de Princípios */}
      <div className="lg:col-span-4 bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] space-y-6 mt-4 lg:mt-24 transition-all hover:bg-white/[0.05]">
        
        <div className="flex items-center gap-3 text-zinc-400">
          <Target size={18} className="text-[#6366F1]" />
          <span className="font-bold uppercase tracking-widest text-[10px]">
            Princípios
          </span>
        </div>

        <p className="text-zinc-400 leading-relaxed italic text-sm">
          "Clareza na implementação. Código sustentável. Foco no problema real."
        </p>

      </div>
    </section>
  );
}