import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects, type Project } from "@/app/content/projects";
import { Arrow, ExternalLink } from "@/app/components/ui/ExternalLink";
import { LayerStops, TrackRule } from "@/app/components/ui/Route";
import Stage from "@/app/components/ui/Stage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function find(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = find((await params).slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.summary,
      url: `/projetos/${project.slug}`,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = find((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next: Project = projects[(index + 1) % projects.length];

  return (
    <article style={{ "--line": `var(--${project.color})` } as React.CSSProperties}>
      <header className="page pt-[var(--space-head)]">
        <Link href="/#projetos" className="link">
          <Arrow direction="left" />
          Todos os projetos
        </Link>

        <p className="tag mt-head">{project.kind}</p>
        <h1 className="mega rise mt-3">{project.name}</h1>

        <div className="cols mt-group items-start">
          <p className="lede fx-up lg:col-span-7">{project.summary}</p>
          <div className="fx-up lg:col-span-3 lg:col-start-10">
            <h2 className="meta mb-3">Camadas de atuação</h2>
            <LayerStops active={project.layers} />
          </div>
        </div>
      </header>

      <div className="page mt-head">
        <Stage project={project} preload />
        {project.detailImage?.caption ? (
          <p className="note mt-3">{project.detailImage.caption}</p>
        ) : null}
      </div>

      <div className="page mt-block">
        <TrackRule />
        <div className="cols mt-group">
          <Part label="Contexto" className="lg:col-span-5">
            <p>{project.context}</p>
          </Part>
          <Part label="Problema" className="lg:col-span-6 lg:col-start-7">
            <p className="lede">{project.problem}</p>
          </Part>
        </div>

        <Part label="Minha participação" className="mt-block">
          <p className="statement lg:max-w-[28em]">{project.role}</p>
        </Part>

        <div className="cols mt-block">
          <Part label="Solução" className="lg:col-span-6">
            <p className="lede">{project.solution}</p>
          </Part>
          <Part label="Tecnologias" className="lg:col-span-4 lg:col-start-9">
            <ul className="text-[1.25rem] leading-snug font-semibold">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Part>
        </div>
      </div>

      <div className="page mt-block">
        <Part label="Decisões técnicas">
          <ol>
            {project.decisions.map((decision) => (
              <li
                key={decision.title}
                className="reveal cols border-t border-line py-5 !gap-y-1"
              >
                <h3 className="text-[1.25rem] leading-tight font-bold tracking-tight lg:col-span-4">
                  {decision.title}
                </h3>
                <p className="max-w-[46rem] lg:col-span-7 lg:col-start-6">
                  {decision.text}
                </p>
              </li>
            ))}
          </ol>
        </Part>

        <div className="cols mt-block">
          <Part label="Situação atual" className="lg:col-span-6">
            <p className="lede">{project.status}</p>
          </Part>
          <Part label="Acesso" className="lg:col-span-4 lg:col-start-9">
            <ul className="flex flex-col items-start gap-2.5">
              {project.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </Part>
        </div>
      </div>

      <nav
        aria-label="Próximo projeto"
        className="page mt-section pb-[var(--space-head)]"
        style={{ "--line": `var(--${next.color})` } as React.CSSProperties}
      >
        <TrackRule />
        <p className="meta mt-group">Próximo projeto</p>
        <Link
          href={`/projetos/${next.slug}`}
          className="group mega-md mt-2 flex items-baseline justify-between gap-6 transition-colors hover:text-accent"
        >
          <span>{next.name}</span>
          <span className="text-[0.5em] transition-transform duration-300 group-hover:translate-x-2">
            <Arrow direction="right" />
          </span>
        </Link>
      </nav>
    </article>
  );
}

function Part({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`fx-up ${className}`}>
      <h2 className="title mb-3">{label}</h2>
      {children}
    </section>
  );
}
