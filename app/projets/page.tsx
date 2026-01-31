import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projets",
  alternates: { canonical: "/projets" },
};

export default function Page() {
  return (
    <section className="py-6 text-center">
      <h1 className="text-3xl font-bold">Projets</h1>
      <p className="mt-3 text-neutral-300">Contenu à venir.</p>
    </section>
  )
}
