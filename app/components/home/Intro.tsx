import { techContexts } from "@/app/content/career";
import { site, socials } from "@/app/content/site";
import { Arrow, ExternalLink } from "@/app/components/ui/ExternalLink";
import SystemOrbit from "@/app/components/ui/SystemOrbit";

const techs = [...new Set(techContexts.flatMap((row) => row.items))];

function TickerTrack() {
  return (
    <ul className="ticker-track">
      {techs.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}

export default function Intro() {
  return (
    <>
      <section className="page hero cols">
        <div className="lg:col-span-7">
          <p className="tag rise">{site.role}</p>
          <h1 className="hero-name mt-5 font-display">
            <span className="word rise rise-2">Beatriz</span>{" "}
            <em className="word rise rise-3">Araújo</em>
            <span className="sr-only">, {site.role}</span>
          </h1>
          <p className="hero-line rise rise-4 mt-6">
            Desenvolvo sistemas da interface aos dados e <em>ensino</em> como
            eles funcionam.
          </p>

          <ul className="fade-late mt-group flex flex-wrap gap-x-7 gap-y-3">
            <li>
              <a href="#trabalho" className="link">
                Ver projetos
                <Arrow direction="down" />
              </a>
            </li>
            <li>
              <ExternalLink href={socials.curriculo}>
                Currículo em PDF
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div className="hero-orbit fade-late lg:col-span-5">
          <SystemOrbit />
        </div>
      </section>

      {/* A lista completa e acessível está na seção de tecnologias. */}
      <div aria-hidden className="ticker">
        <TickerTrack />
        <TickerTrack />
      </div>

      <section aria-label="Apresentação" className="page cols section-y">
        <p className="tag fx-up self-start lg:col-span-3">Apresentação</p>
        <p className="statement fx-up lg:col-span-8 lg:col-start-5">
          Sou desenvolvedora na <strong>Hougmain</strong>, onde participo do
          desenvolvimento de <strong>produtos reais</strong>, da interface ao
          banco de dados. Também realizo <strong>projetos independentes</strong>{" "}
          e, em outubro de 2026, ministrei um{" "}
          <strong>minicurso de Python na UFPA</strong>.
        </p>
      </section>
    </>
  );
}
