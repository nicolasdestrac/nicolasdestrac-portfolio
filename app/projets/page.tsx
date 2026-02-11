import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ChevronDown, Cpu, Database, Play, Square, Terminal } from "lucide-react";
export const metadata: Metadata = {
  title: "Projets",
  alternates: { canonical: "/projets" },
};

function TopBar() {
  return (
    <div className="sticky h-15 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/80 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 h-14 grid grid-cols-[1fr_auto_auto] gap-3 items-center">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <Terminal className="h-4 w-4" />
          <span className="font-medium">
            nicolas_destrac@notebook ▷projets.ipynb
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="secondary" size="sm" className="rounded-xl">
            <Play className="h-4 w-4 mr-1" />
            Run all
          </Button>
          <Button variant="secondary" size="sm" className="rounded-xl">
            <Square className="h-4 w-4 mr-1" />
            Stop
          </Button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <Cpu className="h-4 w-4" /> kernel: python3{" "}
            <ChevronDown className="h-4 w-4" />
          </span>
          <span className="inline-flex items-center gap-1">
            <Database className="h-4 w-4" /> env: prod
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-w-0 h-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopBar />
      <section className="py-6 text-center">
        <h1 className="text-3xl font-bold">Projets</h1>
        <p className="mt-3 text-neutral-300">Contenu à venir.</p>
      </section>
    </div>
  )
}
