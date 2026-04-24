import { Lightbulb, Network, Code2, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Levantamento",
    description:
      "Análise estruturada do problema, entendimento profundo do contexto de negócio e definição objetiva do escopo antes de qualquer decisão técnica.",
    icon: <Lightbulb size={20} className="text-[#C0C1FF]" />,
  },
  {
    title: "Estruturação",
    description:
      "Definição de arquitetura, modelagem de dados e contratos entre sistemas, garantindo consistência, previsibilidade e escalabilidade desde a base.",
    icon: <Network size={20} className="text-[#C0C1FF]" />,
  },
  {
    title: "Desenvolvimento",
    description:
      "Construção incremental orientada à qualidade, com foco em legibilidade, reutilização e estabilidade para reduzir dívida técnica e facilitar evolução.",
    icon: <Code2 size={20} className="text-[#C0C1FF]" />,
  },
  {
    title: "Evolução",
    description:
      "Otimização contínua baseada em uso real, com melhorias de performance, refinamento de fluxos e adaptação estratégica conforme o produto cresce.",
    icon: <BarChart3 size={20} className="text-[#C0C1FF]" />,
  },
];

export default function LifecycleGrid() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] space-y-16">
      
      <div className="flex justify-between items-end border-b border-white/5 pb-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Engenharia aplicada ao desenvolvimento
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
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}