"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Basculer thème"
      title="Basculer thème"
      className={[
        // base — identique NavLink
        "inline-flex items-center gap-1 rounded px-2 py-1.5 text-sm border transition-colors",
        "border-transparent",
        // light
        "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
        // dark
        "dark:text-neutral-300 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-100",
        className,
      ].join(" ")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
