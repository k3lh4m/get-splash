import React from 'react';
import { IUnsplahPhotos } from '../../interfaces';
import GSImage from '../GSImage/GSImage.component';

interface IProps {
	images: IUnsplahPhotos[] |null;
}

const GSImageList: React.SFC<IProps> = (props) => {

	return (
		<React.Fragment>
			{
				props.images &&
				props.images.map((data, index) => {
					return (
						<GSImage 
							key={index}
							imageUrl={data.urls} 	
							imageUser={data.user}
						/>
					)
				})
			}
		</React.Fragment>
	)
}

export default GSImageList