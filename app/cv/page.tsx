import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CV",
  alternates: { canonical: "/projets" },
};

export default function Page() {
  const pdfUrl = "/CV_Nicolas_Destrac.pdf";

  return (
    <section className="py-6 text-center">
      <h1 className="text-3xl font-bold">CV</h1>

      <div className="mt-4 flex justify-center gap-3">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          Ouvrir le PDF
        </a>

        <a
          href={pdfUrl}
          download
          className="rounded-lg border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          Télécharger
        </a>
      </div>
    </section>
  );
}
