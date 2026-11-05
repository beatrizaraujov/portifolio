import { education, photos } from "@/app/content/career";
import { Print } from "@/app/components/ui/Frame";
import SectionHead from "@/app/components/ui/SectionHead";

export default function About() {
  return (
    <section id="sobre" className="page mt-section">
      <SectionHead title="Sobre" />

      <div className="cols mt-head items-start">
        <div className="lg:col-span-5">
          <Print
            {...photos.portrait}
            shape="portrait"
            sizes="(max-width: 1024px) 100vw, 480px"
            caption="Minicurso na UFPA, 2026."
            className="w-full max-w-[30rem]"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="statement fx-up">
            Comecei em suporte de TI e páginas web, passei por operações, onde
            documentei funcionalidades e analisei fluxos, e hoje participo do
            desenvolvimento de sistemas completos.
          </p>

          <div className="mt-group grid gap-6 md:grid-cols-2 md:gap-8">
            <p className="fx-up">
              Esse percurso orienta minha forma de trabalhar. Antes de escolher
              uma solução, procuro entender a regra que ela precisa garantir e
              quem dependerá dela. Priorizo estruturas simples e responsabilidades
              bem delimitadas, para que outra pessoa consiga manter o código.
            </p>
            <p className="fx-up" style={{ "--d": "100ms" } as React.CSSProperties}>
              O ensino reforçou esse critério. Preparar aulas para iniciantes
              exige explicar cada conceito com precisão, e aplico a mesma
              exigência às decisões técnicas que tomo e documento.
            </p>
          </div>

          <div className="fx-up mt-group grid gap-x-8 gap-y-1 border-t border-line pt-4 md:grid-cols-2">
            <p className="font-semibold">Formação</p>
            <p>
              {education.degree}. {education.institution}, {education.place}.{" "}
              {education.period}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
