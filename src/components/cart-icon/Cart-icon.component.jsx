import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors.js'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './Cart-icon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart__icon-container' onClick={ toggleCartHidden}>
		<ShoppingIcon className='cart__icon' />
		<span className='cart__item-count'>{ itemCount } </span>
	</div>
)

const mapDispatchToProps = (dispatch) =>({
		toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) =>({
		itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

