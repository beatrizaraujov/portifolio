import Image from "next/image";

export default function Diferencial() {
  const diferenciais = [
    {
      title: "Foco em resultado",
      description:
        "Desenvolvo soluções considerando impacto no negócio, não apenas a entrega técnica.",
      icon: "/strategic.svg",
    },
    {
      title: "Integração e automação",
      description:
        "Crio integrações com APIs e automações para reduzir tarefas manuais e ganhar eficiência.",
      icon: "/automation.svg",
    },
    {
      title: "Pensamento de produto",
      description:
        "Levo em conta experiência do usuário, clareza da interface e fluxo de uso.",
      icon: "/product.svg",
    },
    {
      title: "Código sustentável",
      description:
        "Escrevo código organizado, fácil de manter e preparado para evolução.",
      icon: "/solution.svg",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        <div className="mb-20">
          <span className="text-[#7B7BFF] tracking-[0.3em] uppercase font-black text-[12px]">
            Diferenciais
          </span>

          <h2 className="mt-6 text-[#E5E2E1] leading-[1.1] text-4xl md:text-6xl font-bold max-w-3xl">
            Como eu penso ao desenvolver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => (
            <div 
              key={index}
              className="bg-[#121212] border border-white/5 p-10 rounded-3xl hover:border-[#7B7BFF]/30 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src={item.icon} 
                  width={26} 
                  height={26} 
                  alt={item.title}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}