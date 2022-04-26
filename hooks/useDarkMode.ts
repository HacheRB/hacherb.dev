import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { ThemeState } from '../lib/types'

function useDarkMode() {
	const [darkMode, setDarkMode] = useState<ThemeState>(
		// @ts-ignore:next-line.
		typeof window !== 'undefined' ? Cookies.get('DarkMode') : 'dark',
	)

	const colorMode = darkMode === 'dark' ? 'light' : 'dark'

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(colorMode)
		root.classList.add(darkMode)
		Cookies.set('DarkMode', darkMode)
	}, [colorMode, darkMode])

	return [darkMode, setDarkMode] as const
}

export default useDarkMode
