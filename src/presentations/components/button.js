import React from 'react';
import styles from '../../../sass/components/button.scss';
export const Button = ({onClickFunction, children, id,...props}) =>{
	return  <button onClick={(e)=>onClickFunction(e.target.id)}
		id={typeof id!== 'undefined' ? id : 'default'}>
		{children}
	</button>;
};
