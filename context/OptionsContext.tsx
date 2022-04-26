import { childrenProps, LanguageState, ThemeState } from '../lib/types'
import React, { useState } from 'react'
import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

interface OptionsContextInterface {
	language: LanguageState
	theme: ThemeState
	setLanguage: (language: LanguageState) => void
	setTheme: (theme: ThemeState) => void
}

const OptionsContext = React.createContext<OptionsContextInterface>({
	language: 'en',
	theme: 'light',
	setLanguage: (language: LanguageState) => {},
	setTheme: (mode: ThemeState) => {},
})

export const OptionsContextProvider = ({ children }: childrenProps) => {
	const router = useRouter()
	const [theme, setTheme] = useState<ThemeState>('light')
	const [language, setLanguage] = useState<LanguageState>(
		Cookies.get('NEXT_LOCALE') || router.locale || 'en',
	)
	const { pathname, asPath, query } = router

	//HAVE TO FIX TYPES
	const languageHandler = (language: LanguageState) => {
		Cookies.set('NEXT_LOCALE', language)
		setLanguage(language)
		// @ts-ignore:next-line. i18n object is possibly null
		i18n.changeLanguage(language)
		router.push({ pathname, query }, asPath, {
			locale: language,
			scroll: false,
		})
	}

	const themeHandler = (mode: ThemeState) => {
		setTheme(mode)
		localStorage.setItem('theme', mode)
	}

	return (
		<OptionsContext.Provider
			value={{
				language,
				theme,
				setTheme: themeHandler,
				setLanguage: languageHandler,
			}}
		>
			{children}
		</OptionsContext.Provider>
	)
}

export default OptionsContext
