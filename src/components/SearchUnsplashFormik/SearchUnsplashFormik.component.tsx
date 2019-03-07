import React from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';

import GSInput from '../GSInput/GSInput.component';
import { GSButtonActionSearch } from './../shared/GSSearchButton/GSSearchButton.component';

import { ArrowRightAlt, Clear } from '@material-ui/icons';

interface IFromInterface {
	searchQuery: string;
}

interface IProps {
	isLoading: boolean;
	currentSearchQuery: string;
	setQueryString(queryString: string): void;
	toggleRecentSearches(toggleValue: boolean): void;
	toggleSearchView(toggleValue: boolean): void;
	onSubmit(values: any): void;
}

const SearchUnsplashFormik: React.SFC<IProps> = (props: IProps) => {

	console.log(props);

	const openRecentSearches = () => {
	
	}
	
	return (
		<React.Fragment>
			<Formik 
				initialValues={{
					searchQuery: props.currentSearchQuery
				}}
				onSubmit={() => {
					props.onSubmit(props.currentSearchQuery);
				}}
				render={({
					values,
					touched,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
					setFieldValue,
					setFieldTouched,
					isValid,
				}) => {
					const inputProps = {
						values,
						touched,
						errors,
						handleChange,
						handleBlur,
						setFieldValue,
						setFieldTouched,
					};

					return (
						<Form style={{display: 'flex'}}>
							<GSInput 
								type="text" 
								name="searchQuery"
								placeholder="Search Unsplash"
								value={props.currentSearchQuery}
								autocomplete={false}
								onChange={props.setQueryString}
								onFocus={props.toggleRecentSearches}
								onBlur={props.toggleRecentSearches}
							/>

							<GSButtonActionSearch 
								type="submit" 
								spacer={10} 
								active={true}
								disabled={props.isLoading}
							>
								<ArrowRightAlt />
							</GSButtonActionSearch>

							<GSButtonActionSearch 
								type="button" 
								spacer={10} 
								active={false}
								onClick={() => { props.toggleSearchView(false)}}
							>
								<Clear />
							</GSButtonActionSearch>
						</Form>
					)
				}}
			/>
		</React.Fragment>
	)
};

export default SearchUnsplashFormik;