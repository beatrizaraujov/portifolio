import Link from "next/link";

import {
  confidentialProjects,
  projects,
  type Project,
} from "@/app/content/projects";
import { Arrow, ExternalLink } from "@/app/components/ui/ExternalLink";
import { LayerTrack, layerNames, RouteStops } from "@/app/components/ui/Route";
import SectionHead from "@/app/components/ui/SectionHead";
import Stage from "@/app/components/ui/Stage";

/** Mesmas etapas das descrições públicas de cada produto, sem detalhes internos. */
const routes: Record<string, readonly string[]> = {
  "NR-1": [
    "Questionários",
    "Anonimato",
    "Processamento de respostas",
    "Gestão com controle de acesso",
  ],
  "iBaby Coach": [
    "Gestão",
    "Regras de negócio",
    "Atividades",
    "Acompanhamento",
  ],
};

export default function Work() {
  return (
    <section id="projetos" className="page mt-section">
      <SectionHead
        title="Projetos"
        aside={
          <p className="note">
            A trilha de cada projeto indica as camadas em que atuei: interface,
            regras, APIs, dados, segurança e testes.
          </p>
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
    <article
      className="mt-block"
      style={{ "--line": `var(--${project.color})` } as React.CSSProperties}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <h3 className="mega-md fx-title">
          <Link href={href} className="transition-colors hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="tag fx-up">{project.kind}</p>
      </div>

      <Link href={href} tabIndex={-1} className="mt-group block">
        <Stage project={project} />
      </Link>
      {caption ? <p className="note mt-3">{caption}</p> : null}

      <div className="cols mt-group items-start">
        <p className="lede fx-up lg:col-span-6">{project.summary}</p>
        <div className="fx-up lg:col-span-5 lg:col-start-8">
          <LayerTrack
            active={project.layers}
            label={`Camadas de participação em ${project.name}`}
          />
          <p className="meta mt-2 !text-fg">{layerNames(project.layers)}</p>
          <p className="meta mt-1 [overflow-wrap:anywhere]">
            {project.stack.join(", ")}
          </p>

          <div className="mt-group flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={href}
              aria-label={`Ler o estudo do projeto ${project.name}`}
              className="btn"
            >
              Ler o estudo
              <Arrow direction="right" />
            </Link>
            <ExternalLink href={project.links[0].href}>
              {project.links[0].label}
            </ExternalLink>
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
        <h3 className="mega-md fx-title lg:col-span-6">Produtos na Hougmain</h3>
        <p className="note fx-up lg:col-span-5 lg:col-start-8">
          Participo do desenvolvimento destes produtos como integrante da equipe,
          com React, Next.js, JavaScript e TypeScript. Por serem produtos da
          empresa, não divulgo telas, código, dados nem decisões técnicas
          específicas.
        </p>
      </div>

      <div className="mt-group grid gap-4 lg:grid-cols-2">
        {confidentialProjects.map((project, index) => (
          <article
            key={project.name}
            className="panel panel-pad fx-up"
            style={{ "--d": `${index * 120}ms` } as React.CSSProperties}
          >
            <h4 className="title">{project.name}</h4>
            <p className="mt-2">{project.purpose}</p>

            <div className="mt-group grid gap-5 sm:grid-cols-2">
              <RouteStops stops={routes[project.name]} />
              <div>
                <p className="meta">Escopo</p>
                <p className="mt-1 leading-snug">{project.scope}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="note fx-up mt-3">
        Percursos esquemáticos, sem correspondência com telas ou arquitetura reais.
      </p>
    </div>
  );
}
