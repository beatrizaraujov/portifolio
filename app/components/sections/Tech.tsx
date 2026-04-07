import Image from "next/image";

export default function Tech() {
  const technologies = [
    { name: "HTML5", icon: "/html.svg" },
    { name: "CSS3/Tailwind", icon: "/css.svg" },
    { name: "Javascript", icon: "/js.svg" },
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "API Integration", icon: "/api.svg" },
    { name: "N8N Automation", icon: "/n8n.svg" },
    { name: "UX/UI Design", icon: "/ux.svg" },
  ];

  return (
    <section className="bg-[#0E0E0E] py-32 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Header Centralizado - Baseado no print Desktop */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#7B7BFF] uppercase font-black tracking-[0.4em] text-[12px]">
            Tech Ecosystem
          </span>
          <h4 className="text-white text-5xl lg:text-6xl font-medium mt-6 tracking-tight">
            Onde a lógica encontra o design
          </h4>
        </div>

        {/* Grid de Cards - Responsivo para Mobile (2 colunas) e Desktop (7 colunas) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#0F172A]/40 border border-white/5 aspect-square group hover:bg-[#1E293B]/60 transition-all duration-500"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 mb-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <span className="text-[10px] text-center uppercase font-bold tracking-[0.15em] text-zinc-500 group-hover:text-[#7B7BFF] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}