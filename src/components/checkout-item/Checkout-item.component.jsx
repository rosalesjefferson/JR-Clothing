import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

import './Checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) =>{
	const {imageUrl, name, quantity, price} = cartItem 
	return(
		<div className='checkout-item-container'>
			<figure className='checkout__image-container'>
				<img src={ imageUrl } alt='Checkout' className='checkout__image' />
			</figure>
			<p className='checkout__name'>{ name }</p>
			<div className='checkout__quantity-container'>
				<div className='checkout__quantity-arrow' onClick={ () => removeItem(cartItem) }>&#10094;</div>
					<p className='checkout__value'>{ quantity }</p>
				<div className='checkout__quantity-arrow' onClick={ () => addItem(cartItem) }>&#10095;</div>
			</div>
			<p className='checkout__price'>${ price }</p>
			<span className='checkout__delete' onClick={ () => clearItem(cartItem) }>&#10005;</span>
		</div>
	)
}

const mapsToDispatchToProps = (dispatch) =>{
	return(
		{
			clearItem: (cartItem) =>{
				dispatch(clearItemFromCart(cartItem))
			},
			addItem: (item) =>{
				dispatch(addItem(item))
			},
			removeItem: (item) =>{
				dispatch(removeItem(item))
			}
		}
	)
}

export default connect(null, mapsToDispatchToProps)(CheckoutItem)

// <CheckOutItemContainer>
// 		<ImageContainer >
// 			<Image src={ imageUrl }alt='item'/>
// 		</ImageContainer>
// 		<Name>{ name }</Name>
// 		<QuantityContainer>
// 			<ArrowButton onClick={ () => removeItem(cartItem) }>&#10094;</ArrowButton>
// 				<Value>{ quantity }</Value>
// 			<ArrowButton onClick={ () => addItem(cartItem) }>&#10095;</ArrowButton>
// 		</QuantityContainer>
// 		<Price> { `$${price}` } </Price>
// 		<Delete onClick={ () => clearItem(cartItem) }>&#10005;</Delete>
// 	</CheckOutItemContainer>