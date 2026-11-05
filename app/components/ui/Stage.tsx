import type { Project } from "@/app/content/projects";
import { addressOf, Frame, Phone } from "@/app/components/ui/Frame";

/**
 * Mesmo palco para todos os projetos: a cor é a da linha do projeto no mapa.
 * Duas telas, computador e celular ou somente o celular, conforme as capturas.
 */
export default function Stage({
  project,
  preload = false,
}: {
  project: Project;
  preload?: boolean;
}) {
  const address = addressOf(project.links[0].href);
  const portrait = project.image.height > project.image.width;

  return (
    <div
      className="stage fx-stage"
      style={{ "--line": `var(--${project.color})` } as React.CSSProperties}
    >
      <svg
        aria-hidden
        viewBox="0 0 1000 420"
        preserveAspectRatio="xMidYMid slice"
        className="stage-track"
      >
        <path d="M-20 330 H360 Q384 330 401 313 L560 154 Q577 137 601 137 H1020" />
        <circle cx="210" cy="330" r="11" />
        <circle cx="800" cy="137" r="11" />
      </svg>

      <div className="stage-inner">
        {portrait ? (
          <Phone
            image={project.image}
            sizes="(max-width: 640px) 56vw, 19vw"
            className="stage-phone"
          />
        ) : project.detailImage ? (
          <>
            <div className="stage-window-sm drift-a">
              <Frame
                image={project.image}
                address={address}
                sizes="(max-width: 640px) 100vw, 44vw"
                preload={preload}
              />
            </div>
            <div className="stage-window-sm drift-b">
              <Frame
                image={project.detailImage}
                address={`${address}/impactoAgricola`}
                sizes="(max-width: 640px) 100vw, 44vw"
              />
            </div>
          </>
        ) : (
          <>
            <div className="stage-window drift-a">
              <Frame
                image={project.image}
                address={address}
                sizes="(max-width: 640px) 100vw, 60vw"
                preload={preload}
              />
            </div>
            {project.mobileImage ? (
              <div className="stage-phone drift-b">
                <Phone
                  image={project.mobileImage}
                  sizes="(max-width: 640px) 56vw, 17vw"
                />
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
