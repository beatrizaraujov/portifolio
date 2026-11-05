import type { ReactNode } from "react";

/** Seta traçada em SVG: mantém o mesmo desenho em qualquer fonte de sistema. */
export function Arrow({ direction = "out" }: { direction?: "out" | "left" | "right" | "down" }) {
  const rotate = { out: -45, left: 180, right: 0, down: 90 }[direction];

  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      width="0.7em"
      height="0.7em"
      style={{ transform: `rotate(${rotate}deg)`, alignSelf: "center" }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M0.5 6h10.5M7 2l4 4-4 4" />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className}`}
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
      <Arrow />
    </a>
  );
}
