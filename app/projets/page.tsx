import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ChevronDown, Cpu, Database, Play, Square, Terminal } from "lucide-react";
import { HighlightedCode } from "@/components/HighlightedCode";
import { Card, CardContent } from "@/components/ui/card";

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

function CellLabel({ idx, type }: { idx: number; type: "md" | "code" | "out" }) {
  const label =
    type === "md"
      ? "[markdown]"
      : type === "code"
      ? "In [" + idx + "]:"
      : "Out[" + idx + "]:";
  return (
    <div className="w-28 pr-4 text-right text-[11px] leading-6 text-neutral-500 select-none">
      {label}
    </div>
  );
}

function MarkdownCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 py-4">
      <CellLabel idx={0} type="md" />
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        {children}
      </div>
    </div>
  );
}

function CodeCell({
  idx,
  code,
  lang = "txt",
  children,
}: {
  idx: number;
  code: string;
  lang?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="py-3">
      <div className="flex items-start gap-4">
        <CellLabel idx={idx} type="code" />
        <div className="relative w-full">
          <div className="rounded-2xl">
            <HighlightedCode code={code} lang={lang} />
          </div>
        </div>
      </div>

      {children && (
        <div className="flex items-start gap-4 mt-2">
          <CellLabel idx={idx} type="out" />
          <div className="w-full">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const projects = [
    {
      title: "Classification d'images e-commerce",
      desc: "Transfer learning (VGG16), data augmentation, réduction de dimension, comparaison par ARI.",
      tags: ["CNN", "VGG16", "KMeans", "t-SNE"],
      link: "/projets",
    },
    {
      title: "Scoring",
      desc: "API + app Streamlit déployés, suivi data drift (Evidently).",
      tags: ["Evidently", "Render", "Streamlit"],
      link: "https://github.com/nicolasdestrac/openclassrooms-projet7-scoring",
    },
    {
      title: "Sat2Plan",
      desc: "Transformation d'images satellites en cartes dans le style de Google Maps.",
      tags: ["GAN", "GCP", "Le Wagon"],
      link: "https://github.com/Orolol/sat2plan",
    },
  ];

  return (
    <div className="min-w-0 h-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopBar />
      {/* Cell: Projects */}
            <MarkdownCell>
              <h2 id="projets" className="text-2xl md:text-3xl font-semibold">
                Projets
              </h2>
            </MarkdownCell>

            <CodeCell
              idx={2}
              lang="python"
              code={`# affichage_projets()\nprojects.head(3)`}>
              <div className="grid md:grid-cols-3 gap-4">
                {projects.map((p, i) => (
                  <Card
                    key={i}
                    className="rounded-2xl overflow-hidden border border-neutral-200 bg-white dark:bg-neutral-900/60 dark:border-neutral-800/80"
                  >
                    <div className="h-28 bg-neutral-100 text-neutral-500 flex items-center justify-center text-sm dark:bg-neutral-800/60 dark:text-neutral-400">
                      aperçu
                    </div>

                    <CardContent className="p-4">
                      <div className="font-medium">{p.title}</div>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-1">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.tags.map((t, j) => (
                          <span
                            key={j}
                            className="text-xs px-2 py-0.5 rounded-lg border border-neutral-200 text-neutral-800 dark:border-neutral-800/80 dark:text-neutral-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3">
                        <a
                          className="text-sm underline hover:no-underline"
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Détails & code
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CodeCell>
    </div>
  )
}
