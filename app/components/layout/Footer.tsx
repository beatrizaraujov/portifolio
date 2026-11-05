import Link from "next/link";

import { navigation, site, socials } from "@/app/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="tag">{site.fullName}</p>
          <p className="meta mt-1">
            {site.role}. {site.location}.
          </p>
        </div>

        <ul className="meta lg:col-span-2 lg:col-start-7 [&_a]:inline-block [&_a]:py-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="meta lg:col-span-2 [&_a]:inline-block [&_a]:py-1">
          <li>
            <a href={socials.github} className="hover:text-fg">
              GitHub
            </a>
          </li>
          <li>
            <a href={socials.linkedin} className="hover:text-fg">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={socials.curriculo} className="hover:text-fg">
              Currículo em PDF
            </a>
          </li>
        </ul>

        <p className="meta lg:col-span-2 lg:text-right">
          <a href="#conteudo" className="hover:text-fg">
            Voltar ao início
          </a>
          <br />
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
