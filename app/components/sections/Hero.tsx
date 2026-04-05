import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen pt-10 pb-20 px-6 md:px-10 bg-[#0B0B0B] flex items-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
  
        <div className="flex flex-col items-start justify-start z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="w-full h-full rounded-full bg-[#C0C1FF]"></span>
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#C0C1FF] animate-ping"></span>
            </div>
            <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Eu desenvolvo interfaces modernas com foco em
            <span className="text-[#C0C1FF]"> performance, experiência e impacto real.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            Com foco em código limpo, boas práticas e atenção aos detalhes, 
            transformo ideias em interfaces funcionais, escaláveis e bem estruturadas.
          </p>

          <button className="mt-10 group flex items-center gap-3 bg-[#C0C1FF] text-black text-[11px] font-black uppercase px-10 h-[52px] rounded-2xl hover:brightness-110 transition-all tracking-widest w-full md:w-auto justify-center">
            Ver Projetos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#7B7BFF]/10 blur-[80px] lg:blur-[120px] rounded-full" />
          
          <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl lg:rotate-3 lg:hover:rotate-0 transition-all duration-700 ease-in-out">
            <Image 
              src="/agroclimate-hero.png" 
              alt="Dashboard AgroClimate"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-[#161616]/90 backdrop-blur-md border border-white/10 p-4 lg:p-5 rounded-2xl shadow-2xl z-20">
            <p className="text-[9px] lg:text-[10px] uppercase tracking-widest text-[#C0C1FF] font-bold mb-1">
              Monitoramento Ativo
            </p>
            <p className="text-white text-sm lg:text-base font-medium">
              Análise via Satélite & IA
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}