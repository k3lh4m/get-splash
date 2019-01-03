import React from 'react';
import styled from 'styled-components'

import GSLogo from './../GSLogo/GSLogo.component';
import GSButton from '../GSButton/GSButton.component';
import { IButtonConfig } from '../../interfaces';

interface IProps {
	appName: string;
	actionsConfig: IButtonConfig;
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
				type={props.actionsConfig.type}
				label={props.actionsConfig.label} 
				action={props.actionsConfig.action}
			/>
		</GSHeaderContainer>
	)
}

export default GSHeader