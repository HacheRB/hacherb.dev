import { useEffect, useState } from 'react'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeToggle = () => {
	const [mounted, setMounted] = useState<boolean>(false)
	const [darkMode, setDarkMode] = useDarkMode()

	const isDarkMode = darkMode === 'dark' ? true : false
	const dark = isDarkMode ? 'opacity-100 ' : 'opacity-0 '
	const light = isDarkMode ? 'opacity-0 ' : 'opacity-100 '
	const toggleButton = isDarkMode ? 'left-8 ' : 'left-1 '

	const onClickHandler = () => {
		darkMode === 'dark' ? setDarkMode('light') : setDarkMode('dark')
	}

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<div
			className="relative flex h-8 w-[60px] cursor-pointer flex-row rounded-full bg-gray-200 dark:bg-dark-backgroundLight"
			onClick={onClickHandler}
		>
			<div
				className={`${toggleButton}absolute z-10 m-0 h-6 w-6 translate-y-1 transform rounded-full bg-indigo-600 transition-all duration-300 ease-in dark:bg-violet-500`}
			/>
			<div
				className={`${dark}absolute top-1 left-1 transition-all duration-300 ease-in`}
			>
				🌜
			</div>
			<div
				className={`${light}absolute top-1 right-1 transition-all duration-300 ease-in`}
			>
				🌞
			</div>
		</div>
	)
}

export default DarkModeToggle
