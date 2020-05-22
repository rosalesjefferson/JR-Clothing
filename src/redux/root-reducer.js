// root reducer represents the overall reducer
// combines all of the reducers together
// import comebineReducers from redux library
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'

// local storage
import storage from 'redux-persist/lib/storage'

// session storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import testimonialReducer from './testimonials/testimonials.reducer'


// key: 'root' means we want to store our data to the  root storage
// no need to whitelist user because firebase handled that.
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({ 
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
	testimonial: testimonialReducer

});	

export default persistReducer(persistConfig, rootReducer)


// export default combineReducers({ 
// 	user: userReducer,
// 	cart: cartReducer
// });	




