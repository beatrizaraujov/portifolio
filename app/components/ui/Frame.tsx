import Image from "next/image";

import type { ProjectImage } from "@/app/content/projects";

/** Barra de janela: três marcadores e o endereço ou nome do arquivo. */
export function WindowBar({ address }: { address: string }) {
  return (
    <span aria-hidden className="frame-bar">
      <span className="frame-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="frame-address">{address}</span>
    </span>
  );
}

/** Captura real em janela de navegador. */
export function Frame({
  image,
  address,
  sizes,
  preload = false,
}: {
  image: ProjectImage;
  address: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <span className="frame">
      <WindowBar address={address} />
      <span className="frame-window">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          preload={preload}
        />
      </span>
    </span>
  );
}

export function Phone({
  image,
  sizes,
  className = "",
}: {
  image: ProjectImage;
  sizes: string;
  className?: string;
}) {
  return (
    <span className={`phone ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
      />
    </span>
  );
}

/** Foto real como cópia impressa: margem clara, legenda e contorno deslocado. */
export function Print({
  src,
  alt,
  width,
  height,
  sizes,
  caption,
  shape,
  delay = 0,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  caption: string;
  shape: "wide" | "portrait";
  delay?: number;
  className?: string;
}) {
  return (
    <figure
      className={`print-frame fx-wipe ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      <span className="print-sheet">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={shape === "wide" ? "photo-wide" : "photo-portrait"}
        />
        <figcaption className="print-caption">{caption}</figcaption>
      </span>
    </figure>
  );
}

export function addressOf(href: string) {
  return new URL(href).host.replace(/^www\./, "");
}
