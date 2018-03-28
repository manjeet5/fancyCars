import React from 'react';
import {Title} from './components/title';
import {Button} from './components/button';
import styles from '../../sass/layouts/header.scss';

export const Header = ({onClick,...props}) =>{
	return <div className = 'headerContainer'>
		<Title  textId='companyName' text='Fancy Cars'/>
		<div className='sortByContainer'>
			<div className='titleSortByContainer'>
				<Title subText='Sort By'/>
			</div>
			<div  className='buttonSortByContainer'>
				<Button id='name' onClickFunction={onClick}>Name</Button>
				<Button id='available' onClickFunction={onClick}>Available</Button>
			</div>
		</div>
	</div>;
};
