/* eslint-disable -- Following next-intl docs */
// @ts-nocheck
// next-intl documentation snippet uses any for the locale parameter
// https://next-intl-docs.vercel.app/docs/usage/configuration

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from '@/utils/i18n.config'

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound()

	return {
		messages: (
			await (locale === 'en'
				? // When using Turbopack, this will enable HMR for `en`
					import('./src/locales/en.json')
				: import(`./src/locales/${locale}.json`))
		).default,
	}
})
