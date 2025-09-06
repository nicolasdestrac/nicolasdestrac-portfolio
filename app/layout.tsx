// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";

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
export const metadata = {
  title: "nicolas|destrac – Data Scientist",
  description: "Nicolas Destrac – projets data, expérience et contact.",
  other: {
    "og:title": "Nicolas Destrac – Data Scientist",
    "og:description": "Projets data, expérience, contact",
  },
};

// 3) Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cicleFina.variable} ${cicleGordita.variable} ${cicleShadow.variable}`}
    >
      <body className="bg-neutral-950 text-neutral-100">
        <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="tracking-tight text-[50px] leading-none">
            <span className="font-gordita">nicolas</span>
            <span className="font-shadow">destrac</span>
          </div>
          <div className="flex gap-4 text-sm text-neutral-300">
            <Link href="/projets">Projets</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact" className="underline">Contact</Link>
          </div>
        </nav>
        <main className="mx-auto max-w-6xl px-6 pb-16">{children}</main>
        <footer className="mx-auto max-w-6xl px-6 pb-12 text-sm text-neutral-400 flex items-center">
          © {new Date().getFullYear()}{" "}
          <span className="ml-1 font-gordita">nicolas</span>
          <span className="font-shadow">destrac</span>
        </footer>

      </body>
    </html>
  );
}
