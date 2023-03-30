/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./styles/**/*.css',
		'./pages/**/*.{js,ts,jsx,tsx,css,module.css}',
		'./components/**/*.{js,ts,jsx,tsx,css,module.css}',
		'./app/**/*.{js,ts,jsx,tsx,css,module.css}',
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
		require('flowbite/plugin'),
		require('flowbite-typography'),
	],
}