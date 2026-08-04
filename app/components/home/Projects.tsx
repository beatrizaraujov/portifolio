import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projects, type Project } from "@/app/content/site";

export default function Projects() {
  return (
    <section id="projetos" className="section border-t border-white/5">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
              Projetos selecionados
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-faint">
            Dois produtos autorais, conduzidos da definição do problema à
            entrega. O código-fonte de ambos está disponível no GitHub.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {projects.map((projeto, indice) => (
            <ProjectEntry
              key={projeto.slug}
              projeto={projeto}
              inverter={indice % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({
  projeto,
  inverter,
}: {
  projeto: Project;
  inverter: boolean;
}) {
  return (
    <article className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <figure
        className={`m-0 ${inverter ? "lg:order-first" : "lg:order-last"} ${
          projeto.portrait ? "mx-auto w-full max-w-xs" : ""
        }`}
      >
        <div
          className={`overflow-hidden border border-white/8 bg-ink-850 ${
            projeto.portrait ? "rounded-panel p-3" : "rounded-card"
          }`}
        >
          <Image
            src={projeto.image.src}
            alt={projeto.image.alt}
            width={projeto.image.width}
            height={projeto.image.height}
            sizes="(max-width: 1024px) 100vw, 46vw"
            className={`h-auto w-full ${projeto.portrait ? "rounded-xl" : ""}`}
          />
        </div>
      </figure>

      <div>
        <ul className="flex flex-wrap gap-2">
          {projeto.tags.map((tag) => (
            <li key={tag}>
              <span className="tag">{tag}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-7 text-3xl font-semibold tracking-tight md:text-4xl">
          {projeto.name}
        </h3>

        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          {projeto.summary}
        </p>

        <dl className="mt-10 grid gap-x-8 gap-y-7 border-t border-white/8 pt-8 sm:grid-cols-2">
          {projeto.breakdown.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[11px] text-accent-300">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">{item.text}</dd>
            </div>
          ))}
        </dl>

        <a
          href={projeto.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost group mt-10"
        >
          Ver repositório
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}
