/**
 * Point unique à adapter pour le site (SEO, contact, réseaux).
 * Les pages légales reprennent ces valeurs quand c’est pertinent.
 */
export const siteConfig = {
	/** Nom affiché (balises, footer, Open Graph) */
	name: '[Nom du site — à modifier]',
	/** Phrase courte sous le titre principal */
	tagline: '[Une phrase qui résume votre activité — à modifier]',
	/** Meta description par défaut (~150–160 caractères pour le SEO) */
	defaultDescription:
		'[Description pour les moteurs de recherche : qui vous êtes, où, quoi. À modifier.]',
	lang: 'fr',
	locale: 'fr_FR',
	/** Couleur navigateur (mobile) */
	themeColor: '#047857',
	contact: {
		email: '[contact@exemple.fr — à modifier]',
		phone: '[01 23 45 67 89 — à modifier]',
	},
	/** SIRET / identifiant légal affiché dans le footer et les mentions */
	legalId: '[SIRET ou identifiant — à modifier]',
	/** @handle sans @ ; laisser vide si pas de compte */
	twitterHandle: '',
	/**
	 * URL absolue d’une image Open Graph (1200×630 recommandé), ou '' pour ne pas l’émettre.
	 * Après déploiement, peut être `https://votre-domaine/og-image.jpg` si vous ajoutez le fichier dans public/.
	 */
	ogImageUrl: '',
} as const;
