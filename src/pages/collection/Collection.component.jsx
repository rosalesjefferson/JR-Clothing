import React from 'react'
import { connect } from 'react-redux'

import { selectCollections } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/Collection-item.component'
import Footer from '../../components/footer/Footer.component'

import './Collection.component.scss'

const CollectionPage = ({ collection }) => {
	const { title, items } = collection
	return(
			<div className='collection-page'>
			<div className='collection-page__padding'>
				<div className='container'>
					<h3 className='header-3 mb-3-half'>{ title }</h3>
					<div className='collection-page__items-container'>
						{
							items.map(item => (
								<CollectionItem key={ item.id } item={ item }/>
							))
						}
					</div>
				</div>
			</div>
			<Footer />
			</div>
	)
}

// pass the /:collectionId then the state
const mapStateToProps = (state, ownProps) =>{
	const { collectionId } = ownProps.match.params
	return(
			{
				collection: selectCollections(collectionId)(state)
			}
	)
}
export default connect(mapStateToProps)(CollectionPage)