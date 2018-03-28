let carsList=[

];

const CREATE_CARS_LIST = 'CREATE_CARS_LIST';
const UPDATE_CAR_AVAILABILITY = 'UPDATE_CAR_AVAILABILITY';

export const CarsReducer = (state = carsList, action) =>{
	console.log('REDUCER FUNCTION');
	console.log(action.type);
	switch(action.type){

	case CREATE_CARS_LIST: return action.payload.slice(0);
	case UPDATE_CAR_AVAILABILITY : {
		console.log(action.payload);
		let result =  state.map(element=>{
			console.log(`element.id === action.payload.id ${element.id === action.payload.id}`);
			return element.id === action.payload.id?
				Object.assign({}, element, {'available': action.payload.data.available})
				: element;
		});
		console.log('RESULT');
		console.log(result);
		return result;
	}
	default: return state;
	}
};
