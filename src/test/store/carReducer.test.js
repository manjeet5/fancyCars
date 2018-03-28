var deepFreeze = require('deep-freeze');
var CarsReducer = require('../../../store/carsReducer');

const carsObjBefore = [];
deepFreeze( carsObjBefore);

test('update cars Reducer, action.type is correct, but content is[]', () =>{
	const carsObjAfter= [];
	let actionObj = {
		type:'CREATE_CARS_LIST',
		payload:[]
	};
	expect(CarsReducer(carsObjBefore,actionObj)).toEqual(carsObjAfter);
});
