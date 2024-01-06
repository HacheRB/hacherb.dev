const styleguide = require('@vercel/style-guide/prettier')

const personalOverrides = {
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	insertPragma: false,
	printWidth: 80,
	proseWrap: 'preserve',
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	tabWidth: 2,
	useTabs: true,
}

module.exports = {
	...styleguide,
	...personalOverrides,
	plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
}
