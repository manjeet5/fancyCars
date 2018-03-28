//var deepFreeze = require('deep-freeze');
var {SortReducer} = require('../../store/sortReducer');

const sortValueBefore = 'none';

test('sort Reducer, payload has expected filter i.e. name/available', () =>{
	const sortValueAfter= 'name';
	let actionObj = {
		type:'UPDATE_FILTER',
		payload:{'sortBy':'name'}
	};
	expect(SortReducer(sortValueBefore,actionObj)).toEqual(sortValueAfter);
});


test('sort Reducer, payload has incorrect filter value', () =>{

	const sortValueAfter1= 'none';
	let actionObj = {
		type:'UPDATE_FILTER',
		payload:{'sortBy':'asname'}
	};
	expect(SortReducer(sortValueBefore,actionObj)).toEqual(sortValueAfter1);
});
