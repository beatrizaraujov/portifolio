import type { Metadata } from "next";

import {
  education,
  experiences,
  teaching,
  techContexts,
} from "@/app/content/career";
import { operationalSolution, projects } from "@/app/content/projects";
import { site, socials } from "@/app/content/site";

export const metadata: Metadata = {
  title: "Currículo",
  description: `Currículo de ${site.fullName}, ${site.role}.`,
  alternates: { canonical: "/curriculo" },
  robots: { index: false, follow: true },
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-x-6 gap-y-2 border-t border-line py-3.5 sm:grid-cols-[7.5rem_1fr] print:grid-cols-[5.5rem_1fr] print:gap-y-0 print:py-[5pt]">
      <h2 className="meta pt-0.5">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/** Origem do PDF: `npm run curriculo` imprime esta rota. */
export default function CurriculoPage() {
  const ordered = [...experiences]
    .filter((item) => item.organization !== "Projetos independentes")
    .reverse();

  return (
    <div className="paper page my-10 max-w-[56rem] py-10 print:my-0 print:max-w-none print:p-0">
      <header className="pb-4 print:pb-[6pt]">
        <h1 className="font-display text-[2.75rem] leading-none print:text-[25pt]">
          {site.fullName}
        </h1>
        <p className="mt-1.5 font-medium">{site.role}</p>
        <p className="mt-1.5 text-[0.9375rem] print:text-[9pt]">
          {site.location} · <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
          <a href={socials.linkedin}>LinkedIn</a> ·{" "}
          <a href={socials.github}>github.com/{socials.githubHandle}</a> ·{" "}
          <a href={site.url}>{site.url.replace("https://", "")}</a>
        </p>
      </header>

      <Block title="Resumo">
        <p>
          Desenvolvedora Full Stack, com formação em Análise e
          Desenvolvimento de Sistemas. Participo da construção de sistemas de
          ponta a ponta, conectando interfaces, regras de negócio, APIs, bancos
          de dados, autenticação, segurança e testes.
        </p>
      </Block>

      <Block title="Experiência">
        <ul className="space-y-3 print:space-y-[4pt]">
          {ordered.map((item) => (
            <li key={item.organization} className="break-inside-avoid">
              <p>
                <strong className="font-medium">{item.organization}</strong>,{" "}
                {item.title}
                <span className="meta ml-2">{item.period}</span>
              </p>
              <p>{item.text}</p>
              {item.scope?.map((group) => (
                <p key={group.label} className="mt-1">
                  {group.text}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Projetos">
        <ul className="space-y-3 print:space-y-[4pt]">
          <li className="break-inside-avoid">
            <p>
              <strong className="font-medium">Planejador Leve e Dashboard</strong>
              <span className="meta ml-2">Contratada pela Hougmain</span>
            </p>
            <p>
              {operationalSolution.title}: sistemas integrados para gestão de
              contratos, cargas e devoluções, com sincronização automática, regras
              validadas na API e painel de indicadores da operação.
            </p>
            <p className="meta">
              React, TypeScript, Node.js, Express, PostgreSQL, Docker, GitHub Actions
            </p>
          </li>
          {projects.map((project) => (
            <li key={project.slug} className="break-inside-avoid">
              <p>
                <strong className="font-medium">{project.name}</strong>
                <span className="meta ml-2">{project.kind}</span>
              </p>
              <p>{project.summary}</p>
              <p className="meta">{project.stack.join(", ")}</p>
              <p className="meta">
                <a href={project.links[0].href}>
                  {project.links[0].href.replace("https://", "").replace(/\/$/, "")}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Ensino">
        <p className="break-inside-avoid">
          <strong className="font-medium">{teaching.course}</strong>,{" "}
          {teaching.role.toLowerCase()}. {teaching.institution}, programa{" "}
          {teaching.program}, {teaching.place}, {teaching.period}.
        </p>
      </Block>

      <Block title="Formação">
        <p>
          <strong className="font-medium">{education.degree}</strong>,{" "}
          {education.institution}, {education.place}. {education.period}.
        </p>
        <p className="mt-1">Cursos: {education.courses.join("; ")}.</p>
      </Block>

      <Block title="Tecnologias">
        <ul>
          {techContexts.map((row) => (
            <li key={row.context}>
              <span className="font-medium">{row.context}:</span>{" "}
              {row.items.join(", ")}.
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
}
