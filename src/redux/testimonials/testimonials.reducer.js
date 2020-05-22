import TestimonialsData from './testimonials-data'

const INITIAL_STATE = {
	testimonialsData: TestimonialsData
}

const testimonialReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		default:
		return state;
	}
}

export default testimonialReducer