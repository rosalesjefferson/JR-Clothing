import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selector'

import SignIn from '../../components/sign-in/Sign-in.component'
import SignUp from '../../components/sign-up/Sign-up.component'

import './Sign-in-sign-up.scss'

const SignInAndUpPage = ({ currentUser, history }) => {
	return(	
	<div className='sign-in-and-sign-up'>
		{ currentUser !== null ? <span move={ history.push('/')}></span> : null }
        <h4 className='header-4'>Please log in to continue</h4>
		<div className='padding-container'>
			<SignIn />
			<SignUp />
		</div>
	</div>
)}

const mapStateToProps = (state) => (
	{
		currentUser: selectCurrentUser(state)
	}
)

export default withRouter(connect(mapStateToProps)(SignInAndUpPage))