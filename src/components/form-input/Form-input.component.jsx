import React from 'react'

import { FormInputGroup, Input, Label } from './Form-input.styles.jsx'

const FormInput = ({ handleChange, label, ...otherProps }) =>(
	<FormInputGroup>
		<Input
			onChange={ handleChange }
			test={otherProps.value}
			{ ...otherProps }
		/>
		{
			label ? (
				<Label value={ otherProps.value.length }>
					{ label.toUpperCase() }
				</Label>
			) :  null
		}
	</FormInputGroup>

)

export default FormInput
