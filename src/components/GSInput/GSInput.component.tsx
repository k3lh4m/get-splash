import React from 'react';
import styled from 'styled-components';

interface IProps {
	type: string;
	placeholder: string;
	name: string;
	autocomplete: boolean;
	value: string;
	onChange(event: any): void;
	onFocus?(toggleValue: boolean): void;
	onBlur?(toggleValue: boolean): void;
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
			value={props.value}
			autoComplete={ props.autocomplete ? 'on' : 'off'}
			onChange={props.onChange}
			onFocus={() => { props.onFocus(true)} }
		/>
	)
}

export default GSInput;