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
	toggleSearch(): void;
	onSubmit(values: any): void;
}

const SearchUnsplashFormik: React.SFC<IProps> = (props: IProps) => {
	return (
		<React.Fragment>
			<Formik 
				initialValues={{
					searchQuery: '',
				}}
				onSubmit={(values: IFromInterface, { setSubmitting }: FormikActions<IFromInterface>) => {
					console.log(values.searchQuery)

					props.onSubmit(values.searchQuery);
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
								autocomplete={false}
								onChange={inputProps.handleChange}
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
								onClick={props.toggleSearch}
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