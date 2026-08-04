"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navigation, site, socials } from "@/app/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Enquanto o menu cobre a tela, o fundo não deve rolar. Esc fecha.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-60 border-b border-white/5 bg-ink-900/85 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="shell flex h-[72px] items-center justify-between"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-chalk transition-colors hover:text-accent-300"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent-400 after:transition-transform after:duration-300 hover:text-chalk ${
                    isActive
                      ? "text-chalk after:scale-x-100"
                      : "text-faint after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden h-10 px-6 text-[13px] md:inline-flex"
        >
          Entrar em contato
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-70 -mr-2 p-2 text-chalk md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="menu-mobile"
        hidden={!isOpen}
        className="fixed inset-0 top-[72px] z-50 bg-ink-900 md:hidden"
      >
        <ul className="shell flex flex-col gap-2 pt-10">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block border-b border-white/5 py-5 text-3xl font-semibold tracking-tight transition-colors ${
                  pathname === item.href ? "text-accent-300" : "text-chalk"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="shell pt-10">
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary w-full"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </header>
  );
}
