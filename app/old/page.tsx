// app/archives/page.tsx
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Old() {
  return (
    <div className="w-full text-center">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="text-2xl font-semibold">Ancien site pour mon activité d'accessoiriste de décor dans le cinéma codé sur bloc-note en 2013 (HTML/CSS).
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
        </h1>
      </div>

      <iframe
        src="/legacy/index.html"
        title="Ancien site"
        className="h-full w-full border-0"
        style={{ height: "72vh" }}
      />
    </div>
  );
}
