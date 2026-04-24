import Image from "next/image";
import arquivoPath from "@/public/arquivo.svg";

export default function MethodologyHero() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] space-y-10">
      <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
        <Image src={arquivoPath} alt="" className="w-4 h-4 opacity-70" />
        <span>Recursos e experimentos</span>
      </div>

      <div className="space-y-6 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Explorações técnicas
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Espaço dedicado à prática técnica contínua, com foco na exploração de
          integrações, comportamento de interfaces e fluxo de dados em
          diferentes cenários.
        </p>

        <p className="text-zinc-500 text-sm">
          Utilizado como ambiente de aprofundamento para APIs, automações e
          padrões de construção de componentes reutilizáveis, consolidando
          práticas aplicadas no desenvolvimento.
        </p>
      </div>

      <div className="w-full h-px bg-white/5 mt-10" />
    </section>
  );
}
