import React from 'react';
import styled from 'styled-components';

import { GSButton, GSImage, GSImageList, GSRecentSearches, GSWelcome } from './../index';
import { ParapgraphTitle, ParagraphContent } from '../shared';

import { IButtonConfig, IUnsplahPhotos } from './../../interfaces'

interface IProps {
	isWelcomeActive: boolean;
	isRecentSearchActive: boolean;
	images: IUnsplahPhotos[];
	getPhotosButton: IButtonConfig;
	showSearchButton: IButtonConfig;
	previousSearches: string[];
	setSearchQuery(value: string): void;
	copyImageUrlAction(val: string): void;
}

const ButtonWrapper = styled.div`
	display: flex;
	margin-top: 32px;

	button {
		margin-right: 16px;
	}
`

const GSBody: React.StatelessComponent<IProps> = (props) => {
	
	return (
		<React.Fragment>
			{
				props.isWelcomeActive ? (
					<GSWelcome>
						<ParapgraphTitle>Welcome to GetSplashed</ParapgraphTitle>
						<ParagraphContent>GetSplashed is a small extension that allows you to grab a few UnSplash images directly in your browser, without going directly to the site. </ParagraphContent>
						<ParagraphContent>Authors are always credited and you are able to download or copy the photo directly to you clipboard.</ParagraphContent>
						
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

			{
				props.isRecentSearchActive && 
				<GSRecentSearches 
					previousSearches={props.previousSearches}
					setSearchQuery={props.setSearchQuery}
				/>
			}
		</React.Fragment>
	)
}

export default GSBody