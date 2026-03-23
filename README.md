# Modèle Astro — landing + pages légales

Projet prêt à l’emploi : Astro 6, Tailwind 4, sitemap, layout SEO (Open Graph, canonical), footer, hero minimal, mentions légales / politique de confidentialité / CGU, déploiement GitHub Pages via Actions.

**Prérequis :** Node.js ≥ 22.12 (voir `package.json` → `engines`). Un fichier `.nvmrc` fixe la branche majeure pour `nvm use`.

---

## Utiliser ce dépôt comme modèle

### Sur GitHub

1. Dans le dépôt **source** du modèle : **Settings** → **General** → cocher **Template repository**, puis enregistrer.
2. Sur la page du dépôt : **Use this template** → **Create a new repository**.
3. Cloner le nouveau dépôt, puis à la racine :

   ```sh
   pnpm install
   pnpm dev
   ```

4. Adapter au minimum :
   - `astro.config.mjs` — `site` (`VOTRE_USER` / domaine) et `base` : le segment après `github.io` doit être le **nom exact du nouveau dépôt** (remplacer `landing-page-template` dans `BASE` si besoin).
   - `src/site.config.ts` — nom, contact, textes, SEO.
   - `package.json` — champ `name` (et éventuellement `version`).

### Avec la CLI Astro

Crée un dossier à partir de ce dépôt GitHub (remplace `PROPRIETAIRE/NOM_DU_DEPOT` et éventuellement la branche) :

```sh
pnpm create astro@latest mon-nouveau-site -- --template PROPRIETAIRE/NOM_DU_DEPOT
```

Puis `cd mon-nouveau-site`, `pnpm install`, `pnpm dev`, et les mêmes adaptations que ci-dessus.

---

## Structure du projet

```text
/
├── public/
├── src/
│   ├── components/     HeroMinimal, SiteFooter
│   ├── layouts/        Layout.astro (SEO global)
│   ├── lib/            utilitaires (chemins)
│   ├── pages/          index, mentions légales, confidentialité, CGU
│   ├── styles/         global.css
│   └── site.config.ts  réglages site (un seul fichier à personnaliser en priorité)
├── astro.config.mjs
└── package.json
```

---

## Commandes

| Commande        | Action                          |
| :-------------- | :------------------------------ |
| `pnpm install`  | Installe les dépendances        |
| `pnpm dev`      | Serveur de dev (port par défaut Astro) |
| `pnpm build`    | Build production → `dist/`      |
| `pnpm preview`  | Prévisualise le build local     |

---

## Déploiement (GitHub Pages)

Le workflow `.github/workflows/deploy-github-pages.yml` build et publie sur push vers `main` ou `master`.

1. **Repository** → **Settings** → **Pages** : source **GitHub Actions**.
2. Aligner `site` et `base` dans `astro.config.mjs` avec l’URL réelle du site (dépôt projet sous `https://USER.github.io/nom-repo/` → `base` doit être `/nom-repo/`).

Documentation Astro : [https://docs.astro.build](https://docs.astro.build).
