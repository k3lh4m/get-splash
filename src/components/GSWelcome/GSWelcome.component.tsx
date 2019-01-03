import React from 'react';

interface IProps {}

const GSWelcome: React.SFC<IProps> = (props) => {
	return (
		<React.Fragment>
			{props.children}
		</React.Fragment>
	)
}

export default GSWelcome