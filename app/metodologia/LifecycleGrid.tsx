import { Lightbulb, Network, Code2, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Levantamento",
    description:
      "Entendimento do problema, contexto do negócio e definição clara do que precisa ser resolvido antes de qualquer decisão técnica.",
    icon: <Lightbulb size={20} className="text-[#C0C1FF]" />,
  },
  {
    title: "Estruturação",
    description:
      "Definição de arquitetura, organização de dados e contratos entre front e back para garantir consistência e escalabilidade.",
    icon: <Network size={20} className="text-[#C0C1FF]" />,
  },
  {
    title: "Desenvolvimento",
    description:
      "Implementação incremental com foco em legibilidade, reutilização e estabilidade do código.",
    icon: <Code2 size={20} className="text-[#C0C1FF]" />,
  },
  {
    title: "Evolução",
    description:
      "Ajustes baseados em uso real, melhoria de performance e adaptação contínua conforme o produto cresce.",
    icon: <BarChart3 size={20} className="text-[#C0C1FF]" />,
  },
];

export default function LifecycleGrid() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] space-y-16">
      
      
      <div className="flex justify-between items-end border-b border-white/5 pb-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Como eu desenvolvo
          </h2>
          <div className="h-1 w-20 bg-[#6366F1]" />
        </div>
        <span className="text-zinc-600 uppercase tracking-widest text-[10px] font-bold pb-2">
          Processo
        </span>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white/[0.02] border border-white/5 p-10 rounded-[1.5rem] space-y-8 hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}