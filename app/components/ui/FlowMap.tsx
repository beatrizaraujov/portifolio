"use client";

import { useEffect, useRef, useState } from "react";

import { flowRows, flows, flowSize, type Flow } from "@/app/content/flows";

const MOVE = 1500;
const DWELL = 1700;
const SPAN = MOVE + DWELL;

function rowOf(y: number) {
  return (y - flowSize.rowStart) / flowSize.rowGap;
}

/** Traçado de linha de metrô: segmentos retos com curvas de raio constante. */
function trace({ stops }: Flow, radius = 16) {
  // Paradas colineares não geram curva; só os vértices reais entram no traçado.
  const corners = stops.filter((stop, index) => {
    const before = stops[index - 1];
    const after = stops[index + 1];
    if (!before || !after) return true;
    return (
      (stop.x - before.x) * (after.y - stop.y) !==
      (stop.y - before.y) * (after.x - stop.x)
    );
  });

  let d = `M${corners[0].x} ${corners[0].y}`;

  for (let index = 1; index < corners.length; index++) {
    const from = corners[index - 1];
    const corner = corners[index];
    const to = corners[index + 1];

    if (!to) {
      d += ` L${corner.x} ${corner.y}`;
      break;
    }

    const inLength = Math.hypot(corner.x - from.x, corner.y - from.y);
    const outLength = Math.hypot(to.x - corner.x, to.y - corner.y);
    const startX = corner.x - ((corner.x - from.x) / inLength) * radius;
    const startY = corner.y - ((corner.y - from.y) / inLength) * radius;
    const endX = corner.x + ((to.x - corner.x) / outLength) * radius;
    const endY = corner.y + ((to.y - corner.y) / outLength) * radius;

    d += ` L${startX} ${startY} Q${corner.x} ${corner.y} ${endX} ${endY}`;
  }

  return d;
}

/** Posição de cada parada ao longo do traçado já curvo. */
function measure(path: SVGPathElement, flow: Flow) {
  const total = path.getTotalLength();
  let from = 0;

  return flow.stops.map((stop) => {
    let best = from;
    let bestDistance = Infinity;
    for (let at = from; at <= total; at += 2) {
      const point = path.getPointAtLength(at);
      const distance = Math.hypot(point.x - stop.x, point.y - stop.y);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = at;
      }
    }
    from = best;
    return best;
  });
}

/** Saída e chegada suaves, sem o arranque de uma curva mais acentuada. */
function ease(t: number) {
  return (1 - Math.cos(Math.PI * t)) / 2;
}

/**
 * Mapa de percursos: cada linha acompanha uma ação real de um projeto publicado,
 * atravessando as camadas do sistema na ordem em que a ação acontece.
 */
export default function FlowMap() {
  const [lineIndex, setLineIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const root = useRef<HTMLElement>(null);
  const progress = useRef<SVGPathElement>(null);
  const train = useRef<SVGGElement>(null);
  const elapsed = useRef(0);

  const flow = flows[lineIndex];
  const stop = flow.stops[stopIndex];

  useEffect(() => {
    const path = progress.current;
    const vehicle = train.current;
    const element = root.current;
    if (!path || !vehicle || !element) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lengths = measure(path, flow);
    const total = path.getTotalLength();
    const duration = (flow.stops.length - 1) * SPAN + DWELL;

    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(element);

    path.style.strokeDasharray = `${total} ${total}`;

    let frame = 0;
    let last = performance.now();
    let shown = Math.floor(elapsed.current / SPAN);

    const draw = (now: number) => {
      // O primeiro quadro pode trazer um horário anterior ao início do efeito.
      const delta = Math.max(0, Math.min(now - last, 100));
      last = now;

      if (playing && visible && !reduced.matches) elapsed.current += delta;

      if (elapsed.current >= duration) {
        elapsed.current = 0;
        setStopIndex(0);
        setLineIndex((index) => (index + 1) % flows.length);
        return;
      }

      const step = Math.floor(elapsed.current / SPAN);
      const inStep = elapsed.current - step * SPAN;
      const moving = inStep > DWELL && step < lengths.length - 1;
      const at = moving
        ? lengths[step] +
          (lengths[step + 1] - lengths[step]) * ease((inStep - DWELL) / MOVE)
        : lengths[step];

      const point = path.getPointAtLength(at);
      path.style.strokeDashoffset = `${total - at}`;
      vehicle.setAttribute("transform", `translate(${point.x} ${point.y})`);

      if (step !== shown) {
        shown = step;
        setStopIndex(step);
      }

      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [flow, playing]);

  const choose = (index: number) => {
    elapsed.current = 0;
    setStopIndex(0);
    setLineIndex(index);
  };

  const advance = () => {
    const next = (stopIndex + 1) % flow.stops.length;
    elapsed.current = next * SPAN;
    setStopIndex(next);
  };

  return (
    <figure
      ref={root}
      aria-labelledby="mapa-titulo"
      className="flow"
      style={{ "--line": `var(--${flow.color})` } as React.CSSProperties}
    >
      <figcaption className="flow-head">
        <p id="mapa-titulo" className="flow-title">
          Percursos em projetos publicados
        </p>
        <div className="flow-tabs">
          {flows.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={index === lineIndex}
              onClick={() => choose(index)}
              className="flow-tab"
              style={{ "--line": `var(--${item.color})` } as React.CSSProperties}
            >
              {item.project}
            </button>
          ))}
        </div>
      </figcaption>

      <div className="flow-map" aria-hidden>
        <ol className="flow-rows">
          {flowRows.map((row, index) => (
            <li
              key={row}
              data-on={index === rowOf(stop.y)}
              style={{
                top: `${((flowSize.rowStart + index * flowSize.rowGap) / flowSize.height) * 100}%`,
              }}
            >
              {row}
            </li>
          ))}
        </ol>

        <svg
          viewBox={`0 0 ${flowSize.width} ${flowSize.height}`}
          className="flow-svg"
        >
          {flowRows.map((row, index) => {
            const y = flowSize.rowStart + index * flowSize.rowGap;
            return (
              <line
                key={row}
                x1="0"
                x2={flowSize.width}
                y1={y}
                y2={y}
                data-on={index === rowOf(stop.y)}
                className="flow-rule"
              />
            );
          })}

          {flows.map((item, index) => (
            <path
              key={item.id}
              d={trace(item)}
              pathLength={1}
              data-on={index === lineIndex}
              className="flow-base"
              style={
                {
                  "--line": `var(--${item.color})`,
                  "--d": `${index * 260}ms`,
                } as React.CSSProperties
              }
            />
          ))}

          <path
            key={flow.id}
            ref={progress}
            d={trace(flow)}
            className="flow-progress"
          />

          {flows.map((item, index) =>
            item.stops.map((point) => (
              <circle
                key={`${item.id}-${point.name}`}
                cx={point.x}
                cy={point.y}
                r={index === lineIndex ? 3 : 1.5}
                className="flow-stop"
              />
            )),
          )}

          <circle
            key={`${flow.id}-${stopIndex}-pulso`}
            cx={stop.x}
            cy={stop.y}
            r="9"
            className="flow-pulse"
          />

          <g
            ref={train}
            className="flow-train"
            transform={`translate(${flow.stops[0].x} ${flow.stops[0].y})`}
          >
            <circle r="8" />
          </g>
        </svg>
      </div>

      <div className="flow-foot">
        <div className="flow-now">
          <p className="flow-action">
            {flow.action} · parada {stopIndex + 1} de {flow.stops.length}
          </p>
          <p key={`${flow.id}-${stopIndex}`} className="flow-name">
            {stop.name}
          </p>
          <p key={`${flow.id}-${stopIndex}-note`} className="flow-note">
            {stop.note}
          </p>
        </div>
        <div className="flow-controls">
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className="flow-control flow-pause"
          >
            {playing ? "Pausar" : "Retomar"}
          </button>
          <button type="button" onClick={advance} className="flow-control">
            Próxima parada
          </button>
        </div>
      </div>

      <div className="sr-only">
        {flows.map((item) => (
          <div key={item.id}>
            <p>
              {item.project}: {item.action}
            </p>
            <ol>
              {item.stops.map((point) => (
                <li key={point.name}>
                  {point.name}. {point.note}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </figure>
  );
}
