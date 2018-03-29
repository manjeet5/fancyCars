const BACKEND_URL = 'http://jsonstub.com/cars';
const AVAILABILITY_URL = 'http://jsonstub.com/availability?id=';

let requestHeader = {
	method: 'GET',
	mode: 'cors',
	headers:{
		'Access-Control-Allow-Origin': 'http://localhost',
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
	return {
		type:'UPDATE_CAR_AVAILABILITY',
		payload:{
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
			.catch(err => {console.error('SERVER REQUEST FAILED: ' + err);
				loadFakeCarsList();});
	};
}

const loadFakeCarsList = (fakeCarsList) =>{

};

const  loadAvailability = (id,dispatch) =>{
	let carsAvailabilityPromise;
	//console.log(AVAILABILITY_URL + JSON.stringify(id).trim());
	return fetch(AVAILABILITY_URL + JSON.stringify(id).trim(),requestHeader)
		.then((response) => response.json())
		.then(data => {
			return carsAvailabilityPromise = new Promise((resolve,reject)=>{
				resolve(updateCarAvailability(id,data));
			});
		})
		.then(updateAvailability => dispatch(updateAvailability))
		.catch(err => console.error('SERVER REQUEST FAILED: ' + err));


};
