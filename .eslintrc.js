const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

// https://github.com/vercel/style-guide
module.exports = {
	parserOptions: { project },
	root: true,
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
	},
	extends: [
		require.resolve('@vercel/style-guide/eslint/browser'),
		require.resolve('@vercel/style-guide/eslint/node'),
		require.resolve('@vercel/style-guide/eslint/react'),
		require.resolve('@vercel/style-guide/eslint/next'),
		require.resolve('@vercel/style-guide/eslint/typescript'),
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
	overrides: [
		// Next.js App Router Navigation elements must use default exports
		{
			files: [
				'./src/middleware.ts',
				'./**/{sitemap,robots}.ts',
				'./**/{error,layout,not-found,page,}.tsx',
			],
			rules: {
				'import/no-default-export': 'off',
				'import/prefer-default-export': ['error', { target: 'any' }],
			},
		},

		// Config
		{
			files: ['./**/*.config.{js,ts}'],
			rules: {
				'import/no-default-export': 'off',
			},
		},

		// Jest -> name.test.ts
		{
			files: ['./**/*.test.ts'],
			extends: [
				require.resolve('@vercel/style-guide/eslint/jest'),
				require.resolve('@vercel/style-guide/eslint/jest-react'),
			],
		},

		// Playwright -> name.spec.ts
		{
			files: ['./**/*.spec.ts'],
			extends: [require.resolve('@vercel/style-guide/eslint/playwright-test')],
		},
	],
}

// eslint-disable-next-line no-unused-vars -- Testing Rules
const undecidedRulesObject = {
	'@typescript-eslint/consistent-type-imports': 'off',
	'@typescript-eslint/no-confusing-void-expression': [
		'error',
		{ ignoreArrowShorthand: true },
	],
	'@typescript-eslint/no-misused-promises': [
		'error',
		{ checksVoidReturn: false },
	],
	'@typescript-eslint/no-shadow': 'off',
	'react/function-component-definition': [
		'warn',
		{
			namedComponents: 'arrow-function',
			unnamedComponents: 'arrow-function',
		},
	],
	// sort import statements
	'import/order': [
		'warn',
		{
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'always',
			alphabetize: { order: 'asc' },
		},
	],
	// sort named imports within an import statement
	'sort-imports': ['warn', { ignoreDeclarationSort: true }],
}
