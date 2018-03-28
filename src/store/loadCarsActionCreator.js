const BACKEND_URL = 'http://jsonstub.com/cars';
const AVAILABILITY_URL = 'http://jsonstub.com/availability?id=';

let requestHeader = {
	method: 'GET',
	mode: 'cors',
	headers:{
		'Content-Type':'application/json',
		'JsonStub-User-Key':'13261a17-7f70-4d85-beb7-e4c5b5106fde',
		'JsonStub-Project-Key':'94c118c5-481c-43dd-95b6-ef67a56dc7ba'
	},
};


const createCarsActionObj = (data) =>{
	return Array.isArray(data) ?
		{type:'CREATE_CARS_LIST',payload:data}
		: {type:'CREATE_CARS_LIST',payload:[]};
};

const updateCarAvailability = (id, data)=>{
	return {type:'UPDATE_CAR_AVAILABILITY',payload:{
		data,
		id
	}};
};
export function loadCars() {
	let carList;
	let createCarsActionObjPromise;
	return function(dispatch){
		return fetch(BACKEND_URL,requestHeader)
			.then((response) => response.json()) // converts readableStream to Json Obj
			.then(data => {
				carList = data;
				return createCarsActionObjPromise = new Promise((resolve,reject)=>{
					resolve(createCarsActionObj(carList));
				});
			})
			.then(carsActionObj =>{dispatch(carsActionObj);})//once the actionObj is available, dispatch the action to store
			.then(()=>{carList.forEach(
				car=>{loadAvailability(car.id,dispatch);});
			})
			.catch(err => console.error('SERVER REQUEST FAILED: ' + err));
	};
}


const  loadAvailability = (id,dispatch) =>{
	let carsAvailabilityPromise;
	//if(typeof id === 'undefined') return null;
	console.log(AVAILABILITY_URL + JSON.stringify(id).trim());

	console.log('dispatch thunk');
	return fetch(AVAILABILITY_URL + JSON.stringify(id).trim(),{
		method: 'GET',
		mode: 'cors',
		headers:{
			'Content-Type':'application/json',
			'JsonStub-User-Key':'13261a17-7f70-4d85-beb7-e4c5b5106fde',
			'JsonStub-Project-Key':'94c118c5-481c-43dd-95b6-ef67a56dc7ba'
		},
	})
		.then((response) => response.json())
		.then(data => {
			console.log(data);
			return carsAvailabilityPromise = new Promise((resolve,reject)=>{
				resolve(updateCarAvailability(id,data));
			});
		})
		.then(updateAvailability => {
			console.log(updateAvailability);
			dispatch(updateAvailability);})
		.then(result => {console.log(result);})
		.catch(err => console.error('SERVER REQUEST FAILED: ' + err));


};