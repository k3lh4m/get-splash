import React from 'react';
import styled from 'styled-components';

const PillContainer = styled.div`
	position: relative;
	margin-right: 8px;
	margin-bottom: 5px;
	padding: 4px 16px;
	border: 1px solid #000;
	border-radius: 20px;
	font-size: 12px;
	box-sizing:border-box;

	&:hover {
		background-color: rgba(0, 0, 0, 1);
		
		span {
			color: #fff;
		}
	}
`

const ButtonPill = styled.button`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	cursor: pointer;
	outline: 0;
`

interface IProps {
	label: string;
	onClick(value: string): void;
}

const Pill: React.StatelessComponent<IProps> = (props) => {
	return (
		<PillContainer>
			<ButtonPill onClick={() => { props.onClick(props.label) }} />
			<span>{ props.label }</span>
		</PillContainer>
	)
}

export default Pill;