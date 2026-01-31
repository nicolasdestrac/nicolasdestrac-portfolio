"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut"
      title="Revenir en haut"
      className={[
        "fixed bottom-6 right-6 z-50",
        "inline-flex items-center justify-center",
        "h-10 w-10 rounded-lg",
        // style NavLink (actif/inactif -> ici “inactif”)
        "border border-neutral-200 text-neutral-700 hover:bg-neutral-100",
        "dark:border-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-900/60",
        // optionnel: petit fond translucide + blur comme ton header
        "bg-white/70 backdrop-blur dark:bg-neutral-950/50",
      ].join(" ")}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
