import React             from 'react';
import { ThemeProvider } from 'styled-components'
import                   axios from 'axios';

import { theme, GlobalStyle } from './theme/globalStyle'
import GSHeader               from './components/GSHeader/GSHeader.component';
import { IUnsplahPhotos } from './interfaces/unsplash.interface';

interface IPhotos {

}

interface IProps {}

interface IState {
	loadingPhotos: boolean;
	photos: IUnsplahPhotos|null
}

class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = {
			loadingPhotos: false,
			photos: null,
		}

		this.getPhotos = this.getPhotos.bind(this);
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<div className="App">
						<GSHeader 
							appName="Get Splash" 
							buttonLabel="Get Photos"
							buttonAction={this.getPhotos}
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
		}, () => {
			axios.get('https://api.unsplash.com/photos/?client_id=f8ad8e75dd78d89bcdbe77a7c1a0966bbd6aa3f31f6bb7066fa859e0e901bc00&per_page=4')
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
}

export default App;
