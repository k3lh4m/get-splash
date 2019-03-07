import React from 'react';
import styled from 'styled-components';

import { GSSmallButton, GSAuthor } from './../index';

import { IUnsplashUrls, IUnsplashUser } from '../../interfaces';

interface IProps {
	imageUrl: IUnsplashUrls; 
	imageUser: IUnsplashUser;
	copyImageUrlAction(val: string): void;
}

const GSImageAuthorContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	opacity: 0;
`

const GSImageButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	opacity: 0;
	padding: 12px;
	position: relative;

	&:after {
		content: "";
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 70px;
		background: rgb(0,0,0);
		background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
	}
`

const GSImageContainer = styled('div')<{ backgroundImage: string }>`
	width: 240px;
	height: 240px;
	position: relative;
	background: url(${props => props.backgroundImage}) no-repeat center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover ${GSImageAuthorContainer},
	&:hover ${GSImageButtonContainer} {
		opacity: 1;
	}
`

const GSImageHidden = styled.img`
	position: absolute;
	width: 100%;
	opacity: 0;
`

export const GSImage: React.StatelessComponent<IProps> = (props) => {

	return (
		<GSImageContainer backgroundImage={props.imageUrl.small}>
			<GSImageAuthorContainer>
				<GSAuthor
					userImageURL={props.imageUser.profile_image.small} 
					userTitle={props.imageUser.name}
				/>
			</GSImageAuthorContainer>


			<GSImageButtonContainer>
				<GSSmallButton label="Copy Image URL" action={() => {props.copyImageUrlAction(props.imageUrl.full)}} />
				<GSSmallButton label="Download" action={() => {console.log('download')}} />
			</GSImageButtonContainer>		

			<GSImageHidden src={props.imageUrl.regular} />
		</GSImageContainer>
	)
}
