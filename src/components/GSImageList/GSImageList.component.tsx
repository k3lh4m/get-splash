import React from 'react';
import styled from 'styled-components';
import { IUnsplahPhotos } from '../../interfaces';
import GSImage from '../GSImage/GSImage.component';

import Slider from "react-slick";

import  "slick-carousel/slick/slick.css";
import  "slick-carousel/slick/slick-theme.css";

import "./../../styles/slick.css"

interface IProps {
	images: IUnsplahPhotos[] |null;
	copyImageUrlAction(val: string): void;
}

const SlickImageContainer = styled.div`
	margin-right: 10px;
`

const SlickSliderWrapper = styled.div`
	
`

const GSImageList: React.SFC<IProps> = (props) => {

	var settings = {
		accessibility: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		centerPadding: '50px',
	};

	return (
		<React.Fragment>
			<SlickSliderWrapper>
				<Slider {...settings} className="slick-override">
					{
						props.images &&
						props.images.map((data, index) => {
							return (
								<SlickImageContainer key={index}>
									<GSImage 
										imageUrl={data.urls} 	
										imageUser={data.user}
										copyImageUrlAction={props.copyImageUrlAction}
									/>
								</SlickImageContainer>
							)
						})
					}
				</Slider>
			</SlickSliderWrapper>
		</React.Fragment>
	)
}

export default GSImageList