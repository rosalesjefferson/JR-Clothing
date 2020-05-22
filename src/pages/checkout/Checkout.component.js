import React from 'react'
import { connect } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'

import CheckoutItem from '../../components/checkout-item/Checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/Stripe-button.component'

import './Checkout.style.scss';
const CheckoutPage = ({cartItems, total}) => (
	<div className='checkout'>
		<div className='container'>
			{ cartItems.length? <ul className='checkout__header'>
				<li className='checkout__header-item'>Product</li>
				<li className='checkout__header-item'>Description</li>
				<li className='checkout__header-item'>Quantity</li>
				<li className='checkout__header-item'>Price</li>
				<li className='checkout__header-item'>Remove</li>
			</ul>
			: null }
			{
				cartItems.length ? 
				cartItems.map(cartItem => (
					<CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
					)
				) : <p className='checkout__no-items'>No Item selected.</p>
			}
			{
				cartItems.length ? 
					<div className='checkout__total-container'>
						<span className='checkout__total'>{ `TOTAL: $${total}` }</span>
						<StripeCheckoutButton price={ total } />
					</div> : null
			}

 		{cartItems.length ? <h4 className='checkout__warning'>
 					*If the SMS delivery failed, fill in your card details manually*<br />
 					*Please use the following test credit card for payment*<br />
 					4242 4242 4242 4242 - Exp: 10/20 - CVV: 123
		</h4>: null }
		</div>
	</div>
)

const mapStateToProps = (state) => {
	return(
		{
			cartItems: selectCartItems(state),
			total: selectCartTotal(state)
		}
	)
}

export default connect(mapStateToProps)(CheckoutPage)


// <CheckOutPageContainer>
// 		<Header>
// 			<HeaderTitle>
// 				<span>Product</span>
// 			</HeaderTitle>
// 			<HeaderTitle>
// 				<span>Description</span>
// 			</HeaderTitle>
// 			<HeaderTitle>
// 				<span>Quantity</span>
// 			</HeaderTitle>
// 			<HeaderTitle>
// 				<span>Price</span>
// 			</HeaderTitle>
// 			<HeaderTitle>
// 				<span>Remove</span>
// 			</HeaderTitle>
// 		</Header>
// 		{
// 			cartItems.length ? 
// 				cartItems.map(cartItem => (
// 					<CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
// 					)
// 				) : <span>No Items selected. Select item to buy</span>
// 		}

// 		{
// 			cartItems.length ? 
// 				<Total>
// 					<span>{ `TOTAL: $${total}` }</span>
// 				</Total> : null
// 		}
// 		<TestWarning>
// 			*Please use the following test credit card for payment*<br />
// 			4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
// 		</TestWarning>
// 		<StripeCheckoutButton price={ total } />
// 	</CheckOutPageContainer>