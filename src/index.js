import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './store/store';
import {client} from './store/store';
import {Provider} from 'react-redux';
import {persistor} from './store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const Index = () =>{
	console.log('index');
	return <App />;
};

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById('app')
);
