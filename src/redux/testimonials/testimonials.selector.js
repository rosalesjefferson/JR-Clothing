import { createSelector } from 'reselect'


const selectTestimonial = state => state.testimonial

export const selectTestimonialsData = createSelector([selectTestimonial], 
	testimonial => testimonial.testimonialsData
)

export default selectTestimonialsData

