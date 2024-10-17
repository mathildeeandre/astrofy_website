/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
			  lemondade: {
				...require("daisyui/src/theming/themes")["lemonade"],
				"secondary": "#9f9a0a",

			  },
			},
		  ],
	  },
}