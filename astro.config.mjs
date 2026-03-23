// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * À adapter après « Use this template » ou `create astro -- --template …`.
 *
 * GitHub Pages
 * - Dépôt projet : site = https://USER.github.io , base = '/nom-exact-du-depot/'
 * - Dépôt USER.github.io (racine) : site = https://USER.github.io , base = '/'
 * - Domaine perso en racine : site = 'https://votre-domaine.tld' , base = '/'
 */
const SITE = 'https://VOTRE_USER.github.io';
/**
 * Nom du segment d’URL sous github.io (souvent = nom du dépôt).
 * Après « Use this template », remplacer `landing-page-template` par le nom de **votre** dépôt.
 */
const BASE = '/landing-page-template/';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwind()],
	},
});
