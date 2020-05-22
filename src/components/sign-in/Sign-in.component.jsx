import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/Form-input.component'
import CustomButton from '../custom-button/Custom-button.component.jsx'

import { SignInContainer, Title, ButtonContainer } from './Sign-in.styles.jsx'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'


const SignIn = ({ emailSignInStartDispatch, googleSignInStartDispatch }) =>{
	const [userCredentials, setCredentials] = useState({ email: '', password: '' })

	const handleChange = (e) =>{
		const { value, id } = e.target
		setCredentials({ ...userCredentials, [id]: value })
	}

	const { email, password } = userCredentials
	const handleSubmit = (e) =>{
		e.preventDefault()
		emailSignInStartDispatch(email, password)
	}

	return(
		<SignInContainer>
			<Title>I already have an account</Title>
			<span>
				Sign in with your email and password <span onClick={ () =>{ window.scrollTo(0, 650) } } className='create-account'><span className='or'>or </span><span className='create'>Create an account</span>
				</span>
			</span>

			<form onSubmit={ handleSubmit }>
				<FormInput 
					type='email'
					id='email' 
					handleChange={ handleChange } 
					value={ email } 
					label='email' 
					required 
				/>
				<FormInput 
					type='password' 
					id='password' 
					handleChange={ handleChange } 
					value={ password } 
					label='password' 
					required 
				/>
				<ButtonContainer>
					<CustomButton type='submit' > Sign In </CustomButton> 
					<CustomButton type='button' onClick={ googleSignInStartDispatch } isGoogleSignIn>Sign in with Google</CustomButton> 
				</ButtonContainer>
			</form>
		</SignInContainer>
	)
}
const mapDispatchToProps = (dispatch) =>({
	googleSignInStartDispatch: () => dispatch(googleSignInStart()),
	emailSignInStartDispatch: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn)