
const UPDATE_FILTER = 'UPDATE_FILTER';

export const SortReducer = (state = 'none', action) =>{
	switch(action.type){
	case UPDATE_FILTER :{
		return action.payload.sortBy;
	}
	default: return state;
	}
};
