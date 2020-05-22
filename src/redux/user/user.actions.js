import UserActionTypes  from './user.types'

// GOOGLE SIGNIN!!!!
export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START
})

// EMAIL SIGN!!!!!!
export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword
})

export const signUpStart = (signUpInfo) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: signUpInfo
})

export const signInSucess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user
})

export const signInFailure = (err) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: err
})


export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS
})


export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error
})

