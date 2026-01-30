"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // évite un mismatch SSR/CSR
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded border border-neutral-800 bg-neutral-950/50 px-2.5 py-1.5 text-neutral-200 hover:bg-neutral-900 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-200
                 light:border-neutral-200 light:bg-white/60 light:text-neutral-900"
      aria-label="Basculer thème"
      title="Basculer thème"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
