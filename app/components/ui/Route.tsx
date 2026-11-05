import { layers, type LayerId } from "@/app/content/site";

const short: Record<LayerId, string> = {
  interface: "Interface",
  regras: "Regras",
  apis: "APIs",
  dados: "Dados",
  seguranca: "Segurança",
  qualidade: "Testes",
};

/** Mesma informação em texto visível, para acompanhar a trilha. */
export function layerNames(active: readonly LayerId[]) {
  return layers
    .filter((layer) => active.includes(layer.id))
    .map((layer) => short[layer.id])
    .join(" · ");
}

function describe(label: string, active: readonly LayerId[]) {
  return `${label}: ${layers
    .filter((layer) => active.includes(layer.id))
    .map((layer) => layer.label.toLowerCase())
    .join(", ")}.`;
}

/** Trilha de camadas: seis estações em linha; o traço liga as camadas contíguas. */
export function LayerTrack({
  active,
  label,
}: {
  active: readonly LayerId[];
  label: string;
}) {
  const x = (index: number) => 8 + index * 24;

  return (
    <svg
      role="img"
      aria-label={describe(label, active)}
      viewBox="0 0 136 16"
      className="track"
    >
      <line x1={x(0)} x2={x(5)} y1="8" y2="8" className="track-base" />
      {layers.map((layer, index) => {
        const next = layers[index + 1];
        return next && active.includes(layer.id) && active.includes(next.id) ? (
          <line
            key={layer.id}
            x1={x(index)}
            x2={x(index + 1)}
            y1="8"
            y2="8"
            className="track-on"
          />
        ) : null;
      })}
      {layers.map((layer, index) => (
        <circle
          key={layer.id}
          cx={x(index)}
          cy="8"
          r={active.includes(layer.id) ? 4 : 2}
          className={active.includes(layer.id) ? "track-stop-on" : "track-stop"}
        />
      ))}
    </svg>
  );
}

/** As seis camadas em lista, com as trabalhadas ligadas pelo traço. */
export function LayerStops({ active }: { active: readonly LayerId[] }) {
  return (
    <ul className="stops">
      {layers.map((layer, index) => {
        const next = layers[index + 1];
        const on = active.includes(layer.id);
        return (
          <li
            key={layer.id}
            data-on={on}
            data-joined={Boolean(on && next && active.includes(next.id))}
          >
            {layer.label}
            {on ? null : <span className="sr-only"> (sem participação)</span>}
          </li>
        );
      })}
    </ul>
  );
}

/** Percurso em paradas: todas ligadas, na ordem em que acontecem. */
export function RouteStops({ stops }: { stops: readonly string[] }) {
  return (
    <ol className="stops">
      {stops.map((stop, index) => (
        <li key={stop} data-on data-joined={index < stops.length - 1}>
          {stop}
        </li>
      ))}
    </ol>
  );
}

/** Filete de abertura: uma estação da qual parte a linha do bloco. */
export function TrackRule() {
  return <span aria-hidden className="rule fx-rule" />;
}
