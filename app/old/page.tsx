// app/archives/page.tsx
import { Button } from "@/components/ui/button";
import { Terminal, Github } from "lucide-react";

function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/80 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 h-14 grid grid-cols-[1fr_auto_auto] gap-3 items-center">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <Terminal className="h-4 w-4" />
          <p className="font-medium">https://nicolasdestrac.com/oldsite/</p>
        </div>

        <div className="hidden md:flex items-center">
          <p className="text-base font-semibold">
            Ancien site pour mon activité d&apos;accessoiriste de décor codé sur bloc-note (HTML/CSS, 2013).
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
          <Button asChild variant="secondary" className="rounded-xl">
            <a
              href="https://github.com/nicolasdestrac/nicolasdestrac-old"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Repo GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Old() {
  return (
    <div className="min-w-0 h-full min-h-0 flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopBar />

      {/* prend tout l’espace restant sous la TopBar */}
      <div className="flex-1 min-h-0">
        <iframe
          src="/legacy/index.html"
          title="Ancien site"
          className="block w-full h-full border-0"
        />
      </div>
    </div>
  );
}
