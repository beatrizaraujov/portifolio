import Link from "next/link";

import { experiences, type Experience } from "@/app/content/career";
import { projects } from "@/app/content/projects";
import Constellation, { layerNames } from "@/app/components/ui/Constellation";
import { Arrow } from "@/app/components/ui/ExternalLink";
import SectionHead from "@/app/components/ui/SectionHead";

/** Da primeira etapa à atual: a linha acompanha a rolagem. */
export default function Career() {
  const [ktech, hostgreen, hougmain, independent] = experiences;

  return (
    <section id="trajetoria" className="page mt-section">
      <SectionHead
        number="02"
        title="Trajetória"
        aside={
          <p className="note">
            Uma evolução de atuação: das páginas e operações à participação em
            sistemas completos. A figura registra as camadas de cada etapa.
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
        <p className="meta !text-fg">{item.period}</p>
        {item.place ? <p className="meta">{item.place}</p> : null}
        {item.layers.length > 0 ? (
          <div className="mt-4">
            <Constellation
              active={item.layers}
              label={`Camadas em ${item.organization}`}
            />
          </div>
        ) : null}
      </div>
      <div className="lg:col-span-4">
        <h3 className="title">{item.organization}</h3>
        <p className="mt-2 leading-snug font-medium">{item.title}</p>
      </div>
      <p className="text-muted lg:col-span-5">{item.text}</p>
    </li>
  );
}

function Principal({ item }: { item: Experience }) {
  return (
    <li className="timeline-item fx-up">
      <div className="panel panel-pad cols items-start">
        <div className="lg:col-span-5">
          <p className="tag">Experiência atual</p>
          <h3 className="mega-md mt-3">
            <em>{item.organization}</em>
          </h3>
          <p className="mt-2 leading-snug font-medium">{item.title}</p>
          <div className="mt-group max-w-xs">
            <Constellation
              size="lg"
              active={item.layers}
              label={`Camadas de participação na ${item.organization}`}
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="lede">{item.text}</p>
          {item.scope ? (
            <dl className="mt-group">
              {item.scope.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-x-5 gap-y-1 border-t border-line py-4 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="meta pt-0.5">{group.label}</dt>
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

/** Trabalho independente: cada entrega com sua própria figura, sem somá-las. */
function Independent({ item }: { item: Experience }) {
  return (
    <li className="timeline-item cols fx-up items-start">
      <p className="meta !text-fg lg:col-span-3">{item.period}</p>
      <div className="lg:col-span-4">
        <h3 className="title">{item.organization}</h3>
        <p className="mt-2 leading-snug font-medium">{item.title}</p>
      </div>
      <p className="text-muted lg:col-span-5">{item.text}</p>

      <ul className="lg:col-span-9 lg:col-start-4">
        {projects.map((project) => (
          <li key={project.slug} className="border-t border-line">
            <Link
              href={`/projetos/${project.slug}`}
              className="group flex items-center gap-5 py-4"
            >
              <Constellation
                active={project.layers}
                label={`Camadas em ${project.name}`}
              />
              <span className="min-w-0 flex-1">
                <span className="display-sm block font-display text-[clamp(1.375rem,1.8vw,1.875rem)] leading-tight tracking-tight transition-colors group-hover:text-accent">
                  {project.name}
                </span>
                <span className="meta block">{layerNames(project.layers)}</span>
              </span>
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
