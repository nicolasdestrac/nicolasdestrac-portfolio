import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Square, Terminal, FileText, BarChart3, Mail, Linkedin, Github, Cpu, Settings, ChevronDown, ChevronRight, Database, FolderTree } from "lucide-react";

// ===
// Nicolas Destrac – Notebook style portfolio (v1)
// Theme: interface inspirée d'un notebook/data lab (VS Code/Jupyter vibes)
// Tech: React + Tailwind + shadcn/ui
// ===

function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 grid grid-cols-[1fr_auto_auto] gap-3 items-center">
        <div className="flex items-center gap-2 text-neutral-300">
          <Terminal className="h-4 w-4" />
          <span className="font-medium">nicolas_destra c ▷ portfolio.ipynb</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="secondary" size="sm" className="rounded-xl"><Play className="h-4 w-4 mr-1"/>Run all</Button>
          <Button variant="secondary" size="sm" className="rounded-xl"><Square className="h-4 w-4 mr-1"/>Stop</Button>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-neutral-400">
          <span className="inline-flex items-center gap-1"><Cpu className="h-4 w-4"/> kernel: python3 <ChevronDown className="h-4 w-4"/></span>
          <span className="inline-flex items-center gap-1"><Database className="h-4 w-4"/> env: prod</span>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-neutral-800/80 bg-neutral-950/60">
      <div className="p-4 text-xs uppercase tracking-wide text-neutral-400">Explorateur</div>
      <div className="px-2">
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-neutral-900/60 text-neutral-300 cursor-default">
          <FolderTree className="h-4 w-4"/>
          <span className="ml-1 font-medium">/workspace</span>
        </div>
        {[
          { name: "portfolio.ipynb", icon: <FileText className="h-3.5 w-3.5" /> },
          { name: "projets.md", icon: <FileText className="h-3.5 w-3.5" /> },
          { name: "kpi_dashboard.py", icon: <Terminal className="h-3.5 w-3.5" /> },
          { name: "model_report.html", icon: <BarChart3 className="h-3.5 w-3.5" /> },
        ].map((f, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-1.5 ml-4 rounded-lg hover:bg-neutral-900/60 text-neutral-400">
            {f.icon}
            <span className="truncate">{f.name}</span>
          </div>
        ))}
      </div>
      <div className="p-4 text-xs uppercase tracking-wide text-neutral-400">Raccourcis</div>
      <div className="px-2 pb-6 flex flex-col gap-2">
        <a className="px-3 py-1.5 rounded-lg border border-neutral-800/80 hover:border-neutral-700 text-neutral-300" href="#projets">Projets</a>
        <a className="px-3 py-1.5 rounded-lg border border-neutral-800/80 hover:border-neutral-700 text-neutral-300" href="#experience">Expérience</a>
        <a className="px-3 py-1.5 rounded-lg border border-neutral-800/80 hover:border-neutral-700 text-neutral-300" href="#contact">Contact</a>
      </div>
    </aside>
  );
}

function CellLabel({ idx, type }: { idx: number; type: "md" | "code" | "out" }) {
  const label = type === "md" ? "[markdown]" : type === "code" ? "In [" + idx + "]:" : "Out[" + idx + "]:";
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
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}

function CodeCell({ idx, code, children }: { idx: number; code: string; children?: React.ReactNode }) {
  return (
    <div className="py-3">
      <div className="flex items-start gap-4">
        <CellLabel idx={idx} type="code" />
        <div className="relative w-full">
          <pre className="rounded-2xl border border-neutral-800/80 bg-neutral-950 p-4 overflow-x-auto text-sm text-neutral-200">
            <code>{code}</code>
          </pre>
        </div>
      </div>
      {children && (
        <div className="flex items-start gap-4 mt-2">
          <CellLabel idx={idx} type="out" />
          <div className="w-full">
            {children}
          </div>
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
      link: "#",
    },
    {
      title: "Prévision conso & CO₂ bâtiments",
      desc: "Régression sur features structurelles, nettoyage, outliers, métriques explicites.",
      tags: ["pandas", "scikit-learn", "régression"],
      link: "#",
    },
    {
      title: "Intranet WordPress – KPI",
      desc: "Refactor, tables SQL, monitoring Uptime Kuma, intégrations Teams/Email.",
      tags: ["WordPress", "SQL", "Monitoring"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <TopBar />
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[16rem_1fr]">
        <Sidebar />
        <main className="px-4 sm:px-6 pb-24">
          {/* Cell: Hero markdown */}
          <MarkdownCell>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight animate-fade-up">
              <span className="font-gordita">nicolas</span><span className="font-shadow">destrac</span><br/>
              <span className="text-neutral-300 text-2xl md:text-3xl">Data Scientist (alternance → CDI)</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl">
              10+ ans de terrain (cinéma/pub) → reconversion data. Je nettoie, j'explique, je livre. Focus : vision par ordinateur, pipelines ML clairs, et dashboards opérationnels.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Python','pandas','scikit-learn','TensorFlow/Keras','SQL','Git','Docker (bases)','pfSense','WordPress'].map((t,i)=>(
                <span key={i} className="text-xs px-2 py-1 rounded-lg border border-neutral-800/80 bg-neutral-900/60">{t}</span>
              ))}
            </div>
          </MarkdownCell>

          {/* Cell: code to load libraries */}
          <CodeCell idx={1} code={`import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
print('env ready')`}>
            <div className="text-sm text-emerald-400">env ready</div>
          </CodeCell>

          {/* Cell: Projects */}
          <MarkdownCell>
            <h2 id="projets" className="text-2xl md:text-3xl font-semibold">Projets récents</h2>
          </MarkdownCell>
          <CodeCell idx={2} code={`# affichage_projets()
projects.head(3)`}>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <Card key={i} className="bg-neutral-900/60 border-neutral-800/80 rounded-2xl overflow-hidden">
                  <div className="h-28 bg-neutral-800/60 flex items-center justify-center text-neutral-400 text-sm">aperçu</div>
                  <CardContent className="p-4">
                    <div className="font-medium">{p.title}</div>
                    <p className="text-neutral-300 text-sm mt-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {p.tags.map((t, j) => (
                        <span key={j} className="text-xs px-2 py-0.5 rounded-lg border border-neutral-800/80">{t}</span>
                      ))}
                    </div>
                    <div className="mt-3">
                      <a className="text-sm underline hover:no-underline" href={p.link} target="_blank" rel="noreferrer">Détails & code</a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CodeCell>

          {/* Cell: Experience */}
          <MarkdownCell>
            <h2 id="experience" className="text-2xl md:text-3xl font-semibold">Expérience</h2>
          </MarkdownCell>
          <CodeCell idx={3} code={`# to_table(experience)
experience.sort_values('période', ascending=False)`}>
            <div className="grid md:grid-cols-2 gap-4">
              {[{
                period: "2024 → 2025",
                role: "Apprenti Data Scientist (RNCP 7)",
                org: "OpenClassrooms × Isphers",
                details: "Nettoyage, features, dashboards, intégrations WordPress & data, monitoring.",
              },{
                period: "2016 → 2023",
                role: "Accessoiriste / Menuisier de décors",
                org: "Cinéma & publicité",
                details: "Construction & accessoirisation, coordination plateau.",
              }].map((e,i)=>(
                <Card key={i} className="bg-neutral-900/60 border-neutral-800/80 rounded-2xl">
                  <CardContent className="p-4">
                    <div className="text-sm text-neutral-400">{e.period}</div>
                    <div className="mt-1 font-medium">{e.role}</div>
                    <div className="text-neutral-300">{e.org}</div>
                    <p className="text-neutral-300 text-sm mt-2">{e.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CodeCell>

          {/* Cell: Contact */}
          <MarkdownCell>
            <h2 id="contact" className="text-2xl md:text-3xl font-semibold">Contact</h2>
            <p className="text-neutral-300">Discutons de votre besoin → alternance/CDI, prototypage rapide, dashboards.</p>
          </MarkdownCell>
          <CodeCell idx={4} code={`# send_message(to='nicolas.destrac@gmail.com')`}>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-xl"><a href="mailto:nicolas.destrac@gmail.com"><Mail className="h-4 w-4 mr-2"/>Email</a></Button>
              <Button asChild variant="secondary" className="rounded-xl"><a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a></Button>
              <Button asChild variant="secondary" className="rounded-xl"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a></Button>
            </div>
          </CodeCell>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-neutral-800/80 text-sm text-neutral-500">
            © {new Date().getFullYear()} <span className="font-gordita">nicolas</span><span className="font-shadow">destrac</span> · portfolio notebook v1
          </div>
        </main>
      </div>
    </div>
  );
}
