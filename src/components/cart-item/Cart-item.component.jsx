import React from 'react'

import { CartItemCard, Image, ItemDetails, Name } from './Cart-item.styles.jsx'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
	<CartItemCard>
		<Image src={ imageUrl } />
		<ItemDetails>
			<Name>{ name }</Name>
			<span className='quantity'>{ quantity } x { `$${price}` }</span>
		</ItemDetails>
	</CartItemCard>
)
export default React.memo(CartItem)