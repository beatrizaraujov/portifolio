import { layers, type LayerId } from "@/app/content/site";

const short: Record<LayerId, string> = {
  interface: "Interface",
  regras: "Regras",
  apis: "APIs",
  dados: "Dados",
  seguranca: "Segurança",
  qualidade: "Testes",
};

function point(index: number, radius: number, center: number) {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  return [center + radius * Math.cos(angle), center + radius * Math.sin(angle)] as const;
}

/**
 * Figura de camadas: seis pontos em órbita, ligados onde houve participação.
 * Cada trabalho desenha uma forma própria, derivada apenas de seus dados.
 */
export default function Constellation({
  active,
  size = "sm",
  label,
}: {
  active: readonly LayerId[];
  size?: "sm" | "lg";
  label: string;
}) {
  const large = size === "lg";
  const center = 100;
  const radius = 92;
  const dot = large ? 3.6 : 7;

  const vertices = layers
    .map((layer, index) => ({ layer, at: point(index, radius, center) }))
    .filter(({ layer }) => active.includes(layer.id));
  const shape = vertices.map(({ at }) => at.join(",")).join(" ");

  const description = `${label}: ${layers
    .filter((layer) => active.includes(layer.id))
    .map((layer) => layer.label.toLowerCase())
    .join(", ")}.`;

  return (
    <svg
      role="img"
      aria-label={description}
      viewBox={large ? "-95 -22 390 244" : "0 0 200 200"}
      className={
        large
          ? "fx-glyph h-auto w-full overflow-visible"
          : "fx-glyph size-16 flex-none overflow-visible"
      }
    >
      <circle cx={center} cy={center} r={radius} className="glyph-ring" />
      {vertices.length > 1 ? (
        <polygon points={shape} className="glyph-shape" />
      ) : null}
      {layers.map((layer, index) => {
        const [x, y] = point(index, radius, center);
        const on = active.includes(layer.id);
        const vertical = index === 0 || index === 3;
        const anchor = vertical ? "middle" : index < 3 ? "start" : "end";
        const offsetX = vertical ? 0 : index < 3 ? 12 : -12;
        const offsetY = index === 0 ? -11 : index === 3 ? 21 : 5;

        return (
          <g key={layer.id}>
            <circle
              cx={x}
              cy={y}
              r={on ? dot : dot * 0.72}
              className={on ? "glyph-on" : "glyph-off"}
            />
            {large ? (
              <text
                x={x + offsetX}
                y={y + offsetY}
                textAnchor={anchor}
                data-on={on}
                aria-hidden
                className="glyph-label"
              >
                {short[layer.id]}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

/** Mesma informação em texto visível, para acompanhar a figura pequena. */
export function layerNames(active: readonly LayerId[]) {
  return layers
    .filter((layer) => active.includes(layer.id))
    .map((layer) => short[layer.id])
    .join(" · ");
}
