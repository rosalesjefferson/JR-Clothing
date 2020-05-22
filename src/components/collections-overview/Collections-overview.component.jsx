import React from 'react'
import { connect } from 'react-redux'

import CollectionPreview from '../../components/collection-preview/Collection-preview.component'
import Footer from '../footer/Footer.component'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'


import './Collection-overview.style.scss'

const CollectionsOverview = ({ collections }) => {
	return(
	<div className='collections-overview'>
		<div className='collections-overview__padding'>
			<div className='container'>
				{
					collections
					.map(({id, ...otherCollectionProps}) =>(
						<CollectionPreview 
							key={id} 
							{ ...otherCollectionProps }
						/>
					))
				}
			</div>
		</div>
	<Footer />
	</div>
)}

const mapStateToProps = (state) => (
	{
		collections: selectCollectionsForPreview(state)
	}
)

export default React.memo(connect(mapStateToProps)(CollectionsOverview))