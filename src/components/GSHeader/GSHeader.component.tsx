import React from 'react';
import styled from 'styled-components'

import GSLogo from './../GSLogo/GSLogo.component';
import GSButton from '../GSButton/GSButton.component';
import { IButtonConfig } from '../../interfaces';
import SearchUnsplashFormik from '../SearchUnsplashFormik/SearchUnsplashFormik.component';

interface IProps {
	appName: string;
	isSearchState: boolean;
	actionsConfig: IButtonConfig;
	searchConfig: IButtonConfig;
	isLoading: boolean;
	getQueryPhotos(searchQuery: string): void;
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

const GSButtonContainer = styled('div')<{ spacer: number, minHeight: number; }>`
	display: flex;
	min-height: ${props => props.minHeight}px;

	button:nth-child(2) {
		margin-left: ${props => props.spacer}px;
	}
`

const GSHeader: React.SFC<IProps> = (props) => {
	return (
		<GSHeaderContainer>
			<GSLogo appName={props.appName} />

			<GSButtonContainer minHeight={49} spacer={10}>
				{
					props.isSearchState ?
						<React.Fragment>
							<SearchUnsplashFormik 
								isLoading={props.isLoading}
								toggleSearch={props.searchConfig.action}
								onSubmit={props.getQueryPhotos}
							/>
						</React.Fragment>
					: 
						<React.Fragment>
							<GSButton 
								type={props.actionsConfig.type}
								label={props.actionsConfig.label} 
								action={props.actionsConfig.action}
							/>

							<GSButton 
								type={'search'}
								label={props.searchConfig.label} 
								action={props.searchConfig.action}
							/>
						</React.Fragment>		
				}

			</GSButtonContainer>
		</GSHeaderContainer>
	)
}

export default GSHeader