import React from 'react'
import styled from 'styled-components';

interface IProps {
	label: string;
	action(): void;
}

const GSButtonSmall = styled.button`
	padding: .3rem 1rem;
	color: ${ props => props.theme.light }
	background-color: transparent;
	border-radius: 4px;
	font-weight: 600;
	font-size: 9px;
	cursor: pointer;
	transition: 100ms all ease-in-out;
	line-height: 1rem;
	border: ${ props => props.theme.light } 1px solid;
	position: relative;
	z-index: 1;

	&:hover {
		background-color: ${ props => props.theme.light }
		color: ${ props => props.theme.dark }
	}
`


export const GSSmallButton: React.StatelessComponent<IProps> = (props) => {
	return (
		<GSButtonSmall onClick={props.action}>
			{props.label}
		</GSButtonSmall>
	)
}