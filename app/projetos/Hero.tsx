import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen pt-10 pb-20 px-6 md:px-10 bg-[#0B0B0B] flex items-center overflow-hidden font-inter">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
    
        <div className="flex flex-col items-start justify-start z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="w-full h-full rounded-full bg-[#C0C1FF]"></span>
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#C0C1FF] animate-ping"></span>
            </div>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6D6D6]">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-[-0.04em]">
            Desenvolvimento frontend com foco em
            <span className="text-[#C0C1FF]">
              {" "}
              performance, clareza e manutenção.
            </span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-medium">
            Construo interfaces funcionais com integração de APIs, priorizando
            organização de código e experiência do usuário.
          </p>

      
          <a 
            href="https://github.com/beatrizaraujov"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 group inline-flex items-center gap-3 bg-[#C0C1FF] text-black text-[11px] font-black uppercase px-10 h-[56px] rounded-2xl hover:brightness-110 transition-all tracking-[0.2em] w-full md:w-auto justify-center"
          >
            Ver Projetos
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

      
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#7B7BFF]/10 blur-[80px] lg:blur-[120px] rounded-full" />

          <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl lg:rotate-3 lg:hover:rotate-0 transition-all duration-700 ease-in-out bg-zinc-900">
            <Image
              src="/agroclimate-hero.png"
              alt="Dashboard AgroClimate Intelligence"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>

        
          <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-[#161616]/90 backdrop-blur-xl border border-white/10 p-5 lg:p-6 rounded-[24px] shadow-2xl z-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C0C1FF] font-black mb-1.5">
              Monitoramento Ativo
            </p>
            <p className="text-white text-base lg:text-lg font-bold tracking-tight">
              Análise via Satélite & IA
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}