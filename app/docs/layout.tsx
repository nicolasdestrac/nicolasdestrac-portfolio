import Link from "next/link";
import "../globals.css";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { group: "Getting Started", items: [
    { href: "/docs", label: "Overview" },
    { href: "/docs/projets", label: "Projets" },
    { href: "/docs/stack", label: "Stack & Outils" },
  ]},
  { group: "Guides", items: [
    { href: "/docs/nlp", label: "NLP" },
    { href: "/docs/time-series", label: "Time Series" },
    { href: "/docs/classif", label: "Classification" },
  ]},
  { group: "Ressources", items: [
    { href: "/docs/cv", label: "CV" },
    { href: "/docs/contact", label: "Contact" },
  ]},
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur
                   dark:border-neutral-800 dark:bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            nicolas<span className="font-shadow">destrac</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <Link href="/docs">Docs</Link>
            <Link href="/projets">Portfolio</Link>
            <Link href="/contact" className="underline">Contact</Link>
            <span className="text-xs rounded bg-neutral-800 px-2 py-1">v0.1</span>
          </nav>
          <form className="ml-auto md:ml-0 w-48 md:w-72">
            <input
              placeholder="Rechercher (bientôt)"
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 text-sm outline-none"
            />
          </form>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2 space-y-8">
          {NAV.map((section) => (
            <nav key={section.group}>
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 mb-2">{section.group}</h4>
              <ul className="space-y-1">
                {section.items.map((it) => (
                  <li key={it.href}>
                    <NavLink href={it.href}>{it.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </aside>

        {/* Content */}
        <main className="col-span-12 md:col-span-9 lg:col-span-7
          prose prose-neutral max-w-none
          dark:prose-invert
          prose-headings:scroll-mt-20
          prose-code:before:content-[''] prose-code:after:content-['']
        ">
          {children}
        </main>

        {/* TOC placeholder */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 text-sm">
            <div className="mb-2 text-neutral-400 uppercase tracking-wider text-xs">On this page</div>
            <ul className="space-y-1 text-neutral-300">
              <li className="text-neutral-500">Les titres h2/h3 s’afficheront ici (bientôt)</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
