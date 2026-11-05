import type { ReactNode } from "react";

import { TrackRule } from "@/app/components/ui/Route";

/** Abertura igual em todas as seções: a linha, o título e, se houver, uma nota. */
export default function SectionHead({
  title,
  aside,
}: {
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header>
      <TrackRule />
      <div className="cols mt-group items-end">
        <h2 className="mega fx-title lg:col-span-7">{title}</h2>
        {aside ? (
          <div className="fx-up lg:col-span-4 lg:col-start-9">{aside}</div>
        ) : null}
      </div>
    </header>
  );
}
