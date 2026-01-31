"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "block rounded px-2 py-1.5 text-sm border transition-colors",
        // base (light + dark)
        "border-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
        "dark:text-neutral-300 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-100",
        // active
        active
          ? "border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-100"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
