import React             from 'react';
import { ThemeProvider } from 'styled-components'
import axios from 'axios';
import { debounce } from 'lodash';

import { theme, GlobalStyle } from './theme/globalStyle'
import { IUnsplahPhotos, IButtonConfig } from './interfaces';

import GSHeader               from './components/GSHeader/GSHeader.component';
import GSBody               from './components/GSBody/GSBody.component';
import { unsplash_client } from './const/unsplash.const';


interface IPhotos {

}

interface IProps {}

interface IState {
	loadingPhotos: boolean;
	isWelcomeActive: boolean;
	photos: IUnsplahPhotos[]|null;
	resultsPerPage: number;
	updatingCounter: boolean;
}

class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = {
			loadingPhotos: false,
			isWelcomeActive: true,
			photos: null,
			resultsPerPage: 0,
			updatingCounter: false,
		}

		this.getPhotos = debounce(this.getPhotos.bind(this), 1500);
		this.goToUnsplash = this.goToUnsplash.bind(this);
		this.updateResultsPerPage = this.updateResultsPerPage.bind(this);
		this.getLabelLabel = this.getLabelLabel.bind(this);
	}

	render() {
		const actionsConfig: IButtonConfig[] = [
			{
				label: this.getLabelLabel(),
				type: 'primary',
				action: this.updateResultsPerPage,
			}, 
			{
				label: 'Unsplash',
				type: 'secondary',
				action: this.goToUnsplash,
			}
		]

		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<div className="App">
						<GSHeader 
							appName="Get Splash" 
							actionsConfig={actionsConfig[0]}
						/>

						<GSBody
							images={this.state.photos}
							isWelcomeActive={this.state.isWelcomeActive}
							actionsConfig={actionsConfig}
						/>

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
		window.location.href = 'https://unsplash.com/'
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
			this.state.resultsPerPage === 0 
		) {
			return 'Get Photos';
		} else if (
			this.state.resultsPerPage === 1
		) {
			return `Get ${this.state.resultsPerPage} Photos`	
		} else {
			return `Get ${this.state.resultsPerPage} Photos`	
		}
	}
}

export default App;
