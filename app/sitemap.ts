import type { MetadataRoute } from "next";

import { site } from "./content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const atualizadoEm = new Date();

  return ["", "/expertise", "/metodologia"].map((rota) => ({
    url: `${site.url}${rota}`,
    lastModified: atualizadoEm,
    changeFrequency: "monthly",
    priority: rota === "" ? 1 : 0.8,
  }));
}
