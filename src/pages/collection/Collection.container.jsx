import { connect } from 'react-redux'
import { compose } from 'redux'

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/with-spinner/With-spinner.component'
import CollectionPage from './Collection.component'

const mapStateToProps = (state) =>({
	isLoading: !selectIsCollectionLoaded(state)
})
const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage)

export default CollectionPageContainer

// this container is for mapStateToProps only