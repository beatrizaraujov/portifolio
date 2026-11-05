import type { ReactNode } from "react";

/** Abertura igual em todas as seções: número, título e, se houver, uma nota à direita. */
export default function SectionHead({
  number,
  title,
  aside,
}: {
  number: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="cols items-end">
      <div className="lg:col-span-8">
        <p className="tag fx-up">{number}</p>
        <h2 className="mega fx-title mt-4">{title}</h2>
      </div>
      {aside ? <div className="fx-up lg:col-span-4">{aside}</div> : null}
    </header>
  );
}
