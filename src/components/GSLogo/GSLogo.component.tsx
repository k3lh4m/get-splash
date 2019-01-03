import React from 'react';
import styled from 'styled-components'

interface IProps {
	appName: string;
}

const GSLogoTitle = styled.h1`
	font-weight: 600;
	font-size: 1.5rem;
	padding: 0;
	margin 0;
`

const GSLogo: React.SFC<IProps> = (props) => {
	return (
		<GSLogoTitle>{props.appName}</GSLogoTitle>
	)
}

export default GSLogo