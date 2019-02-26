import React from 'react';
import styled, { keyframes } from 'styled-components'

import SpinnerSvg from './../../assets/icons/loading-spinner.svg';

const InnerSpinner = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 60px;
`

const AppLogo = styled.img`
	width: 100%;
	height: auto;
`

interface IProps {

}

const LoadingSpinner: React.StatelessComponent<IProps> = () => {
	return (
		<React.Fragment>
			<InnerSpinner>
				<AppLogo src={SpinnerSvg} alt="Loading" />
			</InnerSpinner>
		</React.Fragment>
	)
}

export default LoadingSpinner;