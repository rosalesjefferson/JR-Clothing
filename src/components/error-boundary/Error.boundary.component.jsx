import React from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './Error.boundary.styles'

class ErrorBoundary extends React.Component{
	constructor(){
		super()
		this.state = {
			hasErrord: false
		}
	}
	static getDerivedStateFromError(error){
		return { hasErrord: true }
	}

	componentDidCatch(error, info){
		console.log(error, 'componentDidCatch')
	}
	render(){
		if(this.state.hasErrord){
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' /> 
					<ErrorImageText>Something went wrong.....</ErrorImageText>
				</ErrorImageOverlay>
			)		
		}else{
			return this.props.children
		}
	}
}

export default ErrorBoundary