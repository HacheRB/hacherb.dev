// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Inter', 'Open Sans', 'Merriweather', 'serif'],
		},
		screens: {
			xxs: '300px',
			xs: '500px',
			...defaultTheme.screens,
		},
		extend: {
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				github: '#484f58',
				githubHover: '#697280',
				linkedin: '#0a66c2',
				linkedinHover: '#0C7AE8',
				yellow: '#FCBA03',
				dark: {
					background: '#1C1C21',
					backgroundLight: '#232329',
				},
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			transitionProperty: {
				width: 'width',
			},
		},
	},
	variants: {
		extend: { backgroundColor: ['active'] },
	},
	plugins: [],
}
