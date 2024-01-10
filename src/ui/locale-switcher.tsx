import { useLocale, useTranslations } from 'next-intl'
import { locales } from '@/utils/i18n.config'
import { LocaleSwitcherSelect } from '@/ui/locale-switcher-select'

export function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher')
	const locale = useLocale()

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
			{locales.map((cur) => (
				<option key={cur} value={cur}>
					{t('locale', { locale: cur })}
				</option>
			))}
		</LocaleSwitcherSelect>
	)
}
