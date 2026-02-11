import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  Square,
  Terminal,
  Mail,
  Linkedin,
  Github,
  Cpu,
  ChevronDown,
  Database,
} from "lucide-react";

// ===
// Nicolas Destrac – Notebook style portfolio (v1)
// Theme: interface inspirée d'un notebook/data lab (VS Code/Jupyter vibes)
// Tech: React + Tailwind + shadcn/ui
// ===

function TopBar() {
  return (
    <div className="sticky h-15 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/80 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 h-14 grid grid-cols-[1fr_auto_auto] gap-3 items-center">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <Terminal className="h-4 w-4" />
          <span className="font-medium">
            nicolas_destrac@notebook ▷ accueil.ipynb
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
  children,
}: {
  idx: number;
  code: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="py-3">
      <div className="flex items-start gap-4">
        <CellLabel idx={idx} type="code" />
        <div className="relative w-full">
          <pre className="rounded-2xl border border-neutral-200 bg-white p-4 overflow-x-auto text-sm text-neutral-800 dark:border-neutral-800/80 dark:bg-neutral-950 dark:text-neutral-200">
            <code>{code}</code>
          </pre>
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

export default function NicolasNotebookPortfolio() {
  const projects = [
    {
      title: "Classification d'images e-commerce",
      desc: "Transfer learning (VGG16), data augmentation, réduction de dimension, comparaison par ARI.",
      tags: ["CNN", "VGG16", "KMeans", "t-SNE"],
      link: "/projets",
    },
    {
      title: "Prévision conso & CO₂ bâtiments",
      desc: "Régression sur features structurelles, nettoyage, outliers, métriques explicites.",
      tags: ["pandas", "scikit-learn", "régression"],
      link: "/projets",
    },
    {
      title: "Intranet WordPress – KPI",
      desc: "Refactor, tables SQL, monitoring Uptime Kuma, intégrations Teams/Email.",
      tags: ["WordPress", "SQL", "Monitoring"],
      link: "/projets",
    },
  ];

  return (
    <div className="min-w-0 h-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopBar />
        <main className="min-w-0">
          <div className="px-4 sm:px-6 py-6 pb-28">
            {/* Cell: Hero markdown */}
            <MarkdownCell>
              <h2 id="projets" className="text-2xl md:text-3xl font-semibold">
                Data Scientist
              </h2>

              <h3 className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl">
                <b>
                  Data scientist – LLM appliqués, vision par ordinateur, et pipelines ML explicables.
                </b>
                <br />
                Parcours initial de 15 ans en production audiovisuelle (cinéma, publicité).
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Python",
                  "NumPy",
                  "Pandas",
                  "Scikit-learn",
                  "TensorFlow/Keras",
                  "SQL",
                  "Git",
                  "Docker",
                  "PyTorch",
                  "AWS",
                ].map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 dark:border-neutral-800/80 dark:bg-neutral-900/60 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </MarkdownCell>

            {/* Cell: code to load libraries */}
            <CodeCell
              idx={1}
              code={`import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
print('env ready')`}
            >
              <div className="text-sm text-emerald-600 dark:text-emerald-400">
                env ready
              </div>
            </CodeCell>

            {/* Cell: Projects */}
            <MarkdownCell>
              <h2 id="projets" className="text-2xl md:text-3xl font-semibold">
                Projets récents
              </h2>
            </MarkdownCell>

            <CodeCell idx={2} code={`# affichage_projets()\nprojects.head(3)`}>
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

            {/* Cell: Experience */}
            <MarkdownCell>
              <h2 id="experience" className="text-2xl md:text-3xl font-semibold">
                Expérience
              </h2>
            </MarkdownCell>

            <CodeCell
              idx={3}
              code={`# to_table(experience)\nexperience.sort_values('période', ascending=False)`}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    period: "2024 → 2025",
                    role: "Apprenti Data Scientist",
                    org: "OpenClassrooms (RNCP 7) × Isphers",
                    details:
                      "Nettoyage, features, dashboards, intégrations WordPress & data, monitoring.",
                  },
                  {
                    period: "2016 → 2023",
                    role: "Accessoiriste / Menuisier de décors",
                    org: "Cinéma & publicité",
                    details: "Construction & accessoirisation, coordination plateau.",
                  },
                ].map((e, i) => (
                  <Card
                    key={i}
                    className="rounded-2xl border border-neutral-200 bg-white dark:bg-neutral-900/60 dark:border-neutral-800/80"
                  >
                    <CardContent className="p-4">
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {e.period}
                      </div>
                      <div className="mt-1 font-medium">{e.role}</div>
                      <div className="text-neutral-700 dark:text-neutral-300">
                        {e.org}
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-2">
                        {e.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CodeCell>

            {/* Cell: Contact */}
            <MarkdownCell>
              <h2 id="contact" className="text-2xl md:text-3xl font-semibold">
                Contact
              </h2>
            </MarkdownCell>

            <CodeCell idx={4} code={`# send_message(to='nicolas.destrac@gmail.com')`}>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl">
                  <a href="mailto:nicolas.destrac@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="secondary" className="rounded-xl">
                  <a
                    href="https://www.linkedin.com/in/nicolasdestrac"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" className="rounded-xl">
                  <a
                    href="https://github.com/nicolasdestrac"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CodeCell>
          </div>
        </main>
      </div>
  );
}
