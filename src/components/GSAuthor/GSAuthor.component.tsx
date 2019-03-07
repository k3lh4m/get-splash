import React from 'react';
import styled from 'styled-components';

interface IProps {
	userImageURL: string;
	userTitle: string;
}

const GSAuthorContainer = styled.div`
	display: flex;
	padding: 12px;
	box-sizing: border-box;
	width: 100%;
	align-items: center;
	position: absolute;

	&:after {
		content: "";
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 70px;
		background: rgb(0,0,0);
		background: linear-gradient(180deg, rgba(0,0,0,0.80) 0%, rgba(255,255,255,0) 100%);
	}
`

const GSAuthorImage = styled('div')<{ backgroundImage: string }>`
	width: 24px;
	height: 24px;
	background: url(${props => props.backgroundImage}) no-repeat center;
	background-size: cover;
	border-radius: 12px;
	margin-right: 8px;
	position: relative;
	z-index: 1;
`

const GSAuthorName = styled.div`
	display: flex;
	font-size: 10px;
	color: ${props => props.theme.light};
	position: relative;
	z-index: 1;
`

export const GSAuthor: React.StatelessComponent<IProps> = (props: IProps) => {
	return (
		<GSAuthorContainer>
			<GSAuthorImage backgroundImage={props.userImageURL} />
			<GSAuthorName>
				{props.userTitle}
			</GSAuthorName>
		</GSAuthorContainer>
	)
}
