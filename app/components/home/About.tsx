import { education, photos } from "@/app/content/career";
import { Print } from "@/app/components/ui/Frame";
import SectionHead from "@/app/components/ui/SectionHead";

export default function About() {
  return (
    <section id="sobre" className="page mt-section">
      <SectionHead number="05" title="Sobre" />

      <div className="cols mt-head items-start">
        <div className="lg:col-span-3">
          <Print
            {...photos.portrait}
            shape="portrait"
            sizes="(max-width: 1024px) 60vw, 280px"
            caption="Minicurso na UFPA, 2026."
            className="w-[64%] max-w-[17rem] lg:w-full"
          />
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <p className="statement fx-up">
            Comecei no <strong>suporte de TI</strong> e no desenvolvimento de
            páginas web. Depois, em operações, aprendi a{" "}
            <strong>documentar fluxos</strong> e a ouvir quem usa o sistema. Hoje
            participo do desenvolvimento de <strong>sistemas completos</strong>.
          </p>

          <div className="mt-head grid gap-6 md:grid-cols-2 md:gap-8">
            <p className="fx-up">
              Essa sequência explica minha forma de trabalhar. Antes de escolher
              uma solução, procuro entender a regra que ela precisa garantir e
              quem dependerá dela. Prefiro estruturas simples, responsabilidades
              bem delimitadas e decisões que outra pessoa consiga compreender sem
              a minha presença.
            </p>
            <p className="fx-up" style={{ "--d": "100ms" } as React.CSSProperties}>
              Ensinar reforçou esse critério. Preparar aulas para iniciantes exige
              separar o que se compreende do que apenas se sabe utilizar, e levo a
              mesma exigência para o código: se não consigo explicar uma decisão,
              ela ainda não está pronta.
            </p>
          </div>

          <div className="fx-up mt-group grid gap-x-8 gap-y-1 border-t border-line pt-4 md:grid-cols-2">
            <p className="meta">Formação</p>
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
