import React from 'react';
import styled from 'styled-components';
import { IUnsplashUrls, IUnsplashUser } from '../../interfaces';
import GSAuthor from '../GSAuthor/GSAuthor.component';

interface IProps {
	imageUrl: IUnsplashUrls; 
	imageUser: IUnsplashUser;
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
`

const GSImageContainer = styled('div')<{ backgroundImage: string }>`
	width: 240px;
	height: 240px;
	background: url(${props => props.backgroundImage}) no-repeat center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover ${GSImageAuthorContainer} {
		opacity: 1;
	}
`

const GSImage: React.SFC<IProps> = (props) => {
	console.log('props', props)

	return (
		<GSImageContainer backgroundImage={props.imageUrl.regular}>
			<GSImageAuthorContainer>
				<GSAuthor 
					userImageURL={props.imageUser.profile_image.small} 
					userTitle={props.imageUser.name}
				/>
			</GSImageAuthorContainer>


			<GSImageButtonContainer>

			</GSImageButtonContainer>		
		</GSImageContainer>
	)
}

export default GSImage;