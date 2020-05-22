import  UserActionTypes  from './user.types'
// user reducer store the state of our current user


const INITIAL__STATE = {
	currentUser: null,
	error: null
}

const userReducer = (state=INITIAL__STATE, action) => {
	switch(action.type){
		case UserActionTypes.SIGN_IN_SUCCESS:
		return{
			...state,
			currentUser: action.payload,
			error: null
		}

		case UserActionTypes.SIGN_OUT_SUCCESS:
		case UserActionTypes.SIGN_OUT_FAILURE:
		return{
			...state,
			currentUser: null,
			error: action.payload
		}
		default:
			return state;
	}
}

export default userReducer


