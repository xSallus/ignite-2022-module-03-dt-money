import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
		outline: 0;
		box-shadow: 0 0 2px ${(props) => props.theme['green-500']};
	}

	body {
		background-color: ${(props) => props.theme['gray-800']};
		color: ${(props) => props.theme['gray-100']};
		-webkit-font-smoothing: antialiased;
	}

	body, input, text-area, button {
		font: 400 1rem Roboto, sans-serif;
	}

	button {
		border: 0;
		cursor: pointer;

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}

	#root {
		min-height: 100vh;
	}

	@media(max-width:869px) {
		html {
			font-size: 87.5%;
		}
	}

	@media(max-width:411px) {
		font-size: 81.25%;
	}
`
