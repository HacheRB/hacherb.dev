import { ThemeSwitch } from '@/ui/theme-switch'
import { LocaleSwitcher } from '@/ui/locale-switcher'

export function Header() {
	return (
		<nav className="ml-auto p-6">
			<form>
				<LocaleSwitcher />
				<ThemeSwitch />
			</form>
		</nav>
	)
}
