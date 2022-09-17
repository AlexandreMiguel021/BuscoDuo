const theme = {
	grid: {
		container: '128rem',
		gutter: '3.2rem'
	},
	border: {
		radius: '0.4rem'
	},
	font: {
		family:
			"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		light: 300,
		normal: 400,
		bold: 600,
		sizes: {
			xs: '1.2rem',
			sm: '1.4rem',
			md: '1.6rem',
			lg: '1.8rem',
			xl: '2.4rem',
			xxl: '2.8rem',
			'2xl': '3.6rem',
			'3xl': '4.2rem',
			'4xl': '5rem',
			'5xl': '5.8rem'
		}
	},
	colors: {
		primary: '#996DFF',
		darkPrimary: '#2a2634',
		secondary: '#00947E',
		gradient: `linear-gradient(
      45deg,
      #fa8bff 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );`,
		darkGradient:
			'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
		mainBg: '#121214',

		white: '#f7f7f7',
		black: '#030517',
		zinc: '#A1A1AA',
		lightGray: '#EAEAEA',
		gray: '#8F8F8F',
		darkGray: '#2E2F42'
	},
	spacings: {
		xxs: '0.8rem',
		xs: '1.6rem',
		sm: '2.4rem',
		md: '3.2rem',
		lg: '4.0rem',
		xl: '4.8rem',
		xxl: '5.6rem'
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50
	}
} as const

export default theme
