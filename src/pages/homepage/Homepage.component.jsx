import React from 'react'

import Directory from '../../components/directory/Directory.component'
import CustomLink from '../../components/custom-links/Custom-link.component'
import Testimonials from '../../components/testimonials/Testimonials.component'
import Footer from '../../components/footer/Footer.component'

import headerBackground from '../../assets/header-3.jpg'

import '../../scss/main.scss'


// css
// import './Homepage.scss'
// id in Profiler is identifier to tell or the name of the component that your rendering.
// phase is either the mount phase or re-render phase. Re-render is for update phase when data is updated
// actualDuration is the actual time, duration or how long the component render
import './Homepage.scss'

const HomePage = (props) => (
		<div className='homepage'>
			<header className='header' style={{ background: `linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .85)), url(${headerBackground})` }}>
				<div className='header__description-container'>
					<h1 className='header-1'>STYLE YOUR CONFIDENCE</h1>
					<CustomLink to='/shop' lightbackground="true" redhover="true">Shop now</CustomLink>
				</div>
		    </header>
		    <section className='directory'>
		    	<div className='container'>
		    		<h3 className='header-3 mb-3-half'>Categories</h3>
					<Directory />
		    	</div>
		    </section>
		    <section className='testimonials'>
		    	<div className='container'>
		    		<h3 className='header-3 mb-3-half'>Testimonials</h3>
		    		<Testimonials />
		    	</div>
		    </section>
		    <Footer />
		</div>
)

export default HomePage

