import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo-red.png'

import './Footer.style.scss'

const Footer = () => (
	<footer className='footer'>
		<div className='container'>
			<nav className='footer__nav'>
				<div className='container'>
					<Link to='/' className='footer__logo-container'>
						<img src={ logo } alt='footer logo' className='footer__logo' />
					</Link>
					<ul className='footer__nav-lists'>
						<li className='footer__nav-item' onClick={ () => window.scrollTo(0, 1600) }><Link to='/' className='footer__nav-link'>ABOUT</Link></li>
						<li className='footer__nav-item' onClick={ () => window.scrollTo(0, 800) }><Link to='/' className='footer__nav-link'>CATEGORIES</Link></li>
						<li className='footer__nav-item' onClick={ () => window.scrollTo(0, 1600) }><Link to='/' className='footer__nav-link'>STORIES</Link></li>
						<li className='footer__nav-item'><Link to='/shop' className='footer__nav-link'>SHOP</Link></li>
						<li className='footer__nav-item'><Link to='/' className='footer__nav-link'>PRIVACY POLICY</Link></li>
						<li className='footer__nav-item'><Link to='/' className='footer__nav-link'>TERMS AND CONDITIONS</Link></li>
					</ul>
					<span className='footer__copyright'>&copy; 2019 JR Clothing</span>
				</div>
			</nav>
		</div>	
	</footer>
)

export default Footer