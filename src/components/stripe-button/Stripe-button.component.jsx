import React from 'react'
import { connect } from 'react-redux'

import StripeCheckout from 'react-stripe-checkout'

import { clearCart } from '../../redux/cart/cart.actions'


const StripeCheckoutButton = ({ price, clearCart }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_pePr058YQLin6W0pJ0dSMmWy00vYNqVijj'
	const onToken = (token) =>{
		clearCart()
	}

	return(
		<StripeCheckout 
			label='Pay Now'
			name='JR Clothing Ltd.'
			billingAddres
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${ price }`}
			amout={ priceForStripe }
			currency='PHP'
			panelLabel='Pay Now'
			token={ onToken }
			stripeKey={ publishableKey }

		/>
	)
}

const mapDispatchToProps = (dispatch) => (
	{
		clearCart: () => {
			dispatch(clearCart())
		}
	}
)

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)