import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
		  animation: {
			meteor: "meteor 5s linear infinite",
		  },
		  keyframes: {
			meteor: {
			  "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
			  "70%": { opacity: "1" },
			  "100%": {
				transform: "rotate(215deg) translateX(-500px)",
				opacity: "0",
			  },
			},
		  },
		},
	  },

	plugins: [typography, forms, containerQueries, require("daisyui")],

	daisyui: {
		themes: true
	}

} satisfies Config;
