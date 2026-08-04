import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { projects, socials } from "@/app/content/site";

const destaque = projects[0];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Brilho de fundo, bem discreto — só para o topo não ficar chapado. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent-500/8 blur-[130px]"
      />

      <div className="shell relative grid items-center gap-16 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-mute">
            <span className="size-1.5 rounded-full bg-ember" />
            Disponível para novas oportunidades
          </p>

          <h1 className="mt-8 text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.03em] text-chalk sm:text-6xl lg:text-[4.25rem]">
            Interfaces precisas, construídas para{" "}
            <span className="text-accent-300">durar além da entrega.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
            Desenvolvedora front-end especializada em React e Next.js. Projeto e
            implemento aplicações web que integram APIs, tratam dados com
            segurança e traduzem regras complexas em interfaces objetivas.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
              <ArrowDown size={16} />
            </a>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <figure className="relative m-0">
          <div className="overflow-hidden rounded-panel border border-white/10 bg-ink-850">
            <Image
              src={destaque.image.src}
              alt={destaque.image.alt}
              width={destaque.image.width}
              height={destaque.image.height}
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="h-auto w-full"
            />
          </div>

          <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-faint">
            <span className="text-accent-300">{destaque.name}</span>
            <span aria-hidden>/</span>
            <span>{destaque.tagline}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
