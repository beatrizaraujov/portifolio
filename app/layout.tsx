import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; // 1. Primeiro, importe o componente

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
      {/* Adicione a classe flex e flex-col para garantir que o rodapé "empurre" se a página tiver pouco conteúdo */}
      <body className="min-h-screen antialiased flex flex-col">
        <Navbar />
        
        {/* O flex-grow faz o main ocupar todo o espaço disponível, empurrando o footer para o fundo */}
        <main className="pt-24 flex-grow">
          {children}
        </main>

        <Footer /> {/* 2. Coloque o rodapé aqui, antes do fechamento do body */}
      </body>
    </html>
  );
}