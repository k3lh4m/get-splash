import React                     from 'react';
import styled, { ThemeProvider } from 'styled-components'
import axios                     from 'axios';
import { debounce }              from 'lodash';
import buildUrl                  from 'build-url';

import { theme, GlobalStyle }           from './theme/globalStyle'

import GSHeader             from './components/GSHeader/GSHeader.component';
import GSBody               from './components/GSBody/GSBody.component';
import LoadingSpinner       from './components/LoadingSpinner/LoadingSpinner.component';

import { IUnsplahPhotos, IButtonConfig } from './interfaces';
import { unsplash_client }               from './const/unsplash.const';
import { hasLocalStorageKey, addRecentSearchesToLocalStorageKey } from './components/shared/local-storage.ts/local-storage';

interface IProps {}

const BodyWrapper = styled.div`
	min-height: 225px;
	position: relative;
`

interface IState {
	loadingPhotos: boolean;
	isWelcomeActive: boolean;
	photos: IUnsplahPhotos[];
	resultsPerPage: number;
	updatingCounter: boolean;
	isSearchStateActive: boolean;
	searchQuery: string;
	isRecentSearchActive: boolean;
	previousSearchQueries: string[];
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
			isSearchStateActive: false,
			searchQuery: '',
			isRecentSearchActive: false,
			previousSearchQueries: []
		}

		this.getPhotos = debounce(this.getPhotos.bind(this), 1000);
		this.getQueryPhotos = this.getQueryPhotos.bind(this);
		this.toggleSearchView = this.toggleSearchView.bind(this);
		this.setQueryString = this.setQueryString.bind(this);
		this.updateResultsPerPage = this.updateResultsPerPage.bind(this);
		this.getLabelLabel = this.getLabelLabel.bind(this);
		this.toggleRecentSearches = this.toggleRecentSearches.bind(this);
		this.copyImageLinkToClipboard = this.copyImageLinkToClipboard.bind(this);
		this.addRecentSearchesToLocalStorage = this.addRecentSearchesToLocalStorage.bind(this);
	}

	public componentDidMount() {
		// Set recent searches if there is local storage associated
		if (
			hasLocalStorageKey('recentSearches') !== null
		) {
			this.setState({
				previousSearchQueries: JSON.parse(hasLocalStorageKey('recentSearches')),
			})
		}
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
			action: this.toggleSearchView,
		}
		
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<div className="App">
						<GSHeader 
							appName="Get Splash" 
							actionsConfig={labelLink}
							searchConfig={searchButton}
							isLoading={this.state.loadingPhotos}
							isSearchStateActive={this.state.isSearchStateActive}
							currentSearchQuery={this.state.searchQuery}
							toggleRecentSearches={this.toggleRecentSearches}
							toggleSearchView={this.toggleSearchView}
							getQueryPhotos={this.getQueryPhotos}
							setQueryString={this.setQueryString}
						/>

						<BodyWrapper>
							{
								this.state.loadingPhotos ? (
									<LoadingSpinner />
								) : (
									<GSBody
										images={this.state.photos}
										isWelcomeActive={this.state.isWelcomeActive}
										isRecentSearchActive={this.state.isRecentSearchActive}
										previousSearches={this.state.previousSearchQueries}
										getPhotosButton={labelLink}
										showSearchButton={searchButton}
										copyImageUrlAction={this.copyImageLinkToClipboard}
										setSearchQuery={this.setQueryString}
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

	protected getQueryPhotos(searchQuery: string) {
		const urlString: string = buildUrl('https://api.unsplash.com/', {
			path: 'search/photos',
			queryParams: {
				client_id: unsplash_client,
				per_page: '8',
				query: searchQuery
			}
		});

		this.setState({
			loadingPhotos: true,
			isWelcomeActive: false,
			updatingCounter: false,
		}, () => {
			axios.get(urlString)
				.then((data: any) => {
					const photos = data.data.results;
					
					const previousSearchQueries = this.state.previousSearchQueries;
					previousSearchQueries.push(searchQuery);

					this.setState({
						photos,
						loadingPhotos: false,
						isRecentSearchActive: false,
						previousSearchQueries
					}, () => {
						addRecentSearchesToLocalStorageKey('recentSearches', this.state.previousSearchQueries);
					})
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}

	protected getPhotos() {	
		const urlString = buildUrl('https://api.unsplash.com/', {
				path: 'photos',
				queryParams: {
					client_id: unsplash_client,
					per_page: `${this.state.resultsPerPage}`,
				}
		});

		this.setState({
			loadingPhotos: true,
			isWelcomeActive: false,
			updatingCounter: false,
		}, () => {
			axios.get(urlString)
				.then((data) => {
					const photos: IUnsplahPhotos[] = data.data;

					this.setState({
						photos,
						loadingPhotos: false,
					})

					this.addRecentSearchesToLocalStorage();
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}

	protected toggleRecentSearches(toggleValue: boolean): void {
		if (
			toggleValue
		) {
			this.setState({
				isRecentSearchActive: true,
			})
		} else {
			this.setState({
				isRecentSearchActive: false,
			})
		}
	}


	protected toggleSearchView(toggleValue: boolean): void {
		if (
			toggleValue
		) {
			this.setState({
				isSearchStateActive: true,
			})
		} else {
			this.setState({
				isSearchStateActive: false,
				isRecentSearchActive: false,
			})
		}
	}

	protected setQueryString(event: any): void {
		if (
			typeof event === 'string'
		) {
			const searchQuery = event;

			this.setState({
				searchQuery,
			})
		} else {
			const searchQuery = event.target.value;

			this.setState({
				searchQuery,
			})
		}
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
			return `Loaded ${this.state.photos.length} Photos`
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

	protected addRecentSearchesToLocalStorage() {
		console.log(hasLocalStorageKey('test'));
	}
}

export default App;
