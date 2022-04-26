import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import OptionsContext from '../context/OptionsContext'

const LanguageSelector = () => {
	const router = useRouter()
	const { language, setLanguage } = useContext(OptionsContext)
	const languages = router.locales?.map((language) => (
		<option value={language} key={language}>
			{language}
		</option>
	))

	const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value)
	}
	return (
		<select
			className="cursor-pointer bg-transparent font-sans font-medium dark:bg-dark-background dark:text-gray-100"
			value={language}
			onChange={onChangeHandler}
		>
			{languages}
		</select>
	)
}

export default LanguageSelector
