/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dark', 'light']
	}
}
module.exports = config
