"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"          // ajoute class="dark" sur <html>
      defaultTheme="dark"
      enableSystem={false}       // on force à être stable (pas de switch auto OS)
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
