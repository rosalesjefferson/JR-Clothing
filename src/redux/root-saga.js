import { all, call } from 'redux-saga/effects'

import { shopSagas } from './shop/shop.saga'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'
// all takes an array of sagas if we want to run more than 1 saga
export default function* rootSaga() {
	yield all([
		call(shopSagas),
		call(userSagas),
		call(cartSagas)	
	])
}

// the code above is use if you have many saga

// without all.
// only the first yield will execute
// export default function* rootSaga() {
// 	yield fetchCollectionStart()
// 	yield fetchCollectionStart()
// 	yield fetchCollectionStart()
// }