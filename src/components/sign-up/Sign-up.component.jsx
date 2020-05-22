import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/Form-input.component'
import CustomButton from '../custom-button/Custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import { SignupContainer, Title } from './Sign-up.styles'


const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({ 
		displayName: '', 
		email: '', 
		password: '',
		confirmPassword: '' 
	})

	const handleChange = (e) =>{
		const { value, id } = e.target
		setCredentials({ ...userCredentials, [id]: value })
	}

	const { displayName, email, password, confirmPassword } = userCredentials
	
	const handleSubmit = (e) =>{
		e.preventDefault()

		if(password !== confirmPassword){
			alert("Password don't match")
			return
		} 

		signUpStart({ displayName, email, password })
	}
	return(
		<SignupContainer>
			<Title>I do not have a account</Title>
			<span>Sign up with your email and password</span>
			<form onSubmit={ handleSubmit }>
				<FormInput 
					type='text'
					id='displayName'
					value={ displayName }
					handleChange={ handleChange }
					label='Display Name'
					required
				/>
				<FormInput 
					type='email'
					id='email'
					value={ email }
					handleChange={ handleChange }
					label='Email'
					required
				/>
				<FormInput 
					type='password'
					id='password'
					value={ password }
					handleChange={ handleChange }
					label='Password'
					required
				/>
				<FormInput 
					type='password'
					id='confirmPassword'
					value={ confirmPassword }
					handleChange={ handleChange }
					label='Confirm Password'
					required
				/>

				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignupContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (signUpInfo) => dispatch(signUpStart(signUpInfo))
})

export default connect(null, mapDispatchToProps)(SignUp)