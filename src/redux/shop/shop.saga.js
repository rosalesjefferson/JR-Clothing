import { takeLatest , call, put, all } from 'redux-saga/effects'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/Firebase.utils'

import { fetchCollectionSuccess, fetchCollectionFailure } from './shops.actions'

import ShopActionTypes from './shop.types'

export function* fetchCollectionAsync(){
	try{
		const collectionReference = firestore.collection('collections')

		const snapshot = yield collectionReference.get()

		const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
		
		if(Object.entries(collectionsMap) < 1){
			throw Error
		}else{
			yield put(fetchCollectionSuccess(collectionsMap))
		}
	}catch(err){
		yield put(fetchCollectionFailure(err))
	}
}

// takeEvery is creates a non blocking code
export function* fetchCollectionStart(){
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
export function* shopSagas(){
	yield all([
			call(fetchCollectionStart)
		])
}