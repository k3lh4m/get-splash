import React from 'react';
import styled from 'styled-components';
import Pill from '../shared/Pill/pill.component';
import ParapgraphTitle from '../shared/ParagraphTitle/ParagraphTitle.component';
import ParagraphContent from '../shared/ParagraphContent/ParagraphContent.component';

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
			<ParapgraphTitle>Your Recent Searches</ParapgraphTitle>
			
			{
				props.previousSearches.length ? 
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
				:
					<ParagraphContent>You do not have any recent searches :(</ParagraphContent>
			}
		</RecentSearchContainer>
	)
}

export default GSRecentSearches;