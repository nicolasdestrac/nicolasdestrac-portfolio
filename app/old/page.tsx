// app/archives/page.tsx
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Old() {
  return (
    <div className="w-full text-center">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="text-2xl font-semibold">Ancien site</h1>
        <h2 className="text-2xl text-neutral-600 dark:text-neutral-400">
          Première version de mon site internet pour mon activité d'accessoiriste de décor dans le cinéma.
        </h2>
        <h2 className="text-2xl text-neutral-600 dark:text-neutral-400 mb-4">
          Le site avait était codé sur bloc-note en 2013 (HTML/CSS).
        </h2>
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
        <a href="https://github.com/nicolasdestrac/nicolasdestrac-old#"></a>
      </div>

      <iframe
        src="/legacy/index.html"
        title="Ancien site"
        className="w-full border-0"
        style={{ height: "calc(100vh - 160px)" }} // ajuste si besoin
      />
    </div>
  );
}
