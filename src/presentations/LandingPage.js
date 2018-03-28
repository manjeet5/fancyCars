import React from 'react';

export const LandingPage = ({cars,sortBy,...props}) =>{
	console.log(cars);
	return <div>
		<button id='name' onClick={(e)=>{sortBy(e.target.id);}}> Name</button>
		<button id='Available' onClick={(e)=>{sortBy(e.target.id);}}> Available</button>
		<h1> Hello World  </h1>
	</div>;
};
