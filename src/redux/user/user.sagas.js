import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { 
		auth, 
		googleProvider, 
		createUserProfileDocument,
		getCurrentUser
	   } from '../../firebase/Firebase.utils';

import { 
		signInSucess, 
		signInFailure,
		signOutSuccess, 
		signOutFailure
	   } from './user.actions';


export function* signIn(currentUser, displayName){

	try{
		const userReference = yield call(createUserProfileDocument, currentUser, { displayName });
		const userSnapshot = yield userReference.get();
		yield put(
			signInSucess({ id:userSnapshot.id, ...userSnapshot.data() })
		)
	}catch(err){
		yield put(signInFailure(err.message))
	}
}

export function* WithGoogle() {
	try{
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield signIn(user)
	}catch(err){
		yield put(signInFailure(err.message))
	}
}

export function* WithEmail({ payload: { email, password } }){
	try{
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield signIn(user)
	}catch(err){
		yield put(signInFailure(err.message))
		alert('Invalid email or password. Please try again.')
	}
}

export function* signUp({ payload: { displayName, email, password } }){
		try{
			const { user } = yield auth.createUserWithEmailAndPassword(email, password)
			yield signIn(user, displayName)
		}catch(err){
			yield put(signInFailure(err.message))
		}
}

export function* isUserAuthenticated(){
	try{
		const userAuth = yield getCurrentUser();
		if(!userAuth){
			return
		}else{
			yield signIn(userAuth)
		}

	}catch(err){
		yield put(signInFailure(signInFailure))
	}
}

export function* signOut(){
	try{
		yield auth.signOut()
		yield put(signOutSuccess())
	}catch(err){
		yield put(signOutFailure(err.message))
	}
}

export function* onSignOutStart(){
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, WithGoogle)
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, WithEmail)
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart(){
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* userSagas() {
	yield all([
				call(onGoogleSignInStart), 
				call(onEmailSignInStart),
				call(isUserAuthenticated),
				call(onSignOutStart),
				call(onSignUpStart)
			])
}






















