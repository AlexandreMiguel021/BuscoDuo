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
			"Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
		primary: '#eb214e',
		darkPrimary: '#0e2430',
		secondary: '#da372d',
		gradient: `linear-gradient(
			to right,
			#eb214e,
			#e32c3d,
			#da372d,
			#d0401c,
			#c44806
		);`,
		darkGradient:
			'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
		mainBg: '#121214',
		zinc900: '#18181B',
		zinc500: '#71717A',
		white: '#f7f7f7',
		black: '#030517',
		zinc: '#A1A1AA',
		lightGray: '#EAEAEA',
		emerald: '#34D399',
		gray: '#8F8F8F',
		darkGray: '#2E2F42',
		dangers: '#ff3330'
	},
	spacings: {
		'2xs': '0.4rem',
		xxs: '0.8rem',
		xs: '1.6rem',
		sm: '2.4rem',
		md: '3.2rem',
		lg: '4.0rem',
		xl: '4.8rem',
		xxl: '5.6rem',
		'2xl': '6.2rem',
		'3xl': '7.6rem',
		'4xl': '9.2rem'
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
