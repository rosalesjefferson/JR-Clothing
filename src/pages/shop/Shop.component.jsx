import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionStart } from '../../redux/shop/shops.actions'

import ErrorBoundary from '../../components/error-boundary/Error.boundary.component'
import LoadingSpinner from '../../components/loading-spinner/Loading-spinner.component'

import './Shop.scss'
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/Collections-overview.container'))
const CollectionPageContainer = lazy(() => import('../collection/Collection.container'))

const ShopPage = ({ fetchCollectionStart, match }) => {
	useEffect(() =>{
		fetchCollectionStart()
	}, [fetchCollectionStart])
	return(
		<div className='shop-page'>
        <ErrorBoundary>
          <Suspense fallback={ <LoadingSpinner /> }>
		     	<Route exact path={ `${match.path}` } component={ CollectionsOverviewContainer } />
		        <Route exact path={ `${match.path}/:collectionId` } component={ CollectionPageContainer } />
     	  </Suspense>
        </ErrorBoundary>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
















// SECOND
// import React from 'react'
// import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'

// import { fetchCollectionStartAsync } from '../../redux/shop/shops.actions'
// import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector'


// import WithSpinner from '../../components/with-spinner/With-spinner.component'
// import CollectionsOverview from '../../components/collections-overview/Collections-overview.component'
// import CollectionPage from '../collection/Collection.component'

// import './Shop.scss'

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

// // now all getting handled by a reducer

// class ShopPage extends React.Component {
// 	componentDidMount(){
// 		const { fetchCollectionStartAsync } = this.props
// 		// we will call it the moment component mount
// 		fetchCollectionStartAsync()
// 	}
	
// 	render(){
// 		const { match, isCollectionsFetching, isCollectionsLoaded } = this.props
// 		return(
// 			<div className='shop-page'>
// 		     	<Route 
// 			        exact path={ `${match.path}` } 
// 			        render={(props) => <CollectionsOverviewWithSpinner isLoading={ isCollectionsFetching } { ...props } />} 
// 		        />

// 		         <Route 
// 			        exact path={ `${match.path}/:collectionId` } 
// 			        render={(props) => <CollectionPageWithSpinner isLoading={ !isCollectionsLoaded } { ...props } />} 
// 		        />
// 			</div>
// 		)
// 	}

// }

// const mapStateToProps = (state) => {
// 	return(
// 			{
// 				isCollectionsFetching: selectIsCollectionFetching(state),
// 				isCollectionsLoaded: selectIsCollectionLoaded(state)
// 			}
// 	)
// }

// const mapDispatchToProps = (dispatch) => {
// 	return(
// 			{
// 				fetchCollectionStartAsync: () => {
// 					dispatch(fetchCollectionStartAsync())
// 			}
// 		}
// 	)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)




// FIRSTTTTTTTTTT

// import React from 'react'
// import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'

// import  { firestore, convertCollectionSnapshotToMap } from '../../firebase/Firebase.utils'
// import { updateCollections } from '../../redux/shop/shops.actions'

// import WithSpinner from '../../components/with-spinner/With-spinner.component'

// import CollectionsOverview from '../../components/collections-overview/Collections-overview.component'
// import CollectionPage from '../collection/Collection.component'
// import './Shop.scss'

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

// class ShopPage extends React.Component {
// 	state = {
// 		loading: true
// 	};

// 	unsubscribeFromSnapshot = null

// 	componentDidMount(){
// 		const { updatecollections } = this.props
// 		const collectionReference = firestore.collection('collections')

// 		// fetch('https://firestore.googleapis.com/v1/projects/ecommerce-f6276/databases/(default)/documents/collections')
// 		// .then(response => response.json())
// 		// .then(collections => console.log(collections, 'fetch'))

// 		collectionReference.get().then(snapshot => {
// 			// collectionsMap is now back to original format from array to object
// 			const collectionsMap = convertCollectionSnapshotToMap(snapshot)
// 			updatecollections(collectionsMap)
// 			console.log(collectionsMap, 'get')
// 			this.setState({ loading: false })
// 		})


// 	}
// 	  // ecommerce-f6276
// 	render(){
// 		const { match } = this.props
// 		const { loading } = this.state
// 		return(
// 			<div className='shop-page'>
// 		     	<Route 
// 			        exact path={ `${match.path}` } 
// 			        render={(props) => <CollectionsOverviewWithSpinner isLoading={ loading } { ...props } />} 
// 		        />

// 		         <Route 
// 			        exact path={ `${match.path}/:collectionId` } 
// 			        render={(props) => <CollectionPageWithSpinner isLoading={ loading } { ...props } />} 
// 		        />
// 			</div>
// 		)
// 	}

// }

// // const ShopPage = ({ match }) => {
// // console.log(match, 'shop')
// // return(
// // <div className='shop-page'>
// //     <Route path={ match.path } component={ CollectionsOverview } />
// //     <Route  path={ `${match.path}/:collectionId` } component={ Collection } />
// // </div>
// // )}

// // const ShopPage = ({ match }) => {
// // 	console.log(match, 'shop')
// // 	return(
// // 	<div className='shop-page'>
// //         <Route path={ match.path } component={ CollectionsOverview } />
// // 	</div>
// // )}



// // state = {
// // 		loading: true
// // 	};

// // 	unsubscribeFromSnapshot = null

// // 	componentDidMount(){
// // 		const { updatecollections } = this.props
// // 		const collectionReference = firestore.collection('collections')

// // 		this.unsubscribeFromSnapshot = collectionReference.onSnapshot(async snapshot => {
// // 			// collectionsMap is now back to original format from array to object
// // 				const collectionsMap = await convertCollectionSnapshotToMap(snapshot)
// // 				updatecollections(collectionsMap)
// // 				console.log(collectionsMap, 'collections')
// // 				collectionsMap === {} ? this.setState({ loading: true }) : this.setState({ loading: false })
// // 		})
// // 	}

// const mapDispatchToProps = (dispatch) => {
// 	return(
// 		{
// 			updatecollections: (collectionsMap) =>{
// 				dispatch(updateCollections(collectionsMap))
// 			}
// 		}
// 	)
// }

// export default connect(null, mapDispatchToProps)(ShopPage)
