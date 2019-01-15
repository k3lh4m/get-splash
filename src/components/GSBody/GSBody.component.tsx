import React from 'react';
import styled from 'styled-components';

import GSWelcome from '../GSWelcome/GSWelcome.component';
import GSButton from '../GSButton/GSButton.component';

import { IButtonConfig, IUnsplahPhotos } from './../../interfaces'
import GSImageList from '../GSImageList/GSImageList.component';

interface IProps {
	isWelcomeActive: boolean;
	images: IUnsplahPhotos[] | null;
	actionsConfig: IButtonConfig[];
	copyImageUrlAction(val: string): void;
}

const BodyWrapper = styled.div`
	padding: 1rem;
`

const WelcomeMessageTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 500;
	margin: 0 0 1rem 0;
`

const WelcomeMessageContent = styled.p`
	font-size: 14px;
`

const ButtonWrapper = styled.div`
	display: flex;
	margin-top: 32px;

	button {
		margin-right: 16px;
	}
`

const GSBody: React.SFC<IProps> = (props) => {
	

	return (
		<BodyWrapper>
			{
				props.isWelcomeActive ? (
					<GSWelcome>
						<WelcomeMessageTitle>Welcome to GetSplashed</WelcomeMessageTitle>
						<WelcomeMessageContent>GetSplashed is a small extension that allows you to grab a few UnSplash images directly in your browser, without going directly to the site. </WelcomeMessageContent>
						<WelcomeMessageContent>Authors are always credited and you are able to download or copy the photo directly to you clipboard.</WelcomeMessageContent>
						
						<ButtonWrapper>
							{
								props.actionsConfig.map((data, index) => {
									return (
										<GSButton 
											key={index}
											type={data.type}
											label={data.label} 
											action={data.action}
										/>
									)
								})
							}
						</ButtonWrapper>
		
					</GSWelcome>
				) : (
					<GSImageList
						images={props.images}
						copyImageUrlAction={props.copyImageUrlAction}
					/>
				)
			}
		</BodyWrapper>
	)
}

export default GSBody