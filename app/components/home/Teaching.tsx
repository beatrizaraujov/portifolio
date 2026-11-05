import Image from "next/image";

import { photos, talk, teaching } from "@/app/content/career";
import { Print, WindowBar } from "@/app/components/ui/Frame";

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
  const talkDetails = [talk.event, talk.topic, talk.date].filter(Boolean);
  const facts = [
    { label: "Datas", value: "27 a 29 de outubro de 2026" },
    { label: "Instituição", value: teaching.institution },
    { label: "Programa", value: teaching.program },
    { label: "Local", value: teaching.place },
  ];

  return (
    <section id="ensino" className="paper paper-panel mt-section">
      <div className="page">
        <header>
          <p className="tag fx-up">03 · Ensino</p>
          <h2 className="mega fx-title mt-4 max-w-[18em]">
            Introdução à Linguagem de <em>Programação Python</em>
          </h2>
          <p className="title fx-up mt-4 text-accent italic">{teaching.role}</p>
        </header>

        <dl className="mt-head grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className="fx-up border-t border-line-strong pt-3"
              style={{ "--d": `${index * 80}ms` } as React.CSSProperties}
            >
              <dt className="meta">{fact.label}</dt>
              <dd className="mt-1 leading-snug font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>

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
            caption="Aula 2 de 3 do minicurso: decisões e repetição."
          />
        </div>

        <div className="cols mt-block items-start">
          <div className="lg:col-span-5">
            <p className="lede fx-up">{teaching.text}</p>

            <div className="fx-up mt-head border-t border-line-strong pt-4">
              <p className="meta">Palestra</p>
              <p className="lede mt-2">
                {talk.role}: {talk.description.toLowerCase()} em {talk.place}.
              </p>
              {talkDetails.length > 0 ? (
                <p className="mt-2 text-muted">{talkDetails.join(", ")}</p>
              ) : null}
            </div>
          </div>

          <figure className="fx-up min-w-0 lg:col-span-6 lg:col-start-7">
            <div className="ink frame">
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
              Exemplo ilustrativo dos tópicos abordados. Não reproduz o material
              das aulas.
            </figcaption>

            {teaching.certificate ? (
              <Image
                src={teaching.certificate.src}
                alt={teaching.certificate.alt}
                width={teaching.certificate.width}
                height={teaching.certificate.height}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="mt-group h-auto w-full rounded-xl border border-line-strong"
              />
            ) : null}
          </figure>
        </div>
      </div>
    </section>
  );
}
