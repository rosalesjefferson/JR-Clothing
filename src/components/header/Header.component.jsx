import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/Cart-icon.component'
import CartDropdown from '../cart-dropdown/Cart-dropdown.component'

import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart-selectors'

import { signOutStart } from '../../redux/user/user.actions'

import logo from '../../assets/logo-white.png'
import './Header.scss'

const Header = (props) => {
	const { currentUser, signOutStart, hidden, location } = props
	return(
		<nav className={`${ location.pathname !== '/' ? 'dark-Background' : null } nav`}>
			<div className='container'>
				<Link to='/' className='nav__logo-container'>
					<img src={ logo } alt='nav logo' className='nav__logo' />
				</Link>

				<input type="checkbox" id="nav" className="nav__check" />

                <label htmlFor="nav" className="nav__button">
                    <span className="nav__icon">&nbsp;</span>
                </label>

				<div className={`
					${location.pathname === '/' ? 'change-background' : null} 
					nav__navigation`}>
					<ul className='nav__lists'>
						<li className={`${location.pathname === '/' ? 'active' : null } nav__item`}>
							<Link to='/' className='nav__link'>HOME</Link>
						</li>
						<li className='nav__item' onClick={ () => window.scrollTo(0, 800) }>
							<Link to='/'className='nav__link'>CATEGORIES</Link>
						</li>
						<li className={`${location.pathname === '/shop' ? 'active' : null } nav__item`}>
							<Link to='/shop' className='nav__link'>SHOP</Link>
						</li>
						<li className='nav__item' onClick={ () => window.scrollTo(0, 1600) }>
							<Link to='/' className='nav__link'>ABOUT</Link>
						</li>
						{currentUser ? (
							<li className='nav__item'>
								<div onClick={ signOutStart } className='nav__link'>SIGN OUT</div>
							</li>
						) : (
							<li className={`${location.pathname === '/signin' ? 'active' : null } nav__item`}>
								<Link to='/signin' className='nav__link'>SIGN IN</Link>
							</li>
						)}
						<CartIcon />
					</ul>
				</div>
			{ hidden ? null : <CartDropdown /> }
			</div>
		</nav>
	)
}
const mapStateToProps = createStructuredSelector(
	{
		currentUser: selectCurrentUser,
		hidden: selectCartHidden
	}
)

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
