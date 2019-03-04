import React from 'react';

interface IProps {}

const GSWelcome: React.SFC<IProps> = (props) => {
	return (
		<div style={{ padding: '16px' }}>
			{props.children}
		</div>
	)
}

export default GSWelcome