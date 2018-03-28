const UPDATE_FILTER = 'UPDATE_FILTER';
export function sortBy(eventId){
	let sortActionObjPromise = new Promise((resolve)=>{
		resolve(sortActionObj(eventId));
	});
	return function (dispatch){
		return sortActionObjPromise
			.then(actionObj=>dispatch(actionObj))
			.catch(err => console.log(err));
	};
}

function sortActionObj(eventId){
	if(eventId.toLowerCase() === 'name') return {type:UPDATE_FILTER, payload:{'sortBy': 'name'}};
	if(eventId.toLowerCase() === 'available') return {type:UPDATE_FILTER, payload:{'sortBy': 'available'}};
	return {type:UPDATE_FILTER, payload:{'sortBy': 'none'}};
}
