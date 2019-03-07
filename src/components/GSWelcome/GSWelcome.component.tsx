import React from 'react';

interface IProps {}

export const GSWelcome: React.SFC<IProps> = (props) => {
	return (
		<div style={{ padding: '16px' }}>
			{props.children}
		</div>
	)
}