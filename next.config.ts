import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { qualities: [75, 90] },
  /** As páginas antigas foram incorporadas à home; links já divulgados continuam válidos. */
  async redirects() {
    return [
      { source: "/expertise", destination: "/#sobre", permanent: true },
      { source: "/metodologia", destination: "/#sobre", permanent: true },
      {
        source: "/curriculo-maria%20beatriz.pdf",
        destination: "/curriculo-maria-beatriz-araujo-viana.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
