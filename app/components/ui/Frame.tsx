import Image from "next/image";

import type { ProjectImage } from "@/app/content/projects";

/** Faixa da janela: somente o endereço ou o nome do arquivo. */
export function WindowBar({ address }: { address: string }) {
  return (
    <span aria-hidden className="frame-bar">
      {address}
    </span>
  );
}

/** Captura real do sistema publicado. */
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

/** Foto real, com cantos largos e legenda abaixo. */
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
      className={`print fx-wipe ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      <span className="print-photo">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={90}
          className={shape === "wide" ? "photo-wide" : "photo-portrait"}
        />
      </span>
      <figcaption className="print-caption">{caption}</figcaption>
    </figure>
  );
}

export function addressOf(href: string) {
  return new URL(href).host.replace(/^www\./, "");
}
