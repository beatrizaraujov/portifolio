import { Terminal, Database, Layers, Cloud, Gauge, Layout } from "lucide-react";

const stack = [
  { name: "Neovim / Terminal", icon: <Terminal size={18} /> },
  { name: "PostgreSQL", icon: <Database size={18} /> },
  { name: "React / Next.js", icon: <Layers size={18} /> },
  { name: "AWS", icon: <Cloud size={18} /> },
  { name: "Vercel", icon: <Gauge size={18} /> },
  { name: "Figma", icon: <Layout size={18} /> },
];

export default function InternalStack() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] space-y-20">
      
      
      <div className="text-center space-y-4">
        <h2 className="text-zinc-100 text-sm font-bold uppercase tracking-[0.5em]">
          Ferramentas e stack
        </h2>
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
          Tecnologias que utilizo no dia a dia
        </p>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
        {stack.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#0B0B0B] p-8 flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div className="text-zinc-500 group-hover:text-[#6366F1] transition-colors duration-300">
              {item.icon}
            </div>
            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider group-hover:text-zinc-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
        
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white tracking-tight">
            Produtividade no desenvolvimento
          </h3>

          <p className="text-zinc-500 leading-relaxed font-medium max-w-md">
            Utilizo templates e scripts próprios para acelerar a criação de projetos,
            reduzir tempo de configuração e manter consistência entre aplicações.
          </p>
        </div>

        
        <div className="bg-[#121212] rounded-2xl p-6 border border-white/5 font-mono text-xs shadow-2xl">
          <div className="flex gap-1.5 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>

          <div className="space-y-2 text-zinc-400">
            <p><span className="text-[#6366F1]">$</span> init-project --template base</p>
            <p className="text-zinc-600">Configurando estrutura inicial...</p>
            <p className="text-zinc-600">Instalando dependências...</p>
            <p className="text-zinc-500">Preparando ambiente de desenvolvimento...</p>
            <p className="text-[#C0C1FF] mt-4 font-bold">Projeto pronto para desenvolvimento.</p>
          </div>
        </div>

      </div>

    </section>
  );
}