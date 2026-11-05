import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects, type Project } from "@/app/content/projects";
import Constellation from "@/app/components/ui/Constellation";
import { Arrow, ExternalLink } from "@/app/components/ui/ExternalLink";
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
    <article>
      <header className="page pt-[var(--space-head)]">
        <Link href="/#trabalho" className="link">
          <Arrow direction="left" />
          Trabalho selecionado
        </Link>

        <p className="tag mt-head flex">{project.kind}</p>
        <h1 className="mega rise mt-4">
          {project.titleLines[0]}
          {project.titleLines[1] ? (
            <em className="block">{project.titleLines[1]}</em>
          ) : null}
        </h1>

        <div className="cols mt-head items-start">
          <p className="lede fx-up lg:col-span-7">{project.summary}</p>
          <div className="max-w-xs lg:col-span-4 lg:col-start-9">
            <Constellation
              size="lg"
              active={project.layers}
              label={`Camadas de participação em ${project.name}`}
            />
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
        <div className="cols">
          <Part n="01" label="Contexto" className="lg:col-span-4">
            <p className="text-lg">{project.context}</p>
          </Part>
          <Part n="02" label="Problema" className="lg:col-span-6 lg:col-start-7">
            <p className="lede">{project.problem}</p>
          </Part>
        </div>

        <Part n="03" label="Minha participação" className="mt-block">
          <p className="statement reveal !text-fg lg:max-w-[24em]">
            {project.role}
          </p>
        </Part>

        <div className="cols mt-block">
          <Part n="04" label="Solução" className="lg:col-span-6">
            <p className="lede">{project.solution}</p>
          </Part>
          <Part n="05" label="Tecnologias" className="lg:col-span-4 lg:col-start-9">
            <ul className="display-sm font-display text-[clamp(1.375rem,1.8vw,1.875rem)] leading-tight italic">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Part>
        </div>
      </div>

      <div className="page mt-block">
        <Part n="06" label="Decisões técnicas">
          <ol className="mt-4">
            {project.decisions.map((decision, position) => (
              <li
                key={decision}
                className="reveal grid gap-x-8 gap-y-2 border-t border-line py-6 lg:grid-cols-12"
              >
                <span className="font-display text-3xl leading-none italic lg:col-span-2">
                  {position + 1}
                </span>
                <p className="max-w-[46rem] text-lg lg:col-span-9 lg:col-start-4">
                  {decision}
                </p>
              </li>
            ))}
          </ol>
        </Part>

        <div className="cols mt-block">
          <Part n="07" label="Resultado e situação atual" className="lg:col-span-6">
            <p className="lede">{project.status}</p>
          </Part>
          <Part n="08" label="Acesso" className="lg:col-span-4 lg:col-start-9">
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
        className="page mt-section border-t border-line-strong py-[var(--space-head)]"
      >
        <p className="meta">Próximo projeto</p>
        <Link
          href={`/projetos/${next.slug}`}
          className="group mega-md mt-3 flex items-baseline justify-between gap-6 transition-colors hover:text-accent"
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
  n,
  label,
  className = "",
  children,
}: {
  n: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`fx-up ${className}`}>
      <h2 className="meta mb-4 flex gap-3 font-mono tracking-normal">
        <span className="text-accent">{n}</span>
        {label}
      </h2>
      {children}
    </section>
  );
}
