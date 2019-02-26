import React                     from 'react';
import styled, { ThemeProvider } from 'styled-components'
import axios                     from 'axios';
import { debounce }              from 'lodash';

import { theme, GlobalStyle }           from './theme/globalStyle'

import GSHeader             from './components/GSHeader/GSHeader.component';
import GSBody               from './components/GSBody/GSBody.component';
import LoadingSpinner       from './components/LoadingSpinner/LoadingSpinner.component';

import { IUnsplahPhotos, IButtonConfig } from './interfaces';
import { unsplash_client }               from './const/unsplash.const';

interface IProps {}

const BodyWrapper = styled.div`
	padding: 1rem;
	min-height: 225px;
	position: relative;
`

interface IState {
	loadingPhotos: boolean;
	isWelcomeActive: boolean;
	photos: IUnsplahPhotos[];
	resultsPerPage: number;
	updatingCounter: boolean;
	isSearchState: boolean;
}

class App extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props)

		this.state = {
			loadingPhotos: false,
			isWelcomeActive: true,
			photos: [],
			resultsPerPage: 0,
			updatingCounter: false,
			isSearchState: false,
		}

		this.getPhotos = debounce(this.getPhotos.bind(this), 1000);
		this.goToUnsplash = this.goToUnsplash.bind(this);
		this.triggerSearchView = this.triggerSearchView.bind(this);
		this.updateResultsPerPage = this.updateResultsPerPage.bind(this);
		this.getLabelLabel = this.getLabelLabel.bind(this);
		this.copyImageLinkToClipboard = this.copyImageLinkToClipboard.bind(this);
	}

	render() {
		const labelLink: IButtonConfig = {
			label: this.getLabelLabel(),
			type: 'primary',
			action: this.updateResultsPerPage,
		}

		const searchButton: IButtonConfig = {
			label: 'Search Photos',
			type: 'secondary',
			action: this.goToUnsplash,
		}
		
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<div className="App">
						<GSHeader 
							appName="Get Splash" 
							actionsConfig={labelLink}
						/>

						<BodyWrapper>
							{
								this.state.loadingPhotos ? (
									<LoadingSpinner />
								) : (
									<GSBody
										images={this.state.photos}
										isWelcomeActive={this.state.isWelcomeActive}
										getPhotosButton={labelLink}
										showSearchButton={searchButton}
										copyImageUrlAction={this.copyImageLinkToClipboard}
									/>
								)
							}
						</BodyWrapper>
					</div>

					<GlobalStyle />
				</React.Fragment>
			</ThemeProvider>
		);
	}

	protected getPhotos() {

		this.setState({
			loadingPhotos: true,
			isWelcomeActive: false,
			updatingCounter: false,
		}, () => {
			axios.get(`https://api.unsplash.com/photos/?client_id=${unsplash_client}&per_page=${this.state.resultsPerPage}`)
				.then((data) => {
					const photos: IUnsplahPhotos[] = data.data;

					this.setState({
						photos,
						loadingPhotos: false,
					})
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}

	protected goToUnsplash(): void {
		this.setState({
			isSearchState: true,
		})
	}

	protected triggerSearchView(): void {
		console.log('trigger search');
	}

	protected updateResultsPerPage(): void {
		this.setState({
			resultsPerPage: this.state.resultsPerPage + 1,
			updatingCounter: true,
		}, () => {
			const click = debounce(this.getPhotos, 1000);

			click();
		})
	}

	protected getLabelLabel(): string {
		if (
			!this.state.loadingPhotos &&
			this.state.photos.length 
		) {
			return `Loaded ${this.state.resultsPerPage} Photos`
		}

		if (
			this.state.resultsPerPage === 0 
		) {
			return 'Get Top Photos';
		} else if (
			this.state.resultsPerPage === 1
		) {
			return `Getting ${this.state.resultsPerPage} Photo`	
		} else {
			return `Getting ${this.state.resultsPerPage} Photos`	
		}
	}

	protected copyImageLinkToClipboard(val: string) {
		let selBox = document.createElement('textarea');

		selBox.style.position = 'fixed';
		selBox.style.left = '0';
		selBox.style.top = '0';
		selBox.style.opacity = '0';
		selBox.value = val;

		document.body.appendChild(selBox);

		selBox.focus();
		selBox.select();

		document.execCommand('copy');
		document.body.removeChild(selBox);
	}
}

export default App;
