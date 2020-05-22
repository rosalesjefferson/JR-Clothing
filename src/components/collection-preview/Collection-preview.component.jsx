import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/Collection-item.component'

import './Collection-preview.style.scss'
import '../../scss/main.scss';

const CollectionPreview = ({title, items, location, match}) =>{
	return(
		<div className='collection-preview'>
			<Link to={ `${match.path}/${title.toLowerCase()}` } className='header-3 mb-3-half'>{ title }</Link>
			<div className='collection-preview__items-container mb-3-half'>
				{ items
				   .filter((item, index) => index < 4)
				   .map(item => (
					<CollectionItem key={ item.id } item={item}/>
				)) }
			</div>
		</div>
	)
}
export default React.memo(withRouter(CollectionPreview))

