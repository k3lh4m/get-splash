import React from 'react';
import styled from 'styled-components';

import GSWelcome from '../GSWelcome/GSWelcome.component';
import GSButton from '../GSButton/GSButton.component';

import { IButtonConfig, IUnsplahPhotos } from './../../interfaces'
import GSImageList from '../GSImageList/GSImageList.component';
import GSImage from '../GSImage/GSImage.component';

interface IProps {
	isWelcomeActive: boolean;
	images: IUnsplahPhotos[];
	getPhotosButton: IButtonConfig;
	showSearchButton: IButtonConfig;
	copyImageUrlAction(val: string): void;
}



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
		<React.Fragment>
			{
				props.isWelcomeActive ? (
					<GSWelcome>
						<WelcomeMessageTitle>Welcome to GetSplashed</WelcomeMessageTitle>
						<WelcomeMessageContent>GetSplashed is a small extension that allows you to grab a few UnSplash images directly in your browser, without going directly to the site. </WelcomeMessageContent>
						<WelcomeMessageContent>Authors are always credited and you are able to download or copy the photo directly to you clipboard.</WelcomeMessageContent>
						
						<ButtonWrapper>
							<GSButton 
								type={props.getPhotosButton.type}
								label={props.getPhotosButton.label} 
								action={props.getPhotosButton.action}
							/>

							<GSButton 
								type={props.showSearchButton.type}
								label={props.showSearchButton.label} 
								action={props.showSearchButton.action}
							/>
						</ButtonWrapper>
		
					</GSWelcome>
				) : (
					<React.Fragment>

						{
							props.images.length > 1 &&
							<GSImageList
								images={props.images}
								copyImageUrlAction={props.copyImageUrlAction}
							/>
						}

						{
							props.images.length === 1 && 
							<GSImage 
								imageUrl={props.images[0].urls} 	
								imageUser={props.images[0].user}
								copyImageUrlAction={props.copyImageUrlAction}
							/>
						}

					</React.Fragment>
				)
			}
		</React.Fragment>
	)
}

export default GSBody