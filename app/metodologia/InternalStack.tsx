import { Terminal, Database, Layers, Cloud, Gauge, Layout } from "lucide-react";

const stack = [
  { name: "Ambiente de desenvolvimento", tech: "Neovim / Terminal", icon: <Terminal size={18} /> },
  { name: "Persistência de dados", tech: "PostgreSQL", icon: <Database size={18} /> },
  { name: "Interface e renderização", tech: "React / Next.js", icon: <Layers size={18} /> },
  { name: "Infraestrutura", tech: "AWS", icon: <Cloud size={18} /> },
  { name: "Deploy e entrega", tech: "Vercel", icon: <Gauge size={18} /> },
  { name: "Design e prototipação", tech: "Figma", icon: <Layout size={18} /> },
];

export default function InternalStack() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] space-y-20">
      
      <div className="text-center space-y-4">
        <h2 className="text-zinc-100 text-sm font-bold uppercase tracking-[0.5em]">
          Ambiente & Stack de Engenharia
        </h2>

        <p className="text-zinc-500 text-sm max-w-md mx-auto leading-relaxed">
          Estrutura técnica organizada para garantir previsibilidade, consistência e eficiência ao longo do ciclo de desenvolvimento.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
        {stack.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#0B0B0B] p-8 flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.02] transition-colors duration-300 text-center"
          >
            <div className="text-zinc-500 group-hover:text-[#6366F1] transition-colors duration-300">
              {item.icon}
            </div>

            <span className="text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
              {item.name}
            </span>

            <span className="text-[11px] text-zinc-300 font-medium">
              {item.tech}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
        
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-white tracking-tight">
            Produtividade orientada a fluxo
          </h3>

          <p className="text-zinc-500 leading-relaxed max-w-md">
            Estruturo projetos com templates e automações próprias para reduzir tempo de setup, padronizar implementações e acelerar a transição entre concepção e entrega.
          </p>
        </div>

        <div className="bg-[#121212] rounded-2xl p-6 border border-white/5 font-mono text-xs shadow-2xl">
          <div className="flex gap-1.5 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>

          <div className="space-y-2 text-zinc-400">
            <p>
              <span className="text-[#6366F1]">$</span> init-project --template base
            </p>

            <p className="text-zinc-600">Inicializando estrutura do projeto...</p>
            <p className="text-zinc-600">Provisionando dependências...</p>
            <p className="text-zinc-500">Configurando ambiente de desenvolvimento...</p>

            <p className="text-[#C0C1FF] mt-4 font-semibold">
              Ambiente pronto para implementação.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}