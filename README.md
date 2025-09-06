# Portfolio – Nicolas Destrac (Next.js 14 + Tailwind)

## Démarrage
```bash
npm i
npm run dev
# puis ouvrir http://localhost:3000
```

## Structure
- `app/` App Router (pages : `/`, `/projets`, `/a-propos`, `/cv`, `/videos`, `/liens`, `/contact`)
- `public/legacy/` images importées depuis l'ancien site (0 fichiers copiés)

## Redirections 301
Voir `next.config.js` (anciennes pages `.html` → nouvelles routes).

## À faire
- Ajouter `public/cv.pdf`
- Remplir contenu des pages (MDX possible plus tard)
- Brancher le formulaire (Formspree/EmailJS)
- Déployer sur Vercel et pointer le domaine OVH
