const rings = [
  { id: "pessoas", cx: 500, cy: 500, r: 490, dotted: true },
  { id: "interface", cx: 530, cy: 530, r: 360, dotted: false },
  { id: "logica", cx: 565, cy: 565, r: 232, dotted: false },
  { id: "dados", cx: 600, cy: 600, r: 104, dotted: false },
] as const;

const path =
  "M742 75 C 880 165 905 300 876 432 C 845 575 765 700 672 785 C 630 815 560 720 600 600";

const labels = [
  {
    id: "pessoas",
    title: "Pessoas",
    text: "quem usa e quem mantém",
    style: { right: "0%", top: "-1.5%", textAlign: "right" as const },
  },
  {
    id: "interface",
    title: "Interface",
    text: "o que se vê e se opera",
    style: { right: "14%", top: "37%", textAlign: "right" as const },
  },
  {
    id: "logica",
    title: "Lógica",
    text: "as regras que o produto garante",
    style: { left: "69%", top: "77%", width: "31%" },
  },
  {
    id: "dados",
    title: "Dados",
    text: "o que precisa permanecer",
    style: { left: "62%", top: "56%" },
  },
];

/**
 * Pessoas, interface, lógica e dados como órbitas em torno de um mesmo centro:
 * o traço acompanha o caminho de uma requisição, da pessoa até o dado.
 */
export default function SystemOrbit() {
  return (
    <div data-tilt style={{ "--tilt": 7 } as React.CSSProperties} className="sys-wrap relative">
      <svg viewBox="0 0 1000 1000" aria-hidden className="sys">
        {rings.map((ring) => (
          <circle
            key={ring.id}
            data-o={ring.id}
            cx={ring.cx}
            cy={ring.cy}
            r={ring.r}
            pathLength={ring.dotted ? undefined : 1}
            className={`sys-ring ${ring.dotted ? "sys-ring-dotted" : "draw"}`}
          />
        ))}

        <path id="requisicao" d={path} className="sys-path" />

        <circle data-n="pessoas" cx="742" cy="75" r="8" className="sys-node" />
        <circle data-n="interface" cx="876" cy="432" r="8" className="sys-node" />
        <circle data-n="logica" cx="672" cy="785" r="8" className="sys-node" />
        <circle cx="600" cy="600" r="13" className="sys-core" />

        <circle r="5" className="sys-dot">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#requisicao" />
          </animateMotion>
        </circle>
      </svg>

      <ul aria-label="As quatro dimensões de um sistema">
        {labels.map((label) => (
          <li
            key={label.id}
            data-l={label.id}
            className="sys-label"
            style={label.style}
          >
            <b>{label.title}</b>
            <small>{label.text}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
