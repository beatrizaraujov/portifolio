import Link from "next/link";

import { experiences, type Experience } from "@/app/content/career";
import { projects } from "@/app/content/projects";
import { Arrow } from "@/app/components/ui/ExternalLink";
import { LayerStops, LayerTrack, layerNames } from "@/app/components/ui/Route";
import SectionHead from "@/app/components/ui/SectionHead";

/** Da primeira etapa à atual: a linha acompanha a rolagem. */
export default function Career() {
  const [ktech, hostgreen, hougmain, independent] = experiences;

  return (
    <section id="trajetoria" className="page mt-section">
      <SectionHead
        title="Trajetória"
        aside={
          <p className="note">
            De páginas web e operações à participação em sistemas completos.
          </p>
        }
      />

      <ol className="timeline mt-head">
        <Step item={ktech} />
        <Step item={hostgreen} />
        <Principal item={hougmain} />
        <Independent item={independent} />
      </ol>
    </section>
  );
}

/** Mesma grade em todas as etapas: período, empresa e cargo, atividades. */
function Step({ item }: { item: Experience }) {
  return (
    <li className="timeline-item cols fx-up items-start">
      <div className="lg:col-span-3">
        <p className="tag">{item.period}</p>
        {item.place ? <p className="meta">{item.place}</p> : null}
      </div>
      <div className="lg:col-span-4">
        <h3 className="title">{item.organization}</h3>
        <p className="mt-1 leading-snug font-medium">{item.title}</p>
      </div>
      <div className="lg:col-span-5">
        <p>{item.text}</p>
        {item.layers.length > 0 ? (
          <div className="mt-3">
            <LayerTrack
              active={item.layers}
              label={`Camadas em ${item.organization}`}
            />
          </div>
        ) : null}
      </div>
    </li>
  );
}

function Principal({ item }: { item: Experience }) {
  return (
    <li className="timeline-item fx-up">
      <div className="panel panel-pad cols items-start">
        <div className="lg:col-span-4">
          <p className="tag">Experiência atual</p>
          <h3 className="mega-md mt-2">{item.organization}</h3>
          <p className="mt-2 leading-snug font-medium">{item.title}</p>
          <div className="mt-group" role="group" aria-label="Camadas de atuação">
            <LayerStops active={item.layers} />
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="lede">{item.text}</p>
          {item.scope ? (
            <dl className="mt-group">
              {item.scope.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-x-5 gap-y-1 border-t border-line py-4 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="font-semibold">{group.label}</dt>
                  <dd>{group.text}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </li>
  );
}

/** Trabalho independente: cada entrega com sua própria trilha, sem somá-las. */
function Independent({ item }: { item: Experience }) {
  return (
    <li className="timeline-item cols fx-up items-start">
      <p className="tag lg:col-span-3">{item.period}</p>
      <div className="lg:col-span-4">
        <h3 className="title">{item.organization}</h3>
        <p className="mt-1 leading-snug font-medium">{item.title}</p>
      </div>
      <p className="lg:col-span-5">{item.text}</p>

      <ul className="lg:col-span-9 lg:col-start-4">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="border-t border-line"
            style={{ "--line": `var(--${project.color})` } as React.CSSProperties}
          >
            <Link
              href={`/projetos/${project.slug}`}
              className="group flex flex-wrap items-center gap-x-6 gap-y-1 py-4"
            >
              <span className="min-w-0 flex-[1_1_16rem]">
                <span className="block text-[1.25rem] leading-tight font-bold tracking-tight transition-colors group-hover:text-accent">
                  {project.name}
                </span>
                <span className="meta block">{layerNames(project.layers)}</span>
              </span>
              <LayerTrack
                active={project.layers}
                label={`Camadas em ${project.name}`}
              />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow direction="right" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
