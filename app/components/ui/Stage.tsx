import type { Project } from "@/app/content/projects";
import { addressOf, Frame, Phone } from "@/app/components/ui/Frame";

/**
 * Mesmo palco para todos os projetos: muda só o que há dentro.
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
    <div className="panel stage fx-stage">
      {portrait ? (
        <svg aria-hidden viewBox="0 0 1000 1000" className="stage-rings fx-spin">
          <circle cx="500" cy="500" r="490" className="dotted" />
          <circle cx="500" cy="500" r="360" />
          <circle cx="500" cy="500" r="232" />
        </svg>
      ) : null}

      <div data-tilt className="stage-inner">
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
