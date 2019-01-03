import React from 'react'
import styled from 'styled-components';

interface IProps {
	label: string;
	action(): void;
}

const GSButtonAction = styled.button`
	padding: .6rem 1.5rem;
	color: ${ props => props.theme.light }
	background-color: ${ props => props.theme.primary }
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: 100ms all ease-in-out;

	&:hover {
		background-color: ${ props => props.theme.primaryDark }
	}
`

const GSButton: React.SFC<IProps> = (props) => {
	return (
		<GSButtonAction onClick={props.action}>
			{props.label}
		</GSButtonAction>
	)
}

export default GSButton;
