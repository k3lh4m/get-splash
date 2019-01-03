import React from 'react';
import styled from 'styled-components'

import GSLogo from './../GSLogo/GSLogo.component';
import GSButton from '../GSButton/GSButton.component';

interface IProps {
	appName: string;
	buttonLabel: string;
	buttonAction(): void;
}

const GSHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 1rem;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	border-bottom: ${props => props.theme.grey} 1px solid;
`

const GSHeader: React.SFC<IProps> = (props) => {
	return (
		<GSHeaderContainer>
			<GSLogo appName={props.appName} />

			<GSButton 
				label={props.buttonLabel}
				action={props.buttonAction}
			/>

		</GSHeaderContainer>
	)
}

export default GSHeader