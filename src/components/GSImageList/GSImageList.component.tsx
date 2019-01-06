import React from 'react';
import { IUnsplahPhotos } from '../../interfaces';

interface IProps {
	images: IUnsplahPhotos[] |null;
}

const GSImageList: React.SFC<IProps> = (props) => {

	return (
		<React.Fragment>
			{
				props.images &&
				props.images.map((data) => {
					return (
						<span>{data.id}</span>
					)
				})
			}
		</React.Fragment>
	)
}

export default GSImageList