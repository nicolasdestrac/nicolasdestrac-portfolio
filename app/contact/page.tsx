// app/projets/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projets",
  alternates: { canonical: "/projets" },
};

export default function Page() {
  return (
    <section className="py-6 max-w-lg">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-neutral-300">Écrivez-moi : <a className="underline" href="mailto:nicolas.destrac@gmail.com">nicolas.destrac@gmail.com</a></p>
      <form className="grid gap-3 mt-6">
        <label className="grid gap-1 text-sm">
          Votre email
          <input className="bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2" type="email" placeholder="prenom@entreprise.com" />
        </label>
        <label className="grid gap-1 text-sm">
          Message
          <textarea className="bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2" rows={4} placeholder="Bonjour Nicolas, nous cherchons…" />
        </label>
        <button type="button" className="rounded-xl px-4 py-2 bg-white text-black">Envoyer</button>
        <p className="text-xs text-neutral-400">Connecter à Formspree/EmailJS plus tard.</p>
      </form>
    </section>
  );
}
