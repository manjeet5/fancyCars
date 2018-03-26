import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {CarsReducer} from './carsReducer';

const Reducers = combineReducers({
	cars:CarsReducer
});

const store = createStore(
	Reducers,
	compose(
		applyMiddleware(thunk)
	),
);


//const cache = new ReduxCache({ store });


export let persistor = persistStore(store);

export default store;
