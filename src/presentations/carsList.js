import React from 'react';
import {Car} from './car';
import styles from '../../sass/layouts/carsList.scss';
export const CarsList = (props) =>{
	return <div className='carsListContainer'>
		{
			props.list.map((car)=>{
				return <Car car={car} key={car.id}/>;
			})
		}
	</div>;
};
