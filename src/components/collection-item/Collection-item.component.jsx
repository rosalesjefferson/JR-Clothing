import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addItem } from '../../redux/cart/cart.actions.js'

import { selectCurrentUser } from '../../redux/user/user.selector'

import './Collection-item.scss'

const CollectionItem = ({item, addItem, currentUser, location, history, match}) =>{
	const {name, price, imageUrl} = item
	return(
		<div className='collection-item'>
			<figure className='collection-item__logo-container'>
				<img src={ imageUrl } alt='Collection Item' className='collection-item__logo' />
			</figure>
			<div className='collection-item__content-container'>
				<h4 className='header-4'>{ name.toUpperCase() }</h4>
				<p className='collection-item__price'>${ price }</p>
			</div>
			{ 
				currentUser ? <button className='collection-item__button' onClick={ () => addItem(item) } >Add to cart</button> 
				: <button className='collection-item__button' onClick={ () => { history.push('/signin') } } >Add to cart</button>
			 }
		</div>
	)
}

const mapStateToProps = (state) => ({
		currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
		addItem: (item) => dispatch(addItem(item))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionItem))

