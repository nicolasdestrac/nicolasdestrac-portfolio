"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById("scroll-area");
    if (!el) return;

    const onScroll = () => setShow(el.scrollTop > 300);

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [pathname]); // <= clé

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById("scroll-area");
        el?.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Revenir en haut"
      title="Revenir en haut"
      className={[
        "fixed bottom-6 right-6 z-[60]",
        "inline-flex items-center justify-center",
        "h-10 w-10 rounded-lg",
        "border border-neutral-200 text-neutral-700 hover:bg-neutral-100",
        "dark:border-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-900/60",
        "bg-white/70 backdrop-blur dark:bg-neutral-950/50",
      ].join(" ")}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
