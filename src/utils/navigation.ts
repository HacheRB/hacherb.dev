import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { locales, pathnames, localePrefix } from '@/utils/i18n.config'

export const { Link, redirect, usePathname, useRouter } =
	createLocalizedPathnamesNavigation({
		localePrefix,
		locales,
		pathnames,
	})
