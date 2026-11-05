import { techContexts } from "@/app/content/career";
import SectionHead from "@/app/components/ui/SectionHead";

export default function Technologies() {
  return (
    <section id="tecnologias" className="page mt-section">
      <SectionHead
        number="04"
        title={
          <>
            Tecnologias, <em>por contexto de uso</em>
          </>
        }
      />

      <dl className="mt-head grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techContexts.map((row, index) => (
          <div
            key={row.context}
            className="panel panel-pad panel-hover fx-up"
            style={{ "--d": `${(index % 3) * 90}ms` } as React.CSSProperties}
          >
            <dt>
              <span className="display-sm block font-display text-[clamp(1.5rem,1.9vw,2rem)] leading-none tracking-tight italic">
                {row.context}
              </span>
              <span className="note mt-2 block">{row.usage}</span>
            </dt>
            <dd className="mt-5 border-t border-line pt-4 leading-snug">
              {row.items.join(", ")}.
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
