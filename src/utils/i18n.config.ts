import type { Pathnames } from 'next-intl/navigation'

export const defaultLocale = 'en' as const

export const locales = ['en', 'es'] as const

// Use the default: `always`
export const localePrefix = undefined

export const pathnames = {
	'/': '/',
	'/about': {
		en: '/about',
		es: '/acerca',
	},
	'/projects': {
		en: '/projects',
		es: '/proyectos',
	},
} satisfies Pathnames<typeof locales>

// Types
export type AppLocales = (typeof locales)[number]

export type AppPathnames = keyof typeof pathnames

// if you add locales, you also need to add them to the middleware.ts matcher
export const i18nConfig = {
	defaultLocale,
	locales,
	localePrefix,
	pathnames,
}
