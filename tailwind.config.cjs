/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {},
		container: {
			padding: '2rem'
		},
		screens: {
			sm: '640px',

			md: '783px',

			lg: '1024px',

			xl: '1355px',

			'2xl': '1882px'
		}
	},
	plugins: []
};
