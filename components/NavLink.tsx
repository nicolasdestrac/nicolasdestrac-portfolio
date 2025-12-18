"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={
        "block rounded px-2 py-1.5 text-sm " +
        (active
          ? "bg-neutral-900 text-neutral-100 border border-neutral-800"
          : "text-neutral-300 hover:bg-neutral-900")
      }
    >
      {children}
    </Link>
  );
}
