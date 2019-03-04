import styled from 'styled-components';

export const GSButtonActionSearch = styled('button')<{ spacer?: number, active?: boolean, }>`
	padding: .6rem 1.5rem;
	color: ${ props => props.active ? props.theme.light : props.theme.dark };
	background-color: ${ props => props.active ? props.theme.dark : `transparent` };
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: 100ms all ease-in-out;
	border: ${ props => props.theme.dark } 2px solid;
	margin-left: ${ props => props.spacer }px;

	position: relative;

	svg {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		fill: ${ props => props.active ? props.theme.light : props.theme.dark };
	}

	&:hover {
		background-color: ${ props => props.active ? props.theme.dark : props.theme.dark };
		color: ${ props => props.theme.light }
		
		svg {
			fill: ${ props => props.active ? props.theme.light : props.theme.light };
		}
	}

	&:disabled {
		opacity: 0.6
	}
`