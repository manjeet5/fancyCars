var deepFreeze = require('deep-freeze');
var {CarsReducer} = require('../../store/carsReducer');
console.log(CarsReducer);
const carsObjBefore = [];
deepFreeze(carsObjBefore);

test('update cars Reducer, action.type is correct, but payload is empty', () =>{
	const carsObjAfter= [];
	let actionObj = {
		type:'CREATE_CARS_LIST',
		payload:[]
	};
	expect(CarsReducer(carsObjBefore,actionObj)).toEqual(carsObjAfter);
});


test('update cars Reducer, action.type is correct, but content is complete array', () =>{
	let updatedArray = [
		{'id': 1, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 2, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 3, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 }
	];
	const carsObjAfter= updatedArray.slice(0);
	let actionObj = {
		type:'CREATE_CARS_LIST',
		payload:updatedArray
	};
	expect(CarsReducer(carsObjBefore,actionObj)).toEqual(carsObjAfter);
});

test('update cars availability, action.type is UPDATE_CAR_AVAILABILITY - In DealerShip, id is number', () =>{
	let carsList = [
		{'id': 1, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 2, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 3, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 }
	];
	let carsLisAfterUpdate = [
		{'available': 'In DealerShip','id': 1, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 2, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 3, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 }
	];
	let actionObj = {
		type:'UPDATE_CAR_AVAILABILITY',
		payload:{
			data:{'available':'In DealerShip'},
			id:1
		}
	};
	expect(CarsReducer(carsList ,actionObj)).toEqual(carsLisAfterUpdate);
});

test('update cars availability, action.type is UPDATE_CAR_AVAILABILITY - In DealerShip,id is string', () =>{
	let carsList = [
		{'id': 1, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 2, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 3, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 }
	];
	let carsLisAfterUpdate = [
		{'available': 'In DealerShip','id': 1, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 2, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 3, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 }
	];
	let actionObj = {
		type:'UPDATE_CAR_AVAILABILITY',
		payload:{
			data:{'available':'In DealerShip'},
			id:1
		}
	};
	expect(CarsReducer(carsList ,actionObj)).toEqual(carsLisAfterUpdate);
});
test('invalidActionType', () =>{
	let carsList = [
		{'id': 1, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 2, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 },
		{'id': 3, 'img': 'http://myfancycar/image','name': 'My Fancy Car','make': 'MyMake', 'model': 'MyModel', 'year': 2018 }
	];
	let carsListAfter = carsList.slice(0);
	let actionObj = {
		type:'UPDATE_CAR_asaAVAILABILITY',
		payload:{
			data:{available:'In DealerShip'},
			id:'1'
		}
	};
	expect(CarsReducer(carsList ,actionObj)).toEqual(carsListAfter);
});
