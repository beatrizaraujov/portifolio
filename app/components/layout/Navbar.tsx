"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
 
  const linkClass = "relative group hover:text-white text-[#555555] transition-all duration-300 ease-in-out cursor-pointer py-1";

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-10 h-[72px]">
          
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#D6D6D6]">
            <Link href="/" className="hover:text-[#7B7BFF] transition-colors duration-500">
              Beatriz Araújo
            </Link>
          </div>

         
          <div className="hidden md:flex justify-center">
            <ul className="flex items-center gap-9 text-[10px] font-bold uppercase tracking-[0.2em]">
              {['Projetos', 'Expertise', 'Metodologia'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className={linkClass}>
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7B7BFF] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex justify-end">
            <a 
              href="https://wa.me/5591989285474?text=Olá%20Beatriz" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#7B7BFF] text-black text-[10px] font-extrabold uppercase px-8 h-[42px] rounded-full hover:bg-white hover:scale-105 transition-all duration-500 active:scale-95 shadow-lg shadow-[#7B7BFF]/10">
                Contato
              </button>
            </a>
          </div>

      
          <div className="md:hidden flex justify-end z-[70]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 transition-transform duration-300 active:scale-75"
            >
              {isOpen ? <X size={26} strokeWidth={1} /> : <Menu size={26} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[50] bg-[#0B0B0B] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            {['Projetos', 'Expertise', 'Metodologia'].map((item, i) => (
              <li 
                key={item}
                style={{ 
                  transitionDelay: isOpen ? `${(i + 1) * 100}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transitionProperty: 'all',
                  transitionDuration: '700ms'
                }}
              >
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="text-3xl uppercase font-black tracking-tighter text-white hover:text-[#7B7BFF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}