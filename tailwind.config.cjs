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
			light:
			{
				"color-scheme": "light",
				"primary" : "4E008E",
				"secondary": "#ef9fbc",
				"accent" : "DD4124",
				"neutral": "#291334",
				"base-100": "#faf7f5",
				"base-200": "#efeae6",
				"base-300": "#e7e2df",
				"base-content": "#291334",
				"--rounded-btn": "1.9rem",
				"--tab-border": "2px",
				"--tab-radius": "0.7rem",
			  },
			dark: {
				"color-scheme": "light",
				"primary" : "4E008E",
				"secondary": "#ef9fbc",
				"accent" : "DD4124",
				"neutral": "#291334",
				"base-100": "#faf7f5",
				"base-200": "#efeae6",
				"base-300": "#e7e2df",
				"base-content": "#291334",
				"--rounded-btn": "1.9rem",
				"--tab-border": "2px",
				"--tab-radius": "0.7rem",
			  },
		  },
		],
	  },
}