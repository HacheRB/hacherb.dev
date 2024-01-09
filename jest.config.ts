// https://jestjs.io/docs/configuration

import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],

	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
	// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@/public/(.*)$': '<rootDir>/public/$1',
	},
	// A list of paths to modules that run some code to configure or set up the testing framework before each test. Delete jest.setup.ts too if you don't need this
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
	// Ignore playwright e2e/integration tests folder
	testPathIgnorePatterns: ['/node_modules/', '/e2e/', '/integration/'],
}

export default createJestConfig(config)
