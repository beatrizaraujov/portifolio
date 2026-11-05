import Image from "next/image";

import { photos, teaching } from "@/app/content/career";
import { Print, WindowBar } from "@/app/components/ui/Frame";
import { TrackRule } from "@/app/components/ui/Route";

/** Exemplo próprio; cada trecho é anotado com o tópico que demonstra. */
const code = [
  "# Variáveis",
  "notas = [7.5, 8.0, 6.5]",
  "soma = 0",
  "",
  "# Estruturas de repetição",
  "for nota in notas:",
  "    soma += nota",
  "",
  "# Operações",
  "media = soma / len(notas)",
  "",
  "# Condicionais",
  "if media >= 7:",
  '    print("Aprovação")',
  "else:",
  '    print("Recuperação")',
];

export default function Teaching() {
  const facts = [
    { label: "Curso", value: teaching.course },
    { label: "Datas", value: teaching.period },
    { label: "Instituição", value: teaching.institution },
    { label: "Programa", value: teaching.program },
    { label: "Local", value: teaching.place },
  ];

  return (
    <section id="ensino" className="campo-marinho field-panel mt-section">
      <div className="page">
        <header>
          <TrackRule />
          <h2 className="mega fx-title mt-group">Minicurso de Python na UFPA</h2>
          <p className="lede fx-up mt-3 max-w-[40rem]">{teaching.text}</p>
        </header>

        <div className="mt-head grid gap-8 md:grid-cols-2 md:gap-6">
          <Print
            {...photos.classroom}
            shape="wide"
            sizes="(max-width: 768px) 100vw, 48vw"
            caption="Em sala, com a pergunta “O que é programar?”."
          />
          <Print
            {...photos.lesson}
            shape="wide"
            delay={140}
            sizes="(max-width: 768px) 100vw, 48vw"
            caption="Aula 2 de 3: decisões e repetição."
          />
        </div>

        <div className="cols mt-head items-start">
          <div className="lg:col-span-5">
            <dl className="fx-up">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-x-4 border-t border-line-strong py-3 sm:grid-cols-[6.5rem_1fr]"
                >
                  <dt className="font-semibold">{fact.label}</dt>
                  <dd className="leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>

          </div>

          <figure className="fx-up min-w-0 lg:col-span-6 lg:col-start-7">
            <div className="code-window">
              <WindowBar address="logica_de_programacao.py" />
              <code
                role="group"
                tabIndex={0}
                aria-label="Exemplo em Python com variáveis, operações, repetição e condicional"
                className="code-lines fx-lines"
              >
                {code.map((line, index) => (
                  <span
                    key={index}
                    style={{ "--i": index } as React.CSSProperties}
                    className={[
                      line.startsWith("#") ? "code-comment" : "",
                      index === code.length - 1 ? "code-caret" : "",
                    ].join(" ")}
                  >
                    {line}
                  </span>
                ))}
              </code>
            </div>
            <figcaption className="note mt-3">
              Exemplo próprio, com os tópicos abordados no minicurso. Não reproduz
              o material das aulas.
            </figcaption>

            {teaching.certificate ? (
              <Image
                src={teaching.certificate.src}
                alt={teaching.certificate.alt}
                width={teaching.certificate.width}
                height={teaching.certificate.height}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="mt-group h-auto w-full rounded-xl"
              />
            ) : null}
          </figure>
        </div>
      </div>
    </section>
  );
}
