import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {CarsReducer} from './carsReducer';
import {SortReducer} from './sortReducer';

const Reducers = combineReducers({
	cars:CarsReducer,
	sort:SortReducer
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
