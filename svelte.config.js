import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : '/wesley7104.github.io'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message, status }) => {
				// Ignore 404 errors for images during prerendering
				// Static assets are served correctly at runtime, but may not resolve during prerender
				if (status === 404 && path.includes('/images/')) {
					console.warn(`Skipping missing image during prerender: ${path} (referrer: ${referrer})`);
					return; // Return undefined to ignore the error
				}
				// For other errors, throw to fail the build
				throw new Error(`${message} (${path})`);
			}
		}
	}
};

export default config;
