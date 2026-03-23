/** Lien interne compatible avec GitHub Pages (`base` non racine dans astro.config.mjs). */
export function pageHref(path: string): string {
	const base = import.meta.env.BASE_URL;
	const clean = path.startsWith('/') ? path.slice(1) : path;
	return base + clean;
}
