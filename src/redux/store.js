import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
// logger catches the action
import logger from 'redux-logger';

// remove thunk because we need to use saga as alternative solution but we can use thunk here. 
// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'

// import { fetchCollectionStart } from './shop/shop.saga'
import rootSaga from './root-saga'

import combineReducers from './root-reducer.js';
// import rootReducer from './root-reducer.js';

// logger has arrays. Store it in middlewares and store in middlewares in applyMiddleware.
// We can directly put logger inside applyMiddleware(). 
// const middlewares = [logger];
// const middlewares = [thunk];
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// if(process.env.NODE_ENV === 'development'){
// 	middlewares.push(logger)
// }

if(process.env.NODE_ENV === 'development'){
	middlewares.push(logger)
}
// MIDDLE WARE IS LIKE A LITTLE TUNNEL THAT INTERCEPTS OUR ACTION BEFORE GOING TO REDUCER AND MODIFY THAT OR ADD THINGS

// spread all of the methods or values of logger inside applyMiddleware.
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(combineReducers, applyMiddleware(...middlewares));
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
// const store = createStore(rootReducer, applyMiddleware(logger))

// after applyMiddleware gets called, we're going to run and add the individual saga that we're gonna write
// We're going to use sagaMiddleware.run()
// inside of run we pass each individual saga
// sagaMiddleware.run(fetchCollectionStart)
sagaMiddleware.run(rootSaga)

// all this does is call our persistStore and pass our store
// export const persistor = persistStore(store)
export const persistor = persistStore(store)

export default { store, persistor }