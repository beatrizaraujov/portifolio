import { site, socials } from "@/app/content/site";

const links = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Currículo (PDF)", href: socials.curriculo },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-chalk">{site.name}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 inline-block text-sm text-mute transition-colors hover:text-accent-300"
          >
            {site.email}
          </a>
        </div>

        <nav aria-label="Links externos">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-faint transition-colors hover:text-chalk"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
