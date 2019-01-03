import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700');

	body {
		padding: 0;
		margin: 0;
		font-family: sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f7f7f7;
	}

	button {
		background: none;
    	border: 0;
    	color: inherit;
    	font: inherit;
    	line-height: normal;
    	overflow: visible;
    	padding: 0;
    	-webkit-appearance: button; /* for input */
    	-webkit-user-select: none; /* for button */
    	-moz-user-select: none;
        -ms-user-select: none;
	}
	  
	.App {
		width: 600px;
		height: 370px;
		font-family: 'Poppins', sans-serif;
		background-color: #fff;
	}
`

export const theme = {
	dark: "#000",
	light: "#fff",
	primary: "#3CB46E",
	primaryDark: "#3A9861",
	grey: '#EBEBEB'
}