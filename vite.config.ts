/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	resolve: {
		alias: {
			'@': `${__dirname}/src`,
			'@components': `${__dirname}/src/components`,
			'@assets': `${__dirname}/src/assets`,
			'@constants': `${__dirname}/src/constants`,
			'@firebaseInstance': `${__dirname}/src/firebase`,
			'@interfaces': `${__dirname}/src/interfaces`,
			'@pages': `${__dirname}/src/pages`,
			'@routes': `${__dirname}/src/routes`,
			'@services': `${__dirname}/src/services`,
			'@interceptors': `${__dirname}/src/interceptors`,
			'@store': `${__dirname}/src/store`,
			'@styles': `${__dirname}/src/styles`,
			'@tests': `${__dirname}/src/tests`,
			'@config': `${__dirname}/src/config`,
			'@styled': `${__dirname}/src/styled`,
			'@slyces': `${__dirname}/src/store/slyces`,
			'@hooks': `${__dirname}/src/hooks`,
		},
	},
});
