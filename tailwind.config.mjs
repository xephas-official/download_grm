/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"white": "#ffffff",
				"navy": "#000525",
				"yellow": "#FFFF00",
				"blue": "#2563eb",
			},
		},
		fontFamily: {
			mont: ["Montserrat", "sans-serif"],
		},
	},
	plugins: [],
}
