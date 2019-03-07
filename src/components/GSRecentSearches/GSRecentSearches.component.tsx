import React from 'react';
import styled from 'styled-components';
import WelcomeMessageTitle from '../shared/WelcomeMessageTitle/WelcomeMessageTitle.component';
import Pill from '../shared/Pill/pill.component';

const RecentSearchContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.95);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
	padding: 16px;
	box-sizing: border-box;
`

const SearchContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`

interface IProps {
	previousSearches: string[];
	setSearchQuery(value: string): void;
}

const GSRecentSearches: React.StatelessComponent<IProps> = (props) => {
	return (
		<RecentSearchContainer>
			<WelcomeMessageTitle>Your Recent Searches</WelcomeMessageTitle>

			<SearchContainer>
				{
					props.previousSearches.map((data, index) => {
						return (
							<Pill 
								key={index}
								label={data}
								onClick={props.setSearchQuery}
							/>
						)
					})
				}
			</SearchContainer>
		</RecentSearchContainer>
	)
}

export default GSRecentSearches;