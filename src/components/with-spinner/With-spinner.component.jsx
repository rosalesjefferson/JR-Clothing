import React from 'react'

import LoadingSpinner from '../loading-spinner/Loading-spinner.component'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<LoadingSpinner />
		) : (
			<WrappedComponent { ...otherProps } />
		)
}
export default WithSpinner
