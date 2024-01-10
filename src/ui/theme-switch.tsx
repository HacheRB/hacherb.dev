'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return <button type="button">⌛</button>

	if (resolvedTheme === 'dark') {
		return (
			<button
				onClick={() => {
					setTheme('light')
				}}
				type="button"
			>
				🌛
			</button>
		)
	}

	if (resolvedTheme === 'light') {
		return (
			<button
				onClick={() => {
					setTheme('dark')
				}}
				type="button"
			>
				🌞
			</button>
		)
	}
}
