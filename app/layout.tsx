// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavLink } from "@/components/NavLink";

const cicleFina = localFont({
  src: "./fonts/Cicle_Fina.ttf",
  variable: "--font-cicle-fina",
  weight: "400",
  style: "normal",
});
const cicleGordita = localFont({
  src: "./fonts/Cicle_Gordita.ttf",
  variable: "--font-cicle-gordita",
  weight: "700",
  style: "normal",
});
const cicleShadow = localFont({
  src: "./fonts/Cicle_Shadow.ttf",
  variable: "--font-cicle-shadow",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicolasdestrac.com"),
  title: { default: "Nicolas Destrac – Data Scientist", template: "%s | Nicolas Destrac" },
  description: "Nicolas Destrac – projets data, expérience et contact.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const HEADER_H_PX = 80;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cicleFina.variable} ${cicleGordita.variable} ${cicleShadow.variable}`}
      suppressHydrationWarning
    >
      <body className="min-w-0 h-full overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider>
          {/* HEADER FIXED */}
          <header
            className="fixed inset-x-0 top-0 z-50 h-20 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80"
          >
            <nav className="mx-auto max-w-8xl px-4 min-w-0 h-full flex items-center justify-between">
              <a
                href="/"
                className="tracking-tight text-[44px] leading-none inline-flex items-baseline"
              >
                <span className="font-gordita">nicolas</span>
                <span className="font-shadow">destrac</span>
              </a>

              <div className="flex items-center gap-2 sm:gap-4">
                <ThemeToggle />
              </div>
            </nav>
          </header>

          {/* APP SHELL sous le header */}
          <div
            className="pt-20 grid grid-cols-1 lg:grid-cols-[16rem_1fr] min-h-0"
            style={{ height: `calc(100dvh - ${HEADER_H_PX}px)` }}
          >
            {/* SIDEBAR FIXE (non scrollable) */}
            <aside className="hidden lg:flex flex-col min-h-0 border-r border-neutral-200 bg-white/60 dark:border-neutral-800/80 dark:bg-neutral-950/60">
              <div className="p-4 text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                Explorateur
              </div>

              <div className="px-2 flex flex-col gap-2">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/projets">Projets</NavLink>
                <NavLink href="/competences">Compétences</NavLink>
                <NavLink href="/#contact">Contact</NavLink>
                <NavLink href="/old">Ancien site</NavLink>
              </div>

              {/* Footer collé en bas (sans trait au-dessus) */}
              <div className="mt-auto p-4 text-xs text-neutral-600 dark:text-neutral-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-gordita">nicolas</span>
                <span className="font-shadow">destrac</span>
              </div>
            </aside>

            {/* MAIN = seule zone scrollable */}
            <main className="min-w-0 min-w-0 h-full overflow-y-auto bg-white dark:bg-neutral-950">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
