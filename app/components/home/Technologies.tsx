import { techContexts } from "@/app/content/career";
import SectionHead from "@/app/components/ui/SectionHead";

export default function Technologies() {
  return (
    <section id="tecnologias" className="page mt-section">
      <SectionHead title="Tecnologias por contexto de uso" />

      <dl className="mt-head">
        {techContexts.map((row, index) => (
          <div
            key={row.context}
            className="fx-up cols border-t border-line py-5 !gap-y-1"
            style={{ "--d": `${index * 50}ms` } as React.CSSProperties}
          >
            <dt className="title lg:col-span-4">{row.context}</dt>
            <dd className="note self-center lg:col-span-3">{row.usage}</dd>
            <dd className="mt-1 self-center leading-snug font-medium lg:col-span-5 lg:mt-0">
              {row.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
