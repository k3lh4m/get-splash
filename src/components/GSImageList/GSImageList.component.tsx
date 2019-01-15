import React from 'react';
import styled from 'styled-components';
import { IUnsplahPhotos } from '../../interfaces';
import GSImage from '../GSImage/GSImage.component';

import  "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

interface IProps {
	images: IUnsplahPhotos[] |null;
	copyImageUrlAction(val: string): void;
}

const SlickContainer = styled.div`
	margin-right: 10px;
`

const GSImageList: React.SFC<IProps> = (props) => {

	var settings = {
		accessibility: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		centerPadding: '50px',
	};

	return (
		<React.Fragment>
			<Slider {...settings}>
				{
					props.images &&
					props.images.map((data, index) => {
						return (
							<SlickContainer key={index}>
								<GSImage 
									imageUrl={data.urls} 	
									imageUser={data.user}
									copyImageUrlAction={props.copyImageUrlAction}
								/>
							</SlickContainer>
						)
					})
				}
			</Slider>
		</React.Fragment>
	)
}

export default GSImageList