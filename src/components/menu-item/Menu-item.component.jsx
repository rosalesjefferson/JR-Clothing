import React from 'react'
import { withRouter } from 'react-router-dom'

import './Menu-item.scss'

const MenuItem = ({title, imageUrl, isBig, history, linkUrl, match}) => {
	return(
		<div className={`${isBig ? 'large' : null } menu-item`}>
			<div className='menu-item__background-image' style={{ background: `url(${imageUrl})` }}></div>
			<div className='menu-item__content' onClick={ () => {history.push(`${match.path}${linkUrl}`)} }>
				<h4 className='header-4'>{ title.toUpperCase() }</h4>
				<p className='menu-item__subtitle'>Shop now</p>
			</div>
		</div>
	)
}
export default withRouter(MenuItem)
