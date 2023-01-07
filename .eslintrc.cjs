module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	// parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
};
