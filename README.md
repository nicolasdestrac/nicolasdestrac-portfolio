# Portfolio – Nicolas Destrac (Next.js 15, style notebook)

![CI](https://github.com/nicolasdestrac/nicolasdestrac-portfolio/actions/workflows/ci.yml/badge.svg)

Site perso façon **notebook/data lab** (App Router, Tailwind, polices locales Cicle).
Objectif : présenter mes projets Data (alternance → CDI) avec un rendu type Jupyter/VS Code.

## Stack
- **Next.js 15** (App Router) • **React 18** • **Node 20+**
- **Tailwind CSS** (+ classes utilitaires, variantes responsive)
- **shadcn/ui** (Card, Button)
- **Polices locales** Cicle (Fina/Gordita/Shadow) via `next/font/local`

## Démarrage

```bash
# 1) Cloner
git clone https://github.com/nicolasdestrac/nicolasdestrac-portfolio.git
cd nicolasdestrac-portfolio

# 2) Node 20 (recommandé)
# si nvm :
nvm install 20
nvm use 20

# 3) Dépendances
npm i

# 4) Dev
npm run dev
# http://localhost:3000
