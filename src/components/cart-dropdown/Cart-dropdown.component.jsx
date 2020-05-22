import React from 'react'
import { connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/Custom-button.component'
import CartItem from '../cart-item/Cart-item.component'

import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

import './Cart-dropdown.style.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className='cart-dropdown'>
		<h4 className='header-4'>Cart Items</h4>
		<p className='cart__close' onClick={ () => dispatch(toggleCartHidden()) }>&times;</p>
		<div className='cart__items-container'>
			{
				cartItems.length ? cartItems.map(cartItem => (
					<CartItem 
						key={ cartItem.id }
						item={ cartItem }
					/>
				)) : <p className='cart__empty-message'> Your cart is empty</p>
			}
		</div>
			 <CustomButton onClick={ 
			() => {
				history.push('/checkout')
				dispatch(toggleCartHidden())
			}
		}> GO TO CHECKOUT </CustomButton>

	</div>	
)

const mapsStateToProps = (state) => {
	return(
		{
			cartItems: selectCartItems(state)
		}
	)
}

export default withRouter(connect(mapsStateToProps)(CartDropdown))

