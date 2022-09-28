import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import 'react-toastify/dist/ReactToastify.min.css'
import { Loading } from 'components/Loading'
import NextNProgress from 'nextjs-progressbar'
import Clippy from 'components/Clippy/Clippy.component'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Loading />
			<Clippy />
			<ToastContainer theme='dark' style={{ fontSize: '2rem' }} />
			<GlobalStyles />
			<NextNProgress
				color={theme.colors.primary}
				startPosition={0.1}
				stopDelayMs={200}
				height={4}
				showOnShallow={true}
			/>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
