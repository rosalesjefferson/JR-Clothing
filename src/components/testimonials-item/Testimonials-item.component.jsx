import React from 'react'

import '../../scss/main.scss';
import './Testimonials-item.style.scss'

const TestmonialsItem = ({name, imageUrl, feedback}) => (
	<div className='testimonials__item'>
		<figure className='testimonials__image-container mb-2'>
			<img src={ imageUrl } alt='Testimonials' className='testimonials__image'/>
		</figure>
		<div className='testimonials__feedback-container'>
			<p className='testimonials__feedback'>{ feedback } &mdash; <em>{ name }</em></p>
		</div>
	</div>
)

export default React.memo(TestmonialsItem)