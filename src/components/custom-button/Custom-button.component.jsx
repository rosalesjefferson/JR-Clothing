import React from 'react'

import { CustomButtonStyle } from './Custom-button.styles'

const CustomButton = ({children, ...otherProps}) => (
	<CustomButtonStyle  { ...otherProps }>
		{ children }
	</CustomButtonStyle>
)

export default CustomButton