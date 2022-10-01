import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

	*{
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		.enter {
			transition: 200ms ease-out;
		}

		.enter-from {
			transform: scale(.95);
			opacity: 0;
		}

		.enter-to {
			transform: scale(1);
			opacity: 100;
		}

		.leave {
			transition: 200ms ease-out;
		}

		.leave-from {
			transform: scale(1);
			opacity: 1;
		}

		.leave-to {
			transform: scale(.95);
			opacity: 0;
		}
	}

	${({ theme }) => css`
		html {
			font-size: 62.5%;
		}

		body {
			font-family: ${theme.font.family};
			font-size: ${theme.font.sizes.md};
			background-color: ${theme.colors.mainBg};
			background-repeat: no-repeat;
			background-size: cover;
			height: 100vh;
			overflow-x: hidden;

			::-webkit-scrollbar {
				width: 4px; /* width of the entire scrollbar */
			}

			::-webkit-scrollbar-track {
				background: ${theme.colors.darkPrimary};
			}

			::-webkit-scrollbar-thumb {
				background-color: ${theme.colors.secondary};
				border-radius: 10px;
				border: 3px solid ${theme.colors.secondary};
			}
		}

		::selection {
			color: white;
			background-color: ${theme.colors.secondary};
		}
	`}

`
export default GlobalStyles
