/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				foreground: "rgba(var(--foreground-rgb))",
				background: "rgba(var(--background-rgb))",
				"gradient1-from": "rgb(var(--gradient1-from-rgb))",
				"gradient1-to": "rgb(var(--gradient1-to-rgb))",
				mid1: "color-mix(in srgb, rgb(var(--gradient1-from-rgb)), rgb(var(--gradient1-to-rgb)))",
				"gradient2-from": "rgb(var(--gradient2-from-rgb))",
				"gradient2-to": "rgb(var(--gradient2-to-rgb))",
				"gradient3-from": "rgb(var(--gradient3-from-rgb))",
				"gradient3-to": "rgb(var(--gradient3-to-rgb))",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
