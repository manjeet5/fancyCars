let carsList=[

];

const CREATE_CARS_LIST = 'CREATE_CARS_LIST';
const UPDATE_CAR_AVAILABILITY = 'UPDATE_CAR_AVAILABILITY';

export const CarsReducer = (state = carsList, action) =>{
	switch(action.type){
	case CREATE_CARS_LIST: return action.payload.slice(0);
	case UPDATE_CAR_AVAILABILITY : {
		return state.map(element=>{
			return element.id === Number(action.payload.id)?
				Object.assign({}, element, {'available': action.payload.data.available})
				: element;
		});
	}
	default: return state;
	}
};
