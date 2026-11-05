/**
 * Representações abstratas dos produtos sob confidencialidade.
 * Usam apenas o que já é público na descrição de cada produto, organizado nas
 * mesmas quatro dimensões do diagrama da primeira dobra. Não reproduzem telas,
 * dados nem a arquitetura real.
 */

const bands = ["Pessoas", "Interface", "Lógica", "Dados"];

function Base({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 480 400"
      className="sketch h-auto w-full max-w-[36rem] overflow-visible"
    >
      {bands.map((band, index) => (
        <g key={band}>
          <line x1="0" x2="480" y1={index * 100} y2={index * 100} className="sk-line" />
          <text x="0" y={index * 100 + 24} className="sk-band">
            {band}
          </text>
        </g>
      ))}
      {children}
    </svg>
  );
}

/** Muitas respostas entram; depois do anonimato, segue um único fluxo sem identificação. */
export function SketchNr1() {
  const people = Array.from({ length: 13 }, (_, index) => ({
    x: 100 + index * 16,
    y: index % 2 ? 72 : 52,
  }));

  return (
    <Base label="Representação abstrata do NR-1: várias pessoas respondem a questionários, as respostas passam pelo anonimato e pelo processamento, e a gestão as acessa sob controle de acesso.">
      {people.map((person) => (
        <g key={person.x}>
          <line x1={person.x} y1={person.y} x2="150" y2="135" className="sk-thread" />
          <circle cx={person.x} cy={person.y} r="4" className="sk-open" />
        </g>
      ))}

      <path
        d="M150 135 V235 C150 295 190 335 250 335 C335 335 420 305 420 235 V135"
        className="sk-flow"
      />

      <circle cx="150" cy="135" r="7" className="sk-open-accent" />
      <text x="166" y="141" className="sk-text">Questionários</text>

      <circle cx="150" cy="235" r="11" className="sk-open-accent" />
      <circle cx="150" cy="235" r="4" className="sk-solid" />
      <text x="170" y="241" className="sk-text">Anonimato</text>

      <circle cx="250" cy="335" r="12" className="sk-solid" />
      <text x="250" y="382" textAnchor="middle" className="sk-text">
        Processamento de respostas
      </text>

      <rect x="412" y="227" width="16" height="16" className="sk-open-accent" />
      <text x="402" y="230" textAnchor="end" className="sk-text">Controle</text>
      <text x="402" y="252" textAnchor="end" className="sk-text">de acesso</text>

      <circle cx="420" cy="135" r="7" className="sk-open-accent" />
      <text x="404" y="141" textAnchor="end" className="sk-text">Gestão</text>
    </Base>
  );
}

/** Uma gestão abre vários fluxos, cada um com suas regras, reunidos no acompanhamento. */
export function SketchIbaby() {
  const rules = [190, 280, 370];
  const ticks = Array.from({ length: 19 }, (_, index) => 90 + index * 20);

  return (
    <Base label="Representação abstrata do iBaby Coach: a gestão abre diferentes fluxos, cada um passa por regras de negócio, gera atividades e alimenta o acompanhamento.">
      <line x1="120" y1="58" x2="120" y2="135" className="sk-thread" />
      <circle cx="120" cy="58" r="4" className="sk-open" />
      <line x1="440" y1="58" x2="440" y2="135" className="sk-thread" />
      <circle cx="440" cy="58" r="4" className="sk-open" />

      {ticks.map((x) => (
        <line key={x} x1={x} x2={x} y1="329" y2="341" className="sk-thread" />
      ))}
      <line x1="90" x2="450" y1="335" y2="335" className="sk-line-strong" />

      {rules.map((x) => (
        <g key={x}>
          <path d={`M120 135 C120 195 ${x} 165 ${x} 225 V335`} className="sk-flow" />
          <rect
            x={x - 8}
            y="217"
            width="16"
            height="16"
            transform={`rotate(45 ${x} 225)`}
            className="sk-open-accent"
          />
          <circle cx={x} cy="335" r="5" className="sk-solid" />
        </g>
      ))}
      <path d="M370 335 C430 335 440 240 440 135" className="sk-flow" />

      <circle cx="120" cy="135" r="7" className="sk-open-accent" />
      <text x="136" y="141" className="sk-text">Gestão</text>

      <circle cx="440" cy="135" r="7" className="sk-open-accent" />
      <text x="424" y="141" textAnchor="end" className="sk-text">Acompanhamento</text>

      <text x="280" y="282" textAnchor="middle" className="sk-text">
        Regras de negócio
      </text>
      <text x="280" y="382" textAnchor="middle" className="sk-text">
        Atividades
      </text>
    </Base>
  );
}
