import { site, socials } from "@/app/content/site";
import { Arrow } from "@/app/components/ui/ExternalLink";
import FlowMap from "@/app/components/ui/FlowMap";

export default function Intro() {
  return (
    <section className="escuro">
      <div className="page hero cols">
        <div className="lg:col-span-5">
          <p className="tag rise">{site.role}</p>
          <h1 className="hero-name rise rise-2 mt-4">
            Beatriz
            <br />
            Araújo
          </h1>
          <p className="lede rise rise-3 mt-group max-w-[30rem]">
            Desenvolvo sistemas web, da interface ao banco de dados, na Hougmain e
            em projetos independentes. Em outubro de 2026, ministrei um minicurso
            de Python na UFPA.
          </p>

          <ul className="fade-late mt-group flex flex-wrap gap-3">
            <li>
              <a href="#projetos" className="btn btn-primary">
                Ver projetos
                <Arrow direction="down" />
              </a>
            </li>
            <li>
              <a
                href={socials.curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                Currículo em PDF
                <span className="sr-only"> (abre em nova aba)</span>
                <Arrow />
              </a>
            </li>
          </ul>
        </div>

        <div className="fade-late min-w-0 lg:col-span-7">
          <FlowMap />
        </div>
      </div>
    </section>
  );
}
