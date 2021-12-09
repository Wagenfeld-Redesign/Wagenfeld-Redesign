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
					primary: '#004589',
					'primary-focus': '#003975',
					'primary-content': '#ffffff',
					secondary: '#f15a24',
					'secondary-focus': '#d24719',
					'secondary-content': '#ffffff',
					accent: '#f15a24',
					'accent-focus': '#d24719',
					'accent-content': '#ffffff',
					neutral: '#0a0b1c',
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
