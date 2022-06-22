const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'8xl': '5.75rem'
			},
			fontFamily: {
				SpaceGrotesk: ['Space Grotesk', 'sans-serif']
			}
		}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				standardTheme: {
					primary: '#0A0A0A',
					'primary-focus': '#0A0A0A',
					'primary-content': '#ffffff',
					secondary: '#ffffff',
					'secondary-focus': '#ffffff',
					'secondary-content': '#ffffff',
					accent: '#FF03ED',
					'accent-focus': '#FF03ED',
					'accent-content': '#ffffff',
					neutral: '#0A0A0A',
					'neutral-focus': '#0A0A0A',
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
