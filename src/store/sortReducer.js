
const UPDATE_FILTER = 'UPDATE_FILTER';

export const SortReducer = (state = 'none', action) =>{
	console.log(action);
	switch(action.type){
	case UPDATE_FILTER :{
		console.log(action.payload.sortBy);
		if(action.payload.sortBy !== 'name' && action.payload.sortBy !== 'available') return 'none';
		return action.payload.sortBy;
	}
	default: return state;
	}
};
