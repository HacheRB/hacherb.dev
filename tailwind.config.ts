import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					950: 'rgba(var(--primary-950))',
					900: 'rgba(var(--primary-900))',
					800: 'rgba(var(--primary-800))',
					700: 'rgba(var(--primary-700))',
					600: 'rgba(var(--primary-600))',
					500: 'rgba(var(--primary-500))',
					400: 'rgba(var(--primary-400))',
					300: 'rgba(var(--primary-300))',
					200: 'rgba(var(--primary-200))',
					100: 'rgba(var(--primary-100))',
					50: 'rgba(var(--primary-50))',
				},
			},
		},
	},
	// plugins: [require("@tailwindcss/forms")],
}
export default config
