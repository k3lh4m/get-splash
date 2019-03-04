import React from 'react';
import styled from 'styled-components';

interface IProps {
	type: string;
	placeholder: string;
	name: string;
	autocomplete: boolean;
	onChange(event: any): void;
}

const Input = styled.input`
	padding: .6rem 1.5rem;
	color: ${ props => props.theme.dark }
	background-color: transparent;
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: 100ms all ease-in-out;
	border: ${ props => props.theme.dark } 2px solid;

	&::placeholder {
		color: ${ props => props.theme.dark };
	}
`

const GSInput: React.StatelessComponent<IProps> = (props) => {
	return (
		<Input 
			placeholder={props.placeholder}
			type={props.type}
			name={props.name}
			autoComplete={ props.autocomplete ? 'on' : 'off'}
			onChange={props.onChange}
		/>
	)
}

export default GSInput;