import React from 'react';
import styles from '../../sass/layouts/car.scss';
export class Car extends React.Component{


	render(){
		return <div className='carContainer'>
		  <div className='imgContainer'>
				<img src={this.props.car.img} alt='Car Img'/>
			</div>
			<div className='makeModelContainer'>
				<h6>{this.props.car.make} </h6>
				<h6>{this.props.car.year}</h6>
				<h6>{this.props.car.model}</h6>
			</div>
			<div className='carNameContainer'>
				<h4> {this.props.car.name} </h4>
			</div>
			{this.props.car.available !== 'In Dealership'? <h5>Not in Stock</h5>:
				<button>In Stock</button>}
		</div>;
	}
}({car,...props}) =>{
	console.log('CAR');
	console.log(car);

};
