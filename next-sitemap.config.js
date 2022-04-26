/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.SITE_URL,
	changefreq: 'daily',
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	exclude: ['/blog/*', '/server-sitemap.xml'],
	alternateRefs: [
		{
			href: process.env.SITE_URL,
			hreflang: 'en',
		},
		{
			href: `${process.env.SITE_URL}/es`,
			hreflang: 'es',
		},
	],
	// Default transformation function
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? [],
		}
	},
	robotsTxtOptions: {
		additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
	},
}
