// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NavLink } from "@/components/NavLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollToTop } from "@/components/ScrollToTop";

// 1) Déclare les polices locales (chemin = app/fonts/...)
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

// 2) SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://nicolasdestrac.com"),
  title: {
    default: "Nicolas Destrac – Data Scientist",
    template: "%s | Nicolas Destrac",
  },
  description: "Nicolas Destrac – projets data, expérience et contact.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nicolas Destrac – Data Scientist",
    description: "Projets data, expérience, contact",
    url: "https://nicolasdestrac.com",
    siteName: "nicolasdestrac.com",
    type: "website",
  },
};

// 3) Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cicleFina.variable} ${cicleGordita.variable} ${cicleShadow.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
            <nav className="mx-auto max-w-8xl px-4 h-20 flex items-center justify-between">
              <div className="tracking-tight text-[50px] leading-none">
                <a href="/" className="inline-flex items-baseline">
                  <span className="font-gordita">nicolas</span>
                  <span className="font-shadow">destrac</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-neutral-700 dark:text-neutral-300">
                <NavLink href="/projets">Projets</NavLink>
                <NavLink href="/old">Ancien site</NavLink>
                <NavLink href="/cv">CV</NavLink>
                <NavLink href="/#contact">Contact</NavLink>
                {/* Toggle light/dark */}
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="max-w-auto pb-16">{children}</main>

          <footer className="mx-auto max-w-8xl px-6 pb-12 text-sm text-neutral-600 dark:text-neutral-400 flex items-center">
            © {new Date().getFullYear()}{" "}
            <span className="ml-1 font-gordita">nicolas</span>
            <span className="font-shadow">destrac</span> · potfolio v2.0
          </footer>
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
