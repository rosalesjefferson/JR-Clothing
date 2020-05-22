import React from 'react'
import { connect } from 'react-redux'
import selectTestimonialsData from '../../redux/testimonials/testimonials.selector'

import TestmonialsItem from '../testimonials-item/Testimonials-item.component'

import './Testimonials.style.scss'

const Testimonials = ({ testimonialsData }) => (
	<div className='testimonials__container'>		
		{  testimonialsData.map(({ id, ...otherProps }) => (
			<TestmonialsItem 
				key={ id } 
				{ ...otherProps }
			/>
		))  }
	</div>
)

const mapStateToProps = (state) => ({
	testimonialsData: selectTestimonialsData(state)
})

export default connect(mapStateToProps)(Testimonials)