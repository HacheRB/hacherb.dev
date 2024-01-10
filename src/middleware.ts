import createMiddleware from 'next-intl/middleware'
import { i18nConfig } from '@/utils/i18n.config'

export default createMiddleware({
	...i18nConfig,
})

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		'/',

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		'/(en|es)/:path*',

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		'/((?!_next|_vercel|.*\\..*).*)',
	],
}
