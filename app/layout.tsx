import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "Beatriz Araújo | Product Engineer",
  description: "Portfólio profissional focado em experiências de alto impacto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}