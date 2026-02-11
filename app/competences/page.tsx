import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  Square,
  Terminal,
  Cpu,
  ChevronDown,
  Database,
  GitBranch,
  Wrench,
  Cloud,
  ShieldCheck,
  Brain,
  Camera,
  BookOpen,
} from "lucide-react";

function TopBar() {
  return (
    <div className="sticky h-15 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/80 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 h-14 grid grid-cols-[1fr_auto_auto] gap-3 items-center">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <Terminal className="h-4 w-4" />
          <span className="font-medium">
            nicolas_destrac@notebook ▷ competences.ipynb
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
    type === "md" ? "[markdown]" : type === "code" ? `In [${idx}]:` : `Out[${idx}]:`;
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
      <div className="prose prose-neutral max-w-none dark:prose-invert">{children}</div>
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

function OutOneLine({ value }: { value: unknown }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 dark:bg-neutral-900/60 dark:border-neutral-800/80 dark:text-neutral-200">
      <code>{JSON.stringify(value)}</code>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="text-xs px-2 py-1 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 dark:border-neutral-800/80 dark:bg-neutral-900/60 dark:text-neutral-200"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function CompetencesPage() {
  let i = 1;

  // === OUT mock (style notebook) ===
  const outGit = {
    branch: "feat/docs-theme",
    status: "clean",
    last_commit: "dcf742c",
    remote: "origin",
    checks: { lint: "pass", types: "pass" },
  };

  const outCICD = {
    pipeline: "ci.yml",
    stages: ["lint", "typecheck", "test", "build"],
    artifacts: ["coverage.xml", "build-output"],
    policy: "fail-fast",
  };

  const outDeployOps = {
    hosting: "Vercel",
    preview: "enabled",
    prod: "protected",
    observability: ["logs", "traces (basic)", "alerts (manual)"],
  };

  const outCloud = {
    aws: ["S3", "IAM", "EC2 (bases)", "CloudWatch (bases)"],
    gcp: ["Cloud Run (exp.)", "Storage (bases)"],
    principles: ["least privilege", "secrets not in repo", "cost awareness"],
  };

  const outML = {
    pipeline: ["split", "preprocess", "train", "eval", "explain"],
    metrics: ["accuracy", "f1", "rmse/mae"],
    reproducibility: ["random_state", "tracking runs (simple)"],
  };

  const outCNN = {
    approach: "transfer learning",
    backbone: "VGG16 / MobileNet (selon contrainte)",
    eval: ["learning curves", "confusion matrix", "F1"],
    deployment: "export model + inference script",
  };

  const outRAG = {
    ingestion: ["chunking", "metadata", "indexing"],
    retrieval: ["top-k", "rerank (option)"],
    answer: ["citations", "guardrails"],
    monitoring: ["latency", "hallucination signals", "feedback loop"],
  };

  return (
    <div className="h-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopBar />

      <main className="px-4 sm:px-6">
        {/* ===== Intro ===== */}
        <MarkdownCell>
          <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Compétences
          </h1>
        </MarkdownCell>

        {/* ===== 1) Versioning ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            Versioning & collaboration
          </h2>
          <h3 className="text-neutral-700 dark:text-neutral-300">
            Travail en branches courtes, commits lisibles, PR propres, et discipline “reproductible” :
            convention de nommage, changelog simple, et rollback possible.
          </h3>
          <Tags items={["Git", "GitHub", "Gitlab", "Gitea", "branches", "PR"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`# workflow minimal
git checkout -b feat/xxx
git add -A
git commit -m "Feat: add docs theme"
git push -u origin feat/xxx`}
        >
          <OutOneLine value={outGit} />
        </CodeCell>

        {/* ===== 2) CI/CD ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            CI/CD
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Objectif : éviter les surprises. Lint + typecheck + tests + build sur chaque PR, puis déploiement preview
            automatique (et prod contrôlée).
          </p>
          <Tags items={["GitHub Actions", "lint", "typecheck", "tests", "preview deployments"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`# pseudo pipeline (concept)
stages = ["lint", "typecheck", "test", "build"]
for s in stages:
    run(s)`}
        >
          <OutOneLine value={outCICD} />
        </CodeCell>

        {/* ===== 3) Déploiement & Ops ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Déploiement & exploitation
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Je sépare clairement : preview pour itérer, production stable, et une logique de diagnostic (logs, erreurs,
            reproduction locale). Je fais attention aux redirections, robots, sitemap, et au “minimum viable SEO”.
          </p>
          <Tags items={["Vercel", "preview/prod", "logs", "routing", "robots/sitemap"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`# déploiement: principe
if pr_open:
    deploy("preview")
if merged_to_main:
    deploy("production")`}
        >
          <OutOneLine value={outDeployOps} />
        </CodeCell>

        {/* ===== 4) Cloud ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Cloud
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Je sais intégrer du stockage, gérer des permissions (IAM) au plus juste, et raisonner coût/latence. J’aime les
            architectures simples, observables, et faciles à auditer.
          </p>
          <Tags items={["AWS", "GCP", "IAM", "S3/Storage", "CloudWatch (bases)"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`# exemple de checklist cloud (concept)
cloud_ready = {
  "storage": "ok",
  "iam_least_privilege": True,
  "secrets": "managed",
  "logging": "enabled"
}
cloud_ready`}
        >
          <OutOneLine value={outCloud} />
        </CodeCell>

        {/* ===== 5) ML ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Machine Learning
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Pipeline clair : préparation → split → entraînement → métriques → explicabilité. Je privilégie des baselines
            solides, et je rends les résultats “actionnables” (ce que ça améliore, ce que ça rate, pourquoi).
          </p>
          <Tags items={["pandas", "scikit-learn", "pipelines", "metrics", "explainability"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

# preprocess -> model -> eval (concept)
pipeline = Pipeline(steps=[("prep", ...), ("model", ...)])
pipeline`}
        >
          <OutOneLine value={outML} />
        </CodeCell>

        {/* ===== 6) CNN / Vision ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <Camera className="h-5 w-5" />
            CNN / Vision par ordinateur
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Approche “propre” : transfert learning, data augmentation quand utile, suivi des courbes d’apprentissage, et
            métriques adaptées (F1, confusion matrix). Je pense aussi à l’inférence (poids, latence, format).
          </p>
          <Tags items={["Transfer learning", "VGG16", "MobileNet", "data augmentation", "F1/Confusion matrix"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`# concept: transfer learning
backbone = "VGG16"
trainable = False
head = "Dense -> Softmax"
model = f"{backbone} + {head}"
model`}
        >
          <OutOneLine value={outCNN} />
        </CodeCell>

        {/* ===== 7) RAG / LLM ===== */}
        <MarkdownCell>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            RAG / LLM (IA générative)
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Je construis des réponses traçables : ingestion, retrieval, citations, et garde-fous. Je fais attention à la
            qualité des sources, à la latence, et aux cas “sans réponse” (éviter d’inventer).
          </p>
          <Tags items={["chunking", "top-k", "citations", "guardrails", "monitoring"]} />
        </MarkdownCell>

        <CodeCell
          idx={i++}
          code={`# RAG minimal (concept)
question = "..."
chunks = retrieve(question, top_k=5)
answer = llm(question, context=chunks)
{"answer": answer, "sources": [c.id for c in chunks]}`}
        >
          <OutOneLine value={outRAG} />
        </CodeCell>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-neutral-200 text-sm text-neutral-600 dark:border-neutral-800/80 dark:text-neutral-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-gordita">nicolas</span>
          <span className="font-shadow">destrac</span> · compétences notebook
        </div>
      </main>
    </div>
  );
}
