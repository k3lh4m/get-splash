import React from 'react'
import styled from 'styled-components';

import { Search } from '@material-ui/icons';

import { GSButtonActionSearch } from './../shared';

interface IProps {
	type: string;
	label: string;
	isActive?: boolean;
	action(): void;
}

const GSButtonActionPrimary = styled.button`
	padding: .6rem 1.5rem;
	color: ${ props => props.theme.light }
	background-color: ${ props => props.theme.primary }
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: 100ms all ease-in-out;
	border: ${ props => props.theme.primary } 2px solid;

	&:hover {
		background-color: ${ props => props.theme.primaryDark };
		border-color: ${ props => props.theme.primaryDark };
	}
`

const GSButtonActionSecondary = styled.button`
	padding: .6rem 1.5rem;
	color: ${ props => props.theme.dark }
	background-color: transparent;
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: 100ms all ease-in-out;
	border: ${ props => props.theme.dark } 2px solid;

	&:hover {
		background-color: ${ props => props.theme.dark }
		color: ${ props => props.theme.light }
	}
`

export const GSButton: React.StatelessComponent<IProps> = (props) => {

	return (
		<React.Fragment>
			{
				props.type === 'primary' &&
				<GSButtonActionPrimary onClick={props.action}>
					{props.label}
				</GSButtonActionPrimary>
			}

			{
				props.type === 'secondary' &&
				<GSButtonActionSecondary onClick={props.action}>
					{props.label}
				</GSButtonActionSecondary>
			}

			{
				props.type === 'search' &&
				<GSButtonActionSearch spacer={10} onClick={props.action}>
					<Search />					
				</GSButtonActionSearch>
			}

		</React.Fragment>
	)
}
