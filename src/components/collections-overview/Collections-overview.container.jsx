import { connect } from 'react-redux'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

import WithSpinner from '../with-spinner/With-spinner.component'
import CollectionsOverview from './Collections-overview.component'

const mapStateToProps = (state) => ( 
	{
		isLoading: selectIsCollectionFetching(state)
	}
)

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer