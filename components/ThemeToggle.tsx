"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

type ThemeChoice = "system" | "light" | "dark";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = (theme ?? "system") as ThemeChoice;

  const items: Array<{ value: ThemeChoice; label: string; Icon: any }> = [
    { value: "system", label: "Système", Icon: Laptop },
    { value: "light", label: "Clair", Icon: Sun },
    { value: "dark", label: "Sombre", Icon: Moon },
  ];

  return (
    <div
      role="group"
      aria-label="Thème"
      className="inline-flex items-center rounded-lg border border-neutral-200 bg-white/60 p-1
                 dark:border-neutral-800 dark:bg-neutral-950/40"
    >
      {items.map(({ value, label, Icon }) => {
        const active = current === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            className={
              "inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition " +
              (active
                ? "bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900/60")
            }
            aria-pressed={active}
            title={label}
          >
            <Icon size={16} />
            <span className="hidden md:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
