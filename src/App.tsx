import React             from 'react';
import { ThemeProvider } from 'styled-components'
import axios from 'axios';

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
	photos: IUnsplahPhotos|null
}

class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = {
			loadingPhotos: false,
			isWelcomeActive: true,
			photos: null,
		}

		this.getPhotos = this.getPhotos.bind(this);
		this.goToUnsplash = this.goToUnsplash.bind(this)
	}

	render() {
		const actionsConfig: IButtonConfig[] = [
			{
				label: 'Get Photos',
				type: 'primary',
				action: this.getPhotos,
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
		console.log('hello');

		this.setState({
			loadingPhotos: true,
			isWelcomeActive: false,
		}, () => {
			axios.get(`https://api.unsplash.com/photos/?client_id=${unsplash_client}&per_page=1`)
				.then((data) => {
					const photos: IUnsplahPhotos = data.data;

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

	protected goToUnsplash() {
		window.location.href = 'https://unsplash.com/'
	}
}

export default App;
