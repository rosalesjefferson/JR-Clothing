import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';

// provider give our components access to store and reducers
// provider is the parent of everything thats inside our provider which is the App and the rest of the component rendered in App
import { Provider }  from 'react-redux'

// for persist library
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={ store }>
	    <BrowserRouter>
		    <PersistGate persistor={ persistor }>
		    	<App />
		    </PersistGate>
	    </BrowserRouter> 
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// ReactDOM.render(
//   <React.StrictMode>
//   	<Provider store={ store }>
// 	    <BrowserRouter>
// 	    	<App />
// 	    </BrowserRouter> 
// 	</Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );