import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, DM_Mono, Instrument_Sans } from "next/font/google";

import "./globals.css";
import Header from "./components/layout/Header";
import Motion from "./components/ui/Motion";
import Footer from "./components/layout/Footer";
import { site, socials } from "./content/site";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

const title = `${site.name}, ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "desenvolvedora full stack",
    "desenvolvedora júnior",
    "React",
    "Next.js",
    "TypeScript",
    "APIs",
    "Pará",
    "Belém",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#12110f",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  image: `${site.url}/fotos/beatriz-foto.webp`,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [socials.github, socials.linkedin],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Estácio" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${instrument.variable} ${dmMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#conteudo" className="skip-link print:hidden">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
