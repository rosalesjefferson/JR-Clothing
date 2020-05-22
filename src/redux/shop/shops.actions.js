import ShopActionTypes from './shop.types'

export const fetchCollectionStart = () => {
	return(
			{
				type:ShopActionTypes.FETCH_COLLECTIONS_START
			}
	)
}

export const fetchCollectionSuccess = (collectionsMap) => {
	return(
			{
				type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
				payload: collectionsMap
			}
	)
}


export const fetchCollectionFailure = (errorMessage) => {
	return(
			{
				type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
				payload: errorMessage
			}
	)
}
