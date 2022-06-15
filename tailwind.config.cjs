const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				standardTheme: {
					primary: '#0B1420',
					'primary-focus': '#0A1828',
					'primary-content': '#ffffff',
					secondary: '#F05A23',
					'secondary-focus': '#FF7033',
					'secondary-content': '#ffffff',
					accent: '#F05A23',
					'accent-focus': '#FF7033',
					'accent-content': '#ffffff',
					neutral: '#0A1828',
					'neutral-focus': '#0f1129',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#1f2937',
					info: '#2094f3',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724'
				}
			}
		]
	}
};

module.exports = config;
