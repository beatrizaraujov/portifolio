"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = "hover:text-white text-[#555555] transition-all duration-300 ease-in-out cursor-pointer";

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-10 h-[72px]">
          <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#D6D6D6] whitespace-nowrap">
            <Link href="/" className="hover:text-white transition-colors duration-300">Beatriz Araújo</Link>
          </div>
          <div className="hidden md:flex justify-center">
            <ul className="flex items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.2em]">
              <Link href="/projetos" className={`${linkClass} relative group`}>
                Projetos
                <span className="absolute left-0 -bottom-[8px] w-0 h-[2px] bg-[#7B7BFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/expertise" className={linkClass}>Especialidades</Link>
              <Link href="/metodologia" className={linkClass}>Metodologia</Link>
              <Link href="/portfolio" className={linkClass}>Portfólio</Link>
            </ul>
          </div>
          <div className="hidden md:flex justify-end">
            <a 
              href="https://wa.me/5591989285474?text=Olá%20Beatriz,%20vim%20pelo%20seu%20portfólio" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#7B7BFF] text-black text-[10px] font-bold uppercase px-7 h-[40px] rounded-xl hover:bg-[#8F8FFF] transition-all duration-300 active:scale-95">
                Contato
              </button>
            </a>
          </div>
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 transition-all duration-300 active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col items-center justify-center md:hidden animate-in fade-in duration-300">
          <ul className="flex flex-col items-center gap-10 text-2xl uppercase font-bold text-white">
            <Link href="/projetos" className="hover:text-[#7B7BFF] transition-colors duration-300" onClick={() => setIsOpen(false)}>Projetos</Link>
            <Link href="/expertise" className="hover:text-[#7B7BFF] transition-colors duration-300" onClick={() => setIsOpen(false)}>Especialidades</Link>
            <Link href="/metodologia" className="hover:text-[#7B7BFF] transition-colors duration-300" onClick={() => setIsOpen(false)}>Metodologia</Link>
            <Link href="/portfolio" className="hover:text-[#7B7BFF] transition-colors duration-300" onClick={() => setIsOpen(false)}>Portfólio</Link>
          </ul>
        </div>
      )}
    </>
  );
}