import { createGlobalStyle, css } from "styled-components"

const GlobalStyles = createGlobalStyle`

	*{
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};
      background-color: ${theme.colors.mainBg};
      background-image: url("/images/bg-galaxy.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
    }
  `}

`
export default GlobalStyles
