// mdx-components.tsx
import type { MDXComponents } from "mdx/types";

/**
 * Mappe (optionnellement) des balises MDX -> composants React.
 * Laisser vide évite d'importer @mdx-js/react et garde le rendu en Server Component.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Exemple de mapping si tu veux styliser :
    // h1: (props) => <h1 className="text-3xl font-semibold mt-8 mb-4" {...props} />,
    // pre: (props) => <pre className="rounded bg-neutral-900 p-4 overflow-x-auto" {...props} />,
    ...components,
  };
}
