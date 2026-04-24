import {
  Layers,
  FileCode2,
  Atom,
  Plug,
  Database,
  GitBranch,
  Workflow
} from "lucide-react";

export default function Tech() {
  const technologies = [
    { name: "Next.js", icon: Layers },
    { name: "TypeScript", icon: FileCode2 },
    { name: "React", icon: Atom },
    { name: "API Integration", icon: Plug },
    { name: "Supabase", icon: Database },
    { name: "TanStack Query", icon: GitBranch },
    { name: "N8N Automations", icon: Workflow },
  ];

  return (
    <section className="bg-[#0E0E0E] py-32 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl">
          <span className="text-[#7B7BFF] uppercase font-black tracking-[0.4em] text-[12px]">
            Tecnologias aplicadas em produto
          </span>

          <h4 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 tracking-tight leading-tight">
            Engenharia de interfaces, dados e integrações
          </h4>

          <p className="text-zinc-500 mt-6 text-base md:text-lg leading-relaxed">
            Seleciono tecnologias com base no contexto do produto, priorizando
            performance, escalabilidade e facilidade de manutenção ao longo do ciclo de evolução.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#0F172A]/40 border border-white/5 aspect-square group hover:bg-[#1E293B]/60 transition-all duration-500"
              >
                <Icon
                  size={28}
                  className="mb-5 text-zinc-500 group-hover:text-[#7B7BFF] group-hover:scale-110 transition-all duration-500"
                />

                <span className="text-[10px] text-center uppercase font-bold tracking-[0.15em] text-zinc-500 group-hover:text-[#7B7BFF] transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}