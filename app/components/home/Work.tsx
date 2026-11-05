import Link from "next/link";

import {
  confidentialProjects,
  projects,
  type Project,
} from "@/app/content/projects";
import { Arrow, ExternalLink } from "@/app/components/ui/ExternalLink";
import Constellation, { layerNames } from "@/app/components/ui/Constellation";
import SectionHead from "@/app/components/ui/SectionHead";
import Stage from "@/app/components/ui/Stage";
import { SketchIbaby, SketchNr1 } from "@/app/components/ui/SystemSketch";

const sketches: Record<string, React.ReactNode> = {
  "NR-1": <SketchNr1 />,
  "iBaby Coach": <SketchIbaby />,
};

export default function Work() {
  return (
    <section id="trabalho" className="page">
      <SectionHead
        number="01"
        title={
          <>
            Trabalho <em>selecionado</em>
          </>
        }
        aside={
          <div className="flex items-start gap-5">
            <Constellation
              active={["interface", "regras", "dados", "qualidade"]}
              label="Exemplo de figura de camadas"
            />
            <p className="note">
              Cada figura liga as camadas do sistema em que participei. Quanto
              mais pontos ligados, maior a extensão do trabalho.
            </p>
          </div>
        }
      />

      {projects.map((project) => (
        <ProjectBlock key={project.slug} project={project} />
      ))}

      <Confidential />
    </section>
  );
}

/** Todos os projetos seguem a mesma ordem: título, palco, texto e ações. */
function ProjectBlock({ project }: { project: Project }) {
  const href = `/projetos/${project.slug}`;
  const caption = project.detailImage?.caption;

  return (
    <article className="mt-block">
      <p className="tag fx-up">{project.kind}</p>
      <h3 className="mega-md fx-title mt-3">
        <Link href={href} className="transition-colors hover:text-accent">
          {project.titleLines[0]}
          {project.titleLines[1] ? (
            <>
              {" "}
              <em>{project.titleLines[1]}</em>
            </>
          ) : null}
        </Link>
      </h3>

      <Link href={href} tabIndex={-1} className="mt-head block">
        <Stage project={project} />
      </Link>
      {caption ? <p className="note mt-3">{caption}</p> : null}

      <div className="cols mt-group items-start">
        <p className="lede fx-up lg:col-span-6">{project.summary}</p>
        <div className="fx-up lg:col-span-5 lg:col-start-8">
          <div className="flex flex-wrap items-start gap-4">
            <Constellation
              active={project.layers}
              label={`Camadas de participação em ${project.name}`}
            />
            <div className="min-w-0 flex-[1_1_9rem]">
              <p className="meta !text-fg">{layerNames(project.layers)}</p>
              <p className="meta mt-2 [overflow-wrap:anywhere]">
                {project.stack.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-group flex flex-wrap items-center justify-between gap-5">
            <ExternalLink href={project.links[0].href}>
              {project.links[0].label}
            </ExternalLink>
            <Link
              href={href}
              aria-label={`Ler o estudo do projeto ${project.name}`}
              className="orb"
            >
              Ler o estudo
              <Arrow direction="right" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Confidential() {
  return (
    <div className="mt-block">
      <div className="cols items-end">
        <h3 className="mega-md fx-title lg:col-span-6">
          Produtos <em>na Hougmain</em>
        </h3>
        <p className="note fx-up lg:col-span-6">
          Participo do desenvolvimento destes produtos como integrante da equipe,
          com React, Next.js, JavaScript e TypeScript. Por serem produtos da
          empresa, telas, código, dados e decisões técnicas específicas não são
          divulgados.
        </p>
      </div>

      <div className="mt-head grid gap-4 lg:grid-cols-2">
        {confidentialProjects.map((project, index) => (
          <article
            key={project.name}
            className="panel panel-pad panel-hover fx-up"
            style={{ "--d": `${index * 120}ms` } as React.CSSProperties}
          >
            <h4 className="title">{project.name}</h4>
            <figure className="mt-group">
              {sketches[project.name]}
              <figcaption className="note mt-4">
                Representação abstrata, sem telas, dados ou arquitetura reais.
              </figcaption>
            </figure>

            <dl className="mt-group grid gap-y-4">
              <Row label="Finalidade" text={project.purpose} />
              <Row label="Escopo" text={project.scope} />
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-x-5 border-t border-line pt-3 sm:grid-cols-[8rem_1fr]">
      <dt className="meta pt-0.5">{label}</dt>
      <dd className="leading-snug">{text}</dd>
    </div>
  );
}
